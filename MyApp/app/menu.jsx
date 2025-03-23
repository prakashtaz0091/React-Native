import { View, Text, TextInput, Image, StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from '@/constants/MenuItems'
import MenuImages from '@/constants/MenuImages'

const menu = () => {

    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const [searchQuery, setSearchQuery] = useState('');
    // Filter menu items based on search query
    const filteredMenuItems = MENU_ITEMS.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const styles = createStyles(theme, colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const SeperatorComponent = <View style={styles.seperatorComponent} ></View>

    const HeaderComponent = <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor={theme.text}
        value={searchQuery}
        onChangeText={setSearchQuery}
    />

    const FooterComponent = <View style={styles.footerComponent} >
        <Text style={styles.footerText} >{filteredMenuItems.length > 0 && 'End of Menu'}</Text>
    </View>

    return (
        <Container style={styles.container} >
            <FlatList
                data={filteredMenuItems}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={SeperatorComponent}
                ListEmptyComponent={<Text style={styles.itemDesc} >No items found</Text>}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
                renderItem={({ item }) => (
                    <View style={styles.menuItem}>
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemDesc} >{item.description}</Text>
                        </View>
                        <Image style={styles.itemImage} source={MenuImages[item.id - 1]} />
                    </View>
                )}
            />
        </Container>
    )
}

export default menu


function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 8,
            backgroundColor: theme.background
        },
        searchBar: {
            height: 40,
            borderWidth: 1,
            borderColor: theme.text,
            borderRadius: 10,
            paddingHorizontal: 10,
            margin: 10,
            color: theme.text,
            backgroundColor: theme.background
        },
        seperatorComponent: {
            width: '100%',
            height: 1,
            backgroundColor: "#afafaf",
            marginVertical: 10
        }
        ,
        menuItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        itemDetails: {
            width: '60%'
        },
        itemTitle: {
            color: theme.text,
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 3
        },
        itemDesc: {
            color: theme.text,
            marginBottom: 5,
            fontSize: 16,
        },
        itemImage: {
            width: 100,
            height: 100,
            borderRadius: 5
        },
        footerComponent: {
            width: '100%',
        },
        footerText: {
            color: theme.text,
            textAlign: 'center',
            fontSize: 16,
            marginTop: 10
        }

    });
}