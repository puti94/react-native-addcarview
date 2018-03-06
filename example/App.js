/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
} from 'react-native';
import {ShoppingCarView, startAddShopAnim} from './ShoppingCarView'

const imageUrl = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=608426515,677008149&fm=27&gp=0.jpg'
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    renderCarImage() {
        return <Image style={{width: 80, height: 80, borderRadius: 40}}
                      resizeMode={Image.resizeMode.container}
                      source={{uri: imageUrl}}/>
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title={'添加购物车(传入控件)'} onPress={() => {
                    startAddShopAnim(this.renderCarImage(), {
                        beforeView: this.beforeView,
                        afterView: this.afterView,
                        topFix: 60,
                        endScale: 0.5,
                        duration: 1000,
                        callBack: () => {
                            this.setState({number: this.state.number += 1})
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
                            this.setState({number: this.state.number += 1})
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
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    }
});
