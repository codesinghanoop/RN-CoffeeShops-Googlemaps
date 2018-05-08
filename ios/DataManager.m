//
//  DataManager.m
//  coffeeCenter
//
//  Created by Anoop on 08/05/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "DataManager.h"

@implementation DataManager
RCT_EXPORT_MODULE()


- (NSDictionary *)constantsToExport {
  NSDictionary *dict = @{
                         @"rating": @4.5,
                         @"review_count": @44,
                         @"display_phone": @"+49 89 80046681",
                         @"distance": @1194.7392542559999,
                         @"id": @"man-versus-machine-münchen",
                         @"image_url": @"https://s3-media2.fl.yelpcdn.com/bphoto/rEFJSvLhqaiZxWinLBeAyQ/o.jpg",
                         @"name": @"Man Versus Machine",
                         @"url": @"https://www.yelp.com/biz/man-versus-machine-m%C3%BCnchen?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
                         @"is_closed": @false,
                         @"phone": @"+498980046681",
                             @"display_address": @[
                                 @"Müllerstr. 23",
                                 @"80469 Munich",
                                 @"Germany"
                                 ]
                             ,
                         @"coordinates": @{
                             @"longitude": @11.57123,
                             @"latitude": @48.13102
                             },
                         };
  NSDictionary *dict1 = @{
                          @"rating": @4.5,
                          @"review_count": @76,
                          @"display_phone": @"+49 89 23709821",
                          @"distance": @1424.3569242704,
                          @"id": @"vits-münchen",
                         
                              @"display_address": @[
                                  @"Rumfordstr. 49",
                                  @"80469 Munich",
                                  @"Germany"
                                  ]
                              ,
                          @"coordinates": @{
                              @"longitude": @11.5820467632293,
                              @"latitude": @48.1337496326411
                              },
                          @"image_url":@ "https://s3-media2.fl.yelpcdn.com/bphoto/rZOL7uLtVBYT2xjWF7mVCQ/o.jpg",
                          @"name": @"Vits",
                          @"url": @"https://www.yelp.com/biz/vits-m%C3%BCnchen?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
                          @"is_closed": @false,
                          @"phone": @"+498923709821",
                          };
  NSDictionary *dict2 = @{
                          @"rating": @5,
                          @"review_count": @32,
                          @"display_phone": @"+49 89 23231577",
                          @"distance": @919.7044322884,
                          @"id": @"chocolaterie-beluga-münchen",
                          @"display_address": @[
                              @"Viktualienmarkt 6",
                              @"80331 Munich",
                              @"Germany"
                              ],
                          @"coordinates": @{
                              @"longitude": @11.57578,
                              @"latitude": @48.13591
                              },
                          @"image_url": @"https://s3-media2.fl.yelpcdn.com/bphoto/LuoU1Kkq2M1ZpTcfzRYGFg/o.jpg",
                          @"name": @"Chocolaterie Beluga",
                          @"url": @"https://www.yelp.com/biz/chocolaterie-beluga-m%C3%BCnchen?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
                          @"is_closed": @false,
                          @"phone": @"+498923231577",
                          };
  NSDictionary *dict3 = @{
                          @"rating": @5,
                          @"review_count": @13,
                          @"display_phone": @"+49 89 12196530",
                          @"distance": @4518.735590394,
                          @"id": @"walsers-café-münchen-2",
                          @"display_address": @[
                              @"Emil-Geis-Str. 16",
                              @"81379 Munich",
                              @"Germany"
                              ]
                          ,
                          @"coordinates": @{
                              @"longitude": @11.54365,
                              @"latitude": @48.10365
                              },
                          @"image_url": @"https://s3-media3.fl.yelpcdn.com/bphoto/u9dzViY0WPUUmik8gNaZbg/o.jpg",
                          @"name": @"Walser's Café",
                          @"url": @"https://www.yelp.com/biz/walsers-caf%C3%A9-m%C3%BCnchen-2?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
                          @"is_closed": @false,
                          @"phone": @"+498912196530",
                          };
  
  NSDictionary *dict4 = @{
                          @"rating":@ 5,
                          @"review_count":@ 28,
                          @"display_phone": @"+49 89 67971220",
                          @"distance": @1256.8536144838,
                          @"id": @"emilo-münchen-6",
                          
                          @"display_address": @[
                              @"Buttermelcherstr. 5",
                              @"80469 Munich",
                              @"Germany"
                              ]
                          ,
                          @"coordinates": @{
                              @"longitude": @11.5777548544322,
                              @"latitude": @48.1328323233846
                              },
                          @"image_url": @"https://s3-media3.fl.yelpcdn.com/bphoto/lK_jrXJzbcEjrE-OrSpekQ/o.jpg",
                          @"name": @"emilo",
                          @"url": @"https://www.yelp.com/biz/emilo-m%C3%BCnchen-6?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
                          @"is_closed": @false,
                          @"phone": @"+498967971220"
                          };
  
  NSDictionary *dict5 = @{
                          @"rating": @4.5,
                          @"review_count": @20,
                          @"display_phone": @"+49 89 28979183",
                          @"distance": @1547.124364006,
                          @"id": @"josefa-münchen",
                          @"display_address": @[
                              @"Westendstr. 29",
                              @"80339 Munich",
                              @"Germany"
                              ]
                          ,
                          @"coordinates": @{
                              @"longitude": @11.54618,
                              @"latitude": @48.13837
                              },
                          @"image_url": @"https://s3-media4.fl.yelpcdn.com/bphoto/ihvrnxx5o1148b5KVGlh_g/o.jpg",
                          @"name": @"Josefa",
                          @"url": @"https://www.yelp.com/biz/josefa-m%C3%BCnchen?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
                          @"is_closed": @false,
                          @"phone": @"+498928979183",
                          };
  NSDictionary *dict6 = @{
                          @"rating": @4.5,
                          @"review_count": @10,
                          @"display_phone": @"+49 89 45231425",
                          @"distance": @1819.8107726719998,
                          @"id": @"standl-20-münchen-2",
                          @"display_address": @[
                              @"Elisabethplatz",
                              @"80796 Munich",
                              @"Germany"
                              ]
                          ,
                          @"coordinates": @{
                              @"longitude": @11.57425,
                              @"latitude": @48.15684
                              },
                          @"image_url": @"https://s3-media2.fl.yelpcdn.com/bphoto/H7IWds0wGcjPvdQMuHsNnA/o.jpg",
                          @"name": @"Standl 20",
                          @"url": @"https://www.yelp.com/biz/standl-20-m%C3%BCnchen-2?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
                          @"is_closed": @false,
                          @"phone": @"+498945231425",
                          };
  NSDictionary *dict7 = @{
                          @"rating": @4,
                          @"review_count": @46,
                          @"display_phone": @"+49 89 16783878",
                          @"distance": @2531.646799442,
                          @"id": @"kaffee-espresso-und-barista-münchen",
                          @"display_address": @[
                              @"Schlörstr. 11",
                              @"80634 Munich",
                              @"Germany"
                              ]
                          ,
                          @"coordinates": @{
                              @"longitude": @11.53486,
                              @"latitude": @48.1497699
                              },
                          @"image_url": @"https://s3-media1.fl.yelpcdn.com/bphoto/9mtIRc5SuIzikmpKrWTQzw/o.jpg",
                          @"name": @"Kaffee, Espresso & Barista",
                          @"url": @"https://www.yelp.com/biz/kaffee-espresso-und-barista-m%C3%BCnchen?adjust_creative=g_cO5JMMQ-aAST6Q7p2ovQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g_cO5JMMQ-aAST6Q7p2ovQ",
                          @"is_closed": @false,
                          @"phone": @"+498916783878",
                          };
  NSArray *array = @[dict,dict1,dict2,dict3,dict4,dict5,dict6,dict7];
  return @{@"businesses": array};
}

@end

