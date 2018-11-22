# Responsive Domain Search  

## Used for:  
Making the VistaPanel search form responsive, so that it does not break the theme(s).

## Where should I put it?  
Put it in Header Advert Area (IMPORTANT)  
Due to [this issue](https://github.com/VPTOfficial/VistaPanel-Customizations/issues/4) reported by [MAHOfficial](https://github.com/mahofficial), the code doesn't seem to run if you put it elsewhere. Thank you for your report.  

## Installation:   
Create a script tag with `src` pointing to `responsive-domain-search.js` or `responsive-domain-search.min.js` for minified version.  

## Initialization:   
A variable "affiliate code" can be defined to put your own affiliate code on the domain search, but, according to iFastNet, this will not give you any money.  

Variable:   
	* affCode -> 5 digit affiliate code.  

**If the variable is not declared, an affiliate code for my account (PlanetCloud) will be used.**  
**In case this method does actually pay money, the money will go into my account and I will appreciate it as a donation :)**  

##  Content-Type Header Errors
The RAW option on GitHub can return an incorrect Content-Type header which makes the code not load at all.  
* RawGit : https://rawgit.com/  
* GitCDN : http://gitcdn.xyz/  

The full code, using RawGit:

```
<script type="text/javascript">
	/* OPTIONAL
	var affCode = 'AFFLIATE_CODE_HERE';
	*/
</script>
<script src="https://rawgit.com/VPTOfficial/VistaPanel-Customizations/master/Responsive-Domain-Search/responsive-domain-search.js" type="text/javascript"></script>
```

Created on 10 July 2018 by PlanetCloud  
Modified at 27 July 2018 By Christine (Cyrl)  
Modified at 25 August by PCTipsGR  
Modified on 28th September by MAHOfficial and PCTipsGR  
Last Modified on 30th September by PlanetCloud    