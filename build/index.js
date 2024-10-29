function H(j){if(!j)return"";var A=/<\/?\w+[^>]*(\s|$|>)/g,k=j.toLowerCase().match(A);if(!k)return j;var x=(k||[]).length;if(x==0)return j;var y,B,E=/\b{p|img|br|input|li|hr}\b/,w,z=[],C=[],D=!1;for(var b=0;b<x;b++){if(y=k[b].replace(/<\/?(\w+)[\s\S]*/,"$1"),z[b]||E.test(y))continue;if(B=k[b],w=-1,!/^<\//.test(B)){for(var q=b+1;q<x;q++)if(!z[q]&&k[q]=="</"+y+">"){w=q;break}}if(w==-1)D=C[b]=!0;else z[w]=!0}if(!D)return j.trim();var b=0;return j=j.replace(A,function(F){var G=C[b]?"":F;return b++,G}),j.trim()}export{H as tagBalancer};

//# debugId=8B19E1AD4131A9B164756E2164756E21
