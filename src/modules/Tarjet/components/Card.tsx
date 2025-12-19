import { View, Text, StyleSheet } from 'react-native';

export interface CardProps {
  balance?: string;
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  brand?: string;
}

const Card = ({
  balance,
  cardNumber,
  cardHolder,
  expiryDate,
  brand,
}: CardProps) => {
  return (
    <View style={styles.card}>

      <View style={styles.row}>
        <Text style={styles.balance}>{balance}</Text>
        <Text style={styles.brand}>{brand}</Text>
      </View>
      <Text style={styles.number}>**** **** **** {cardNumber}</Text>

      <View style={styles.footerRow}>
        <View>
          <Text style={styles.label}>Card Holder</Text>
          <Text style={styles.value}>{cardHolder}</Text>
        </View>

        <View>
          <Text style={styles.label}>Expires</Text>
          <Text style={styles.value}>{expiryDate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#1A1A1A',
    display: 'flex',
    gap: 20,
  },
  balance: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  number: {
    color: '#FFF',
    fontSize: 18,
    letterSpacing: 2,
  },
  brand: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '700',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  label: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  value: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Card;