import assets from './assets.js';
// import Screen from '../components/welcome.js';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = function(element) {
  let properties = {
    topView: {
      height: height
    },

    scrollDownArrow: {
      marginTop: 30,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },

    detailsTitle: {
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },

    detailsText: {
      fontSize: 30,
      color: assets.colors.lightGreen
    },

    passengersCounter: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 30,
      marginRight:30,
      padding: 25
    },

    counterInnerWrapper: {
      flex: 1,
      flexDirection: 'column'
    },

    selectPassengers: {
      width: width * .7,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    },

    passengersText: {
      fontSize: 20,
      color: assets.colors.lightGreen
    },

    selectDateContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 30
    },

    selectDateText: {
      fontSize: 20,
      fontFamily: assets.fonts.mainFont,
      color: assets.colors.lightGreen,
      marginTop: 20
    },

    datePicker: {
      width: 300,
      padding: 20,
      marginTop: 10,
      marginRight: 30,
      marginLeft: 30
    },

    totalPriceContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: assets.colors.lightGreen,
      borderRadius: 5,
      alignSelf: 'stretch',
      marginBottom: 10,
      height: 30
    },

    totalPriceText: {
      color: assets.colors.lightGreen,
      fontSize: 20
    },

    totalPriceValue: {
      color: assets.colors.lightGreen,
      fontSize: 20
    },

    bookTourButton: {
      backgroundColor: assets.colors.lightGreen,
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 15,
      height: 35,
      borderRadius: 5
    },

    bookInnerWrapper: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    bookText: {
      color: assets.colors.almostWhite,
      fontSize: 20
    },

    goBackButton: {
      backgroundColor: assets.colors.almostWhite,
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 15,
      height: 35,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: assets.colors.mainBlue
    },

    goBackWrapper: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    goBackText: {
      color: assets.colors.mainBlue,
      fontSize: 20
    },

    modalBackground: {
      marginTop: 22,
      backgroundColor: assets.colors.darkBlue,
      opacity: .95,
      height: height
    },

    modalInner: {
      marginLeft: 40,
      marginRight: 40,
      borderWidth: 1.5,
      borderColor: assets.colors.almostWhite,
      padding: 15,
      marginTop: 60,
      borderRadius: 5
    },

    cardInputs: {
      height: 40,
      borderColor: assets.colors.almostWhite,
      marginTop: 10,
      backgroundColor: assets.colors.almostWhite,
      borderRadius: 5,
      paddingLeft: 10
    },

    acceptPayment: {
      backgroundColor: assets.colors.lightGreen,
      marginBottom: 15,
      marginTop: 15,
      height: 35,
      borderRadius: 5
    },

    paymentsWrapper: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    paymentText: {
      color: assets.colors.almostWhite,
      fontSize: 18
    },

    cancelPayment: {
      backgroundColor: assets.colors.almostWhite,
      marginBottom: 15,
      height: 35,
      borderRadius: 5
    },

    cancelInner: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    canceltext: {
      color: assets.colors.lightGreen,
      fontSize: 18
    },

    locationPage: {
      fontSize: 50,
      textAlign: 'center',
      margin: 10
    },

    textColor: {
      color: assets.colors.middleBlue
    },

    bodyText: {
      fontSize: 15,
      textAlign: 'center',
      margin: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: assets.colors.mainBlue,
      padding: 10,
      marginLeft: 30,
      marginRight: 30,
      marginTop: 15
    },

    picker: {
      borderRadius: 50
    }
  }

  return properties[element];
}