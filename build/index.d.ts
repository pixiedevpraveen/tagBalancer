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
export declare function tagBalancer(html: string): string;
//# sourceMappingURL=index.d.ts.map