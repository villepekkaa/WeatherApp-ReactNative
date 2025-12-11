import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    title?: string;
};

export default function Header({ title = 'Weather In' }: Props) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 8,
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
    },
});