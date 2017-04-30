'use strict';
import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ScrollView,
  Picker
} from 'react-native';
import { Styles } from '../../styles/styles.js';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import MaterialIcons from '../../node_modules/react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker';

class TourDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '04-28-2017',
      endDate: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)),
      passengers: 1,
      modalVisible: false,
      cardNumber: '',
      expYear: '',
      expMonth: '',
      text: '',
      totalPrice: this.props.data.tour.price
    }

    var acceptBtn = () => {
      this.props.nav(1)
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onDateChange = (date) => {
    this.setState({
      date
    });
  };

  render() {
    let port = 8084;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    const {width, height} = Dimensions.get('window');
    var _scrollView: ScrollView;
    // console.log('props from tour details: ', this.props.info);
    return (
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }} >
          <View style={Styles.tourDetails('topView')}>
            <TourInfo
              data={this.props.data.tour}
              dimensions={{width, height}}
            />
            <TouchableHighlight
              onPress={() => {_scrollView.scrollTo({y: height})}}
              underlayColor={Styles.colors.almostWhite}
              style={Styles.tourDetails('scrollDownArrow')}
            >
              <MaterialIcons name="arrow-drop-down-circle" size={45} color={Styles.colors.lightGreen} />
            </TouchableHighlight>
          </View>

          <View style={{height: height}}>
            <View style={Styles.tourDetails('detailsTitle')}>
              <Text style={Styles.tourDetails('detailsText')}> Last Details
              </Text>
            </View>
            <View style={Styles.tourDetails('passengersCounter')}>
              <View style={Styles.tourDetails('counterInnerWrapper')}>
                <View style={Styles.tourDetails('selectPassengers')}>
                  <Text style={Styles.tourDetails('passengersText')}>
                    Select Number of Passengers
                  </Text>
                </View>
                <View style={{

                }}>
                  <DisplayPicker
                    selectedValue={this.state.passengers}
                    onValueChange={(quantity) => this.setState({
                      passengers: quantity,
                      totalPrice: quantity * this.props.data.tour.price,
                    })}
                  />
                </View>
              </View>
            </View>

            <View style={Styles.tourDetails('selectDateContainer')}>
              <View>
                <Text style={Styles.tourDetails('selectDateText')}>
                  Select Tour Date
                </Text>
              </View>

              <View>
                <DatePicker
                  style={Styles.tourDetails('datePicker')}
                  date={this.state.date}
                  mode="date"
                  placeholder="placeholder"
                  format="MM-DD-YYYY"
                  minDate={this.state.date}
                  maxDate={this.state.endDate}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={this.onDateChange}
                />
              </View>
              <View style={Styles.tourDetails('totalPriceContainer')}>
                <Text style={Styles.tourDetails('totalPriceText')}>
                  Total Price
                </Text>
                <Text style={Styles.tourDetails('totalPriceValue')}>
                  {"$ " + this.state.totalPrice}
                </Text>
              </View>
            </View>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true)
              }}
              style={Styles.tourDetails('bookTourButton')}
            >
              <View style={Styles.tourDetails('bookInnerWrapper')}>
                <Text style={Styles.tourDetails('bookText')}>Book this Tour</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {this.props.nav(1, this.props.data.city)}}
              style={Styles.tourDetails('goBackButton')}
            >
              <View style={Styles.tourDetails('goBackWrapper')}>
                <Text style={Styles.tourDetails('goBackText')}>Go Back</Text>
              </View>
            </TouchableHighlight>
          </View>

          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
            <View style={Styles.tourDetails('modalBackground')}>
              <View style={Styles.tourDetails('modalInner')}>

                <View>
                  <Image
                    source={require('../images/powered-by-stripe.png')}
                    style={{width: 255}}
                  />
                </View>


                <TextInput
                  style={Styles.tourDetails('cardInputs')}
                  onChangeText={(cardNumber) => this.setState({cardNumber: cardNumber})}
                  placeholder={'credit card number'}
                />

                <TextInput
                  style={Styles.tourDetails('cardInputs')}
                  onChangeText={(expYear) => this.setState({expYear: expYear})}
                  placeholder={'expiration year'}
                />

                <TextInput
                  style={Styles.tourDetails('cardInputs')}
                  onChangeText={(expMonth) => this.setState({expMonth: expMonth})}
                  placeholder={'expiration month'}
                />

                <TextInput
                  style={Styles.tourDetails('cardInputs')}
                  onChangeText={(cvc) => this.setState({cvc: cvc})}
                  placeholder={'cvc'}
                />

                <TouchableHighlight
                  onPress={() => {this.props.nav(3, {
                    city: this.props.data.city,
                    tour: this.props.data.tour,
                    info: this.state
                  }, {
                    cardNumber: this.state.cardNumber,
                    expYear: this.state.expYear,
                    expMonth: this.state.expMonth,
                    cvc: this.state.cvc,
                    totalPrice: this.state.totalPrice
                  })}}
                  style={Styles.tourDetails('acceptPayment')}
                >
                  <View style={Styles.tourDetails('paymentsWrapper')}>
                    <Text style={Styles.tourDetails('paymentText')}>Accept Payment for $ {this.props.data.tour.price * this.state.passengers}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                  }}
                  style={Styles.tourDetails('cancelPayment')}
                >
                  <View style={Styles.tourDetails('cancelInner')}>
                    <Text style={Styles.tourDetails('cancelText')}>Go Back</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>


        </ScrollView>
    );
  }
}


//Note: the TourInfo component's props are inherited from the tourDetails component. See note above for available props
class TourInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let port = 8084;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View>
        <Image
          style={{width: this.props.dimensions.width, height: this.props.dimensions.height / 2}}
          source={{uri: imgUri+this.props.data.mainImage}}/>
        <Text style={[
          Styles.tourDetails('locationPage'),
          Styles.tourDetails('textColor')
        ]}>{this.props.data.title}</Text>
        <Text style={Styles.tourDetails('bodyText')}>
          {this.props.data.description} {"\n $ " + this.props.data.price}
        </Text>
      </View>
    );
  }
}

class DisplayPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Picker
        style={Styles.tourDetails('picker')}
        itemStyle={{color:Styles.colors.mainBlue}}
        selectedValue={this.props.selectedValue}
        onValueChange={this.props.onValueChange}>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
      </Picker>
    );
  }
}

export { TourDetails };
