!function(a){"use strict";a.fn.select2.locales.eu={formatNoMatches:function(){return"Ez da bat datorrenik aurkitu"},formatInputTooShort:function(a,b){var c=b-a.length;return 1===c?"Idatzi karaktere bat gehiago":"Idatzi "+c+" karaktere gehiago"},formatInputTooLong:function(a,b){var c=a.length-b;return 1===c?"Idatzi karaktere bat gutxiago":"Idatzi "+c+" karaktere gutxiago"},formatSelectionTooBig:function(a){return 1===a?"Elementu bakarra hauta dezakezu":a+" elementu hauta ditzakezu soilik"},formatLoadMore:function(){return"Emaitza gehiago kargatzen…"},formatSearching:function(){return"Bilatzen…"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.eu)}(jQuery),function(a){"function"==typeof define&&define.amd?define(["moment"],a):"object"==typeof exports?module.exports=a(require("../moment")):a(("undefined"!=typeof global?global:this).moment)}(function(a){return a.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] LT",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] LT",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] LT",llll:"ddd, YYYY[ko] MMM D[a] LT"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})});