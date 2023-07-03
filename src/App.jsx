import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Coba1 from './coba1/Coba1';
import Form from './components/doc/Form'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<Coba1 />} /> */}
                <Route path='/' element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
// import { useEffect } from 'react';
// import Coba from './components/coba/Coba';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// function App() {
//     const myComponentRef = useRef(null);

//     const [data, setData] = useState({})

//     const generatePDF = () => {
//         const { input1Value, input2Value } = myComponentRef.current.getInputValues();

//         // Buat elemen HTML menggunakan JSX
//         const element = (
//             <div>
//                 <p>Input 1: {input1Value}</p>
//                 <p>Input 2: {input2Value}</p>
//             </div>
//         );

//         setTimeout(() => {
//             html2canvas(element)
//                 .then((canvas) => {
//                     const imgData = canvas.toDataURL('image/png');
//                     const pdf = new jsPDF();
//                     const pdfWidth = pdf.internal.pageSize.getWidth();
//                     const pdfHeight = pdf.internal.pageSize.getHeight();
//                     const imgWidth = canvas.width;
//                     const imgHeight = canvas.height;
//                     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
//                     const imgX = (pdfWidth - imgWidth * ratio) / 2;
//                     const imgY = (pdfHeight - imgHeight * ratio) / 2;

//                     pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
//                     pdf.save('myPDF.pdf');
//                 })
//                 .catch((error) => {
//                     console.error('Error generating PDF:', error);
//                 });
//         }, 500);
//     };

//     return (
//         <div>
//             <h1>Contoh PDF Generator dari Komponen Lain</h1>
//             <Coba setData={setData} />
//             <div>
//                 <button onClick={generatePDF}>Generate PDF</button>
//             </div>
//         </div>
//     );
// }

// export default App;

