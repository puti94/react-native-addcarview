# react-native-addcarview
一个简单实用的实现添加购物车动画的控件

- 安装:`npm install react-native-addcarview --save` or `yarn add react-native-addcarview`
- 使用: 
    ```
              <View style={styles.container}>
              
                <Button title={'添加购物车(传入控件)'} onPress={() => {
                    startAddShopAnim(this.renderCarImage(), {
                        beforeView: this.beforeView,
                        afterView: this.afterView,
                        topFix: 60,
                        endScale: 0.5,
                        duration: 1000,
                        callBack: () => {
                            this.setState({number: this.state.number  += 1})
                        }
                    })
                }}/>
                <Button title={'添加购物车(传入坐标)'} onPress={() => {
                    startAddShopAnim(this.renderCarImage(), {
                        beforeValue: {x: 200, y: 200},
                        afterValue: {x: 300, y: 400},
                        endRotateZ: 360,
                        duration: 5000,
                        endScale: 2,
                        callBack: () => {
                            this.setState({number: this.state.number     += 1})
                        }
                    })
                }}/>

                <Image ref={ref => this.beforeView = ref}
                       style={{width: 120, height: 120, borderRadius: 10}}
                       source={{uri: imageUrl}}/>
                <Text ref={ref => this.afterView = ref}
                      style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          backgroundColor: 'gray'
                      }}>购物车{this.state.number}</Text>
                <ShoppingCarView/>
            </View>
 
     ```
- 注意点:动画开始结束位置是通过传入组件调用measureInWindow方法测量得到的，请确保传入控件有measureInWindow方法。如果没有这个方法（大部分组件有），也可以传入坐标
  

## 示例图
  ![效果图](https://github.com/puti94/react-native-addcarview/blob/master/111.gif)
  ![效果图](https://github.com/puti94/react-native-addcarview/blob/master/222.gif)
