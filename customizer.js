/**
 * VistaPanel Customizer
 * by Wybe Network
 * 
 * Contributors:
 * - PlanetTheCloud
 * - MAHOfficial
 */

 var settings = {
    tutorialLink: 'http://tutorial.pdn/',
    copyright: {
        website: 'http://hosting.company',
        started: 2020,
        name: 'Hosting Company',
        logo: 'https://img.icons8.com/cotton/2x/server.png'
    }
 }

 document.addEventListener("DOMContentLoaded", function() {

    if("undefined" == typeof settings){
        console.log('WybeCustomizer: Settings variable is not present.');
        return;
    }

    /**
     * Tutorial Link Changer
     */
    if(typeof settings.tutorialLink !== "undefined"){
        document.querySelectorAll('a[href^="http://tutorials.securesignup.net"]').forEach(function(element) {
            element.setAttribute('href', settings.tutorialLink);
        });
    }

    /**
     * cPanel Logo to Copyright Notice
     */
    if (typeof settings.copyright !== "undefined") {
        let cPanelImage = document.getElementById("lnkPoweredByCpanel"),
            cPanelText = document.getElementById("txtCpanelVersion"),
            currentYear = (new Date).getFullYear();
        settings.copyright.started = Number(settings.copyright.started);
        cPanelImage.href = settings.copyright.website;
        cPanelImage.target = "_blank";
        cPanelImage.title = settings.copyright.name;
        cPanelImage.innerHTML = `<img id="imgPoweredByCpanel" src="/panel/pl-res/powered_by_cpanel.png" alt="cPanel, Inc." style="display:none;"><img id="imgPoweredByCpanel" src="${settings.copyright.logo}" alt="${settings.copyright.name}" style="display:inline-block; z-index:2147483647; visibility:visible;">`;
        cPanelText.innerHTML = settings.copyright.started < currentYear ? `\u00a9 ${settings.copyright.started} - ${currentYear} ${settings.copyright.name}.` : `\u00a9 ${currentYear} ${settings.copyright.name}.`
    }   
});
