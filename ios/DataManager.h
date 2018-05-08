//
//  DataManager.h
//  coffeeCenter
//
//  Created by Anoop on 08/05/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface DataManager : NSObject <RCTBridgeModule>
@property (nonatomic, retain) NSMutableArray *myArray;
@end
