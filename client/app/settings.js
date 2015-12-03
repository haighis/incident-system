angular.module('incidentSystemApp.settings', [])

.constant('VERSION', '1.6.1')

.constant('LAST_BUILD', '2015-11-26T23:01:44.259Z')

.constant('CONFIG', {name:'worksheets',env:'development',language:'en',rootUrl:'http://integration.dealers',clientPath:'/worksheets/client',imagesPath:'/assets/images',accessTokenEndpoint:'/api/access_token',contextEndpoint:'/api/context',debug:true,financialsApiRootUrl:'http://integration.api.honda.ca/financials-worksheets',quotesApiRootUrl:'http://integration.api.honda.ca/quotes',searchApiRootUrl:'http://localhost:9000/api',documentsApiRootUrl:'localhost:9000/api',hondaApis:{protocol:'http',hostname:'integration.api.honda.ca',target:'live',application:'worksheets',language:'en'}})

;