(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[91],{169:function(e,s,t){!function(e){"use strict";var s="janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),t="jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");function r(e){return e>1&&e<5}function n(e,s,t,n){var a=e+" ";switch(t){case"s":return s||n?"p\xe1r sek\xfand":"p\xe1r sekundami";case"ss":return s||n?a+(r(e)?"sekundy":"sek\xfand"):a+"sekundami";case"m":return s?"min\xfata":n?"min\xfatu":"min\xfatou";case"mm":return s||n?a+(r(e)?"min\xfaty":"min\xfat"):a+"min\xfatami";case"h":return s?"hodina":n?"hodinu":"hodinou";case"hh":return s||n?a+(r(e)?"hodiny":"hod\xedn"):a+"hodinami";case"d":return s||n?"de\u0148":"d\u0148om";case"dd":return s||n?a+(r(e)?"dni":"dn\xed"):a+"d\u0148ami";case"M":return s||n?"mesiac":"mesiacom";case"MM":return s||n?a+(r(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return s||n?"rok":"rokom";case"yy":return s||n?a+(r(e)?"roky":"rokov"):a+"rokmi"}}e.defineLocale("sk",{months:s,monthsShort:t,weekdays:"nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede\u013eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v\u010dera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul\xfa nede\u013eu o] LT";case 1:case 2:return"[minul\xfd] dddd [o] LT";case 3:return"[minul\xfa stredu o] LT";case 4:case 5:return"[minul\xfd] dddd [o] LT";case 6:return"[minul\xfa sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t(19))}}]);
//# sourceMappingURL=91.5a2cd8d6.chunk.js.map