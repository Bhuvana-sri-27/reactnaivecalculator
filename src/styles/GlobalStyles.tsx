import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    btnGreen: {
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 10,
        margin: 10
    },
    btnBlue: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 10,
        margin: 10
    },
    btnGray: {
        backgroundColor: 'gray',
        padding: 20,
        borderRadius: 10,
        margin: 10
    },
    btnLight: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 10
    },
    btnDark: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 10,
        margin: 10
    },
    smallTextLight: {
        color: 'white',
        fontSize: 18
    },
    smallTextDark: {
        color: 'black',
        fontSize: 18
    },
    screenFirstNumber: {
        fontSize: 96,
        color: 'black',
    },
    screenSecondNumber: {
        fontSize: 40,
        color: 'gray',
    },
    viewBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    bottomText: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        fontSize: 16,
        color: 'gray'
    },
});