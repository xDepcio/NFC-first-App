import React from "react";
import { View, Text, Modal, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

function AndroidPrompt(props, ref) {
    const {onCancelPress} = props
    const [visible, setVisible] = React.useState(false)
    const [hintText, setHintText] = React.useState('')

    React.useEffect(() => {
        if(ref) {
            ref.current = {
                setVisible,
                setHintText
            }
        }
    }, [ref])

    return (
        <Modal visible={visible} transparent={true}>
            <View style={styles.content}>
                <View style={[styles.backdrop, StyleSheet.absoluteFill]} />

                <View style={styles.prompt}>
                    <Text style={styles.hint}>{hintText || "Hello NFC"}</Text>

                    <TouchableOpacity style={styles.btn} onPress={() => {
                        setVisible(false),
                        setHintText('')
                        onCancelPress()
                    }}>
                        <Text style={styles.btnCancel}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    backdrop: {
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    prompt: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        width: Dimensions.get('window').width - 2 * 20,
        backgroundColor: 'white',
        borderRadius: 9,
        paddingVertical: 60,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hint: {
        fontSize: 24,
        marginBottom: 20,
        color: 'black'
    },
    btn: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 15
    },
    btnCancel: {
        color: 'black'
    }
})

export default React.forwardRef(AndroidPrompt)
