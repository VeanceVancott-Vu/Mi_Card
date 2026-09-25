import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="auto" />

      <LinearGradient
        colors={['#ffffff', '#eaf3ff', '#cfe2ff', '#a6c8ff']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.container}>

          {/* Card: Ảnh + Tên + Job */}
          <View style={[styles.card, styles.center]}>
            <Image
              source={{
                uri: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg',
              }}
              style={styles.avatar}
            />
            <Text style={styles.name}>MinhVu</Text>
            <Text style={styles.job}>Mobile Developer</Text>
          </View>

          {/* Card: Phone */}
          <View style={styles.card}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>0777691924</Text>
          </View>

          {/* Card: Email */}
          <View style={styles.card}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>vupm.23it@vku.udn.vn</Text>
          </View>

        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const CARD_BG = '#ffffff';
const TEXT_DARK = '#222';
const TEXT_MUTED = '#667085';

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ffffff' },
  gradient: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 16,
    justifyContent: 'center',
  },

  // Card chung
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    padding: 16,
    // bóng đổ cross-platform
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  center: { alignItems: 'center' },

  // Avatar + Name + Job
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: TEXT_DARK,
  },
  job: {
    marginTop: 4,
    fontSize: 16,
    color: TEXT_MUTED,
  },

  // Contact
  label: {
    fontSize: 12,
    color: TEXT_MUTED,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  value: {
    fontSize: 16,
    color: TEXT_DARK,
    fontWeight: '500',
  },
});
