/* pathnamereplace.js v0.1.3,
 URL pathname replace for conditional redirects to support multi-language sites,
 now with cookies and passtrue list.
 * Author & copyright (c) 2017: Göran Svensson, goran@molnsys.com. MIT license.
 * Tested with Chrome 36, Firefox 29 and Safari 7.0.5 on OSX.
 * Tested with Chrome 36 on Xperia V (Android 4.3) and Internet 2.3.6
 on Samsung GT-S5360 (Android 2.3.6).
 * Works with any number of path name items and language acronymes.
 Does not break the back button.
 * How to use it; add this in your nav menu: javascript:changeLanguage('se')
 to switch to swedish version.
 * REQUIRES: JavaScript Cookie v2.1.4 https://github.com/js-cookie/js-cookie
 * CatalystScripts/Java_Cookies.js and country = '{module_visitorcountrycode}'; added
 * above this script (does not work inside a js file).
 * No bugs have been harmed.
 * To avoid unnecesary reload, build a nav menu for each language with the right path.
 */

const defaultLang = 'en'; // get language from config file DefaultContentLanguage.
const pathArray = window.location.pathname.split('/'); // get the path and split the string on "/"
const langArray = ['de', 'es']; // Do not include the default lang here! For pages just create files like this: filename.en.md, filename.sv.md). For blog posts we redirect to the front page for each language.
const passtrueArray = ['CampaignProcess.aspx', 'FormProcessv2.aspx']; // sometimes it is not possible to add language support to a module. Then we do not check language.
const constructPath = `${window.location.protocol}//${window.location.host}`;
pathArray.splice(0, 1); // remove the first item which is empty
const firstPartofPathname = pathArray[0];
const cookieValue = Cookies.get('selectedLanguage');
const thepathname = window.location.pathname;
const visitorLanguage = defaultLang;

// helper function: don´t redirect if the first path contains anything from the passtrue array.
function checkPassTrue() {
  let itemFoundFlag = false;
  if (passtrueArray.indexOf(firstPartofPathname) > -1) itemFoundFlag = true;
  return itemFoundFlag;
}

// helper function: put the pathname back together with slashes
function buildPath(theArray) {
  let newPathname = '';
  for (let i = 0; i < theArray.length; i++) {
    newPathname += '/';
    newPathname += theArray[i];
  }
  return newPathname;
}

// main function: changeLanguage takes a language acronyme as an argument and replaces the path name in the URL using JavaScript Cookie v2.1.4 https://github.com/js-cookie/js-cookie
function changeLanguage(theLanguage) {
  // remove the first item
  if (langArray.indexOf(pathArray[0]) > -1) {
    pathArray.splice(0, 1);
  }

  // add the Language
  if (theLanguage !== defaultLang) {
    pathArray.splice(0, 0, theLanguage);
  }

  if (thepathname !== buildPath(pathArray)) {
    Cookies.set('selectedLanguage', theLanguage);

    window.location.replace(constructPath + buildPath(pathArray));
  }
}

if (!checkPassTrue()) {
  /*
  if (cookieValue != null && (cookieValue === 'de' || cookieValue === 'en')) {
    changeLanguage(cookieValue);
  } else {
  */
  // changeLanguage(visitorLanguage);
  // }
}

$('.changelanguage').on('click', (event) => {
  event.preventDefault();
  changeLanguage($(event.target).data('href'));
});

/*
if (window.location.pathname === '/' || window.location.pathname === '/de/') {
  // Index (home) page
  if (Cookies.get('selectedLanguage') == null) {
    const userLang = window.navigator.language || window.navigator.userLanguage;
    if (userLang != null && userLang.indexOf('-') > -1) {
      const detectedLang = userLang.split('-')[0];
      if (detectedLang != null && (detectedLang === 'de' || detectedLang === 'en')) {
        changeLanguage(detectedLang);
      }
    }
  }
}
*/
