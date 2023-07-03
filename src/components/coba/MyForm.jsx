import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import MyPDF from './MyPdf';
import { useState } from 'react';
import jsPDF from 'jspdf';


const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Render PDF saat form disubmit
        renderPDF();
    };

    const renderPDF = () => {
        const pdf = new jsPDF();

        const pdfElement = (
            <PDFViewer width="1000" height="600">
                <MyPDF data={formData} />
            </PDFViewer>
        );
        // Convert PDF to blob
        const blob = pdf.output('blob');
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'myPdf.pdf';
        link.click();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Download PDF</button>
        </form>
    );
};

export default MyForm;
