# tag-balancer
![Package Size](https://deno.bundlejs.com/badge?q=tag-balancer)
[![JSR](https://jsr.io/badges/@praveen/tag-balancer)](https://jsr.io/@praveen/tag-balancer)
[![JSR Score](https://jsr.io/badges/@praveen/tag-balancer/score)](https://jsr.io/@praveen/tag-balancer/score)


Balance tags of html string.

To install:

```bash
# npm
npm install tag-balancer

# bun
bun add tag-balancer

# yarn
yarn add tag-balancer

# pnpm
pnpm add tag-balancer
```

## Example
```ts
const htmlStr = `<div>
<br></div>
    <img src="/idb/files?id=vEQibqclfEKwjhM&amp;fk=Frq9gA68GK21saU" data-id="vEQibqclfEKwjhM" data-type="drawing"
        width="300" data-fk="Frq9gA68GK21saU" style="background-color: rgb(255, 255, 255);">
    <br>
</div>`;

    // removes the extra closing div
    const outputStr = tagBalancer(htmlStr); /* <div>
<br></div>
<img src="/idb/files?id=vEQibqclfEKwjhM&amp;fk=Frq9gA68GK21saU" data-id="vEQibqclfEKwjhM" data-type="drawing"
    width="300" data-fk="Frq9gA68GK21saU" style="background-color: rgb(255, 255, 255);">
<br>
*/

```
