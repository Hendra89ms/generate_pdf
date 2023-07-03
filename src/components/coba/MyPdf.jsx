import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const MyPDF = ({ data }) => (
    <Document>
        <Page>
            <View>
                <Text>Name: {data.name}</Text>
                <Text>Email: {data.email}</Text>
                {/* Tambahkan data lain yang ingin Anda tampilkan */}
            </View>
        </Page>
    </Document>
);
export default MyPDF;