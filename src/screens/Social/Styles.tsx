import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        borderRadius: 100,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    subtext: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        marginTop: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#DDDDDD',
        minWidth: 200,
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
