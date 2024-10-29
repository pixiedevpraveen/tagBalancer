/**
 * Balance tags of html string
 * @param html - unbalanced or balanced html string
 * @returns balanced html string
 * @example
 * ```ts
 * const htmlStr = `<div>
 * <br></div>
    <img src="/idb/files?id=vEQibqclfEKwjhM&amp;fk=Frq9gA68GK21saU" data-id="vEQibqclfEKwjhM" data-type="drawing"
        width="300" data-fk="Frq9gA68GK21saU" style="background-color: rgb(255, 255, 255);">
    <br>
    </div>`;

    // removes the extra closing div
    const outputStr = tagBalancer(htmlStr); 
    
 * ```
 */
export function tagBalancer(html: string) {
    if (!html) return "";

    /** 
     * attempt to balance HTML tags in the html string
     * by removing any unmatched opening or closing tags
     * IMPORTANT: we *assume* HTML has *already* been 
     * sanitized and is safe/sane before balancing!
     * 
     * adapted from CODESNIPPET: A8591DBA-D1D3-11DE-947C-BA5556D89593
     */
    var re = /<\/?\w+[^>]*(\s|$|>)/g;

    // convert everything to lower case; this makes
    // our case insensitive comparisons easier
    var tags = html.toLowerCase().match(re);
    // console.debug(tags)
    // if (!tags) return "";
    if (!tags) return html;

    // no HTML tags present? nothing to do; exit now
    var tagcount = (tags || []).length;
    if (tagcount == 0)
        return html;

    var tagname: string, tag: string;
    var ignoredtags = /\b{p|img|br|input|li|hr}\b/;
    var match;
    var tagpaired: boolean[] = [];
    var tagremove: boolean[] = [];
    var needsRemoval = false;

    // loop through matched tags in forward order
    for (var ctag = 0; ctag < tagcount; ctag++) {

        // tagname = tags[ctag].replace(/<\/?(\w+).*/, "$1");
        tagname = tags[ctag].replace(/<\/?(\w+)[\s\S]*/, "$1");

        // console.debug('HS>balanceTag:', tagname, tagpaired[ctag] || ignoredtags.has(tagname) ? (tagpaired[ctag] ? "paired" : "ignored") : '');

        // skip any already paired tags
        // and skip tags in our ignore list; assume they're self-closed
        if (tagpaired[ctag] || ignoredtags.test(tagname))
            continue;

        tag = tags[ctag];
        match = -1;

        if (!/^<\//.test(tag)) {
            // this is an opening tag
            // search forwards (next tags), look for closing tags
            for (var ntag = ctag + 1; ntag < tagcount; ntag++) {
                if (!tagpaired[ntag] && tags[ntag] == "</" + tagname + ">") {
                    match = ntag;
                    break;
                }
            }
        }

        if (match == -1 /* || !all_tag_whitelist.test(tag?.match(/<([a-zA-Z][^\s>]*)\s*([^>]*)>/)?.[1] || '') */)
            needsRemoval = tagremove[ctag] = true; // mark for removal
        else
            tagpaired[match] = true; // mark paired
    }

    if (!needsRemoval)
        return html.trim();

    // delete all orphaned tags from the string
    var ctag = 0;
    html = html.replace(re, function (match) {
        var res = tagremove[ctag] ? "" : match;
        ctag++;
        return res;
    });
    return html.trim();
}
