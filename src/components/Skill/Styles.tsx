import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flexDirection: 'row',
    },
    image: {
      marginTop: 10,
    },
    subtext: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    skills: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        marginTop: 30,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'lightblue',
        minWidth: 200,
    }
});
