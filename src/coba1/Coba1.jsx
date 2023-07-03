import React, { useState } from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import jsPDF from 'jspdf';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function Coba1() {

    const [selectBank, setSelectBank] = useState('')
    const [nomorSurat, setNomorSurat] = useState('')
    const [bulanPenggajian, setBulanPenggajian] = useState('')
    const [tglSurat, setTglSurat] = useState('')
    const [tglpenggajian, setTglPenggajian] = useState('')

    const generatePDF = (e) => {
        e.preventDefault()

        if (selectBank.length < 6 || nomorSurat.length < 6 || bulanPenggajian.length < 6 || tglSurat.length < 6 || tglSurat.length < 6 || tglpenggajian.length < 6) {
            return alert('Panjang kharakter kurang dari 6 !')
        }

        if (selectBank.trim() === '' || nomorSurat.trim() === '' || bulanPenggajian.trim() === '' || tglSurat.trim() === '' || tglSurat.trim() === '' || tglpenggajian.trim() === '') {
            return alert('Please not spasi..')
        }

        const monthNames = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const bulanPenggajianName = monthNames[new Date(bulanPenggajian).getMonth()]; // Mengambil bulan (dalam nama bulan) dari inputan
        const tahunPenggajian = new Date(tglpenggajian).getFullYear();// Mengambil tahun dari inputan date

        const tglSuratDate = new Date(tglSurat);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const tglSuratFormatted = tglSuratDate.toLocaleString('id-ID', options);

        const pdf = new jsPDF()

        pdf.setFont('italics')


        const docDefinition = {
            pageSize: 'A4',
            pageOrientation: 'portrait',
            content: [
                {
                    columns: [
                        {
                            text: `Nomor surat   :\t${nomorSurat}/DEI-HRD/I/${tahunPenggajian}\nLampiran\t\t :  1(satu)\nPerihal\t\t\t  :\tGaji ${bulanPenggajianName} DATA ENERGY INFOMEDIA\n`,
                            margin: [0, 20, 0, 0]
                        },

                        {
                            text: `${tglSuratFormatted}\n\nKepada Yth :\n${selectBank}(Persero),Tbk\nKantor Cabang Jakarta Cinere\nJl Karang Tengah Raya No.29,\nLebak Bulus, Jakarta Selatan 12440`,
                            style: 'defaultStyle',
                            margin: [0, 20, 0, 0],
                            alignment: 'right'
                        },
                    ],

                },
                {
                    text: 'Up Yth. Pemimpin Cabang',
                    margin: [0, 45, 0, 0], // Atur margin atas sebesar 45
                },
                {
                    text: `Sehubungan kerjasama Payroll gaji antara PT Data Energy Infomedia dan PT ${selectBank} (Persero) Tbk, dengan ini kami harap dapat dilakukan transfer dana pada tanggal ${tglSuratFormatted} sebesar Rp 163.796.648,- (Seratus enam puluh tiga juta tujuh ratus sembilan puluh enam ribu enam ratus empat puluh delapan rupiah) melalui pendebetan Rek Giro dengan No 118701000283300 (daftar terlampir)`,
                    margin: [0, 12, 0, 0] // Atur margin atas sebesar 12
                },
                {
                    text: 'Demikian kami sampaikan, atas perhatian dan kerjasamanya diucapkan terima kasih.',
                    margin: [0, 12, 0, 0] // Atur margin atas sebesar 12
                },
                {
                    columns: [
                        {
                            width: '200',
                            text: 'Direktur\n\n\n\nAlfi',
                            alignment: 'center'
                        }
                    ],
                    margin: [0, 24, 0, 0], // Atur margin atas sebesar 24
                },
            ],

            styles: {
                defaultStyle: {
                    fontFamily: 'Courier New',
                    fontSize: 12
                }
            }

        };

        const pdfDoc = pdfMake.createPdf(docDefinition).open()

        // pdfDoc.download('dokument.pdf')

        setSelectBank('')
        setBulanPenggajian('')
        setNomorSurat('')
        setTglSurat('')
        setTglPenggajian('')
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='w-[900px] border-[1px] border-red-500 p-5'>

                    <form
                        onSubmit={generatePDF}
                        className=''>
                        <h1 className='font-bold text-xl mb-4'>Template Bank</h1>

                        <div className='flex gap-4'>

                            <div
                                className='border-[1px] border-black rounded-md flex items-center gap-3 p-2 w-[150px]'>
                                <input
                                    type="radio"
                                    value='Bank Rakyat Indonesia'
                                    readOnly
                                    checked={selectBank === 'Bank Rakyat Indonesia'}
                                    onChange={e => setSelectBank(e.target.value)}
                                />
                                <label htmlFor="bri">Bank Bri</label>
                            </div>

                            <div

                                className='border-[1px] border-black rounded-md flex items-center gap-3 p-2 w-[150px]'>
                                <input
                                    type="radio"
                                    readOnly
                                    value="Bank Negara Indonesia"
                                    checked={selectBank === 'Bank Negara Indonesia'}
                                    onChange={e => setSelectBank(e.target.value)}
                                />
                                <label htmlFor="bri">Bank BNI</label>
                            </div>

                            <div

                                className='border-[1px] border-black rounded-md flex items-center gap-3 p-2 w-[150px]'>
                                <input
                                    type="radio"
                                    value="Bank Central Asia"
                                    readOnly
                                    checked={selectBank === 'Bank Central Asia'}
                                    onChange={e => setSelectBank(e.target.value)}
                                />
                                <label htmlFor="bri">Bank BCA</label>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='nomor_surat' className='font-bold'>Nomor Surat</label>
                            <input
                                type="number"
                                value={nomorSurat}
                                onChange={e => setNomorSurat(e.target.value)}
                                className='w-full rounded-md p-2 border-[1px] border-gray-500 outline-none' />
                        </div>

                        <div>
                            <label htmlFor="bulan_penggajian">Bulan Penggajian</label>
                            <input
                                type="date"
                                value={bulanPenggajian}
                                onChange={e => setBulanPenggajian(e.target.value)}
                                className='w-full rounded-md p-2 border-[1px] border-gray-500 outline-none' />
                        </div>

                        <div>
                            <label htmlFor="tgl_surat">Tanggal Surat</label>
                            <input
                                value={tglSurat}
                                onChange={e => setTglSurat(e.target.value)}
                                type="date"
                                className='w-full rounded-md p-2 border-[1px] border-gray-500 outline-none' />
                        </div>

                        <div>
                            <label htmlFor="tahun_penggajian">Tahun Penggajian</label>
                            <input
                                value={tglpenggajian}
                                onChange={e => setTglPenggajian(e.target.value)}
                                type="date"
                                className='w-full rounded-md p-2 border-[1px] border-gray-500 outline-none' />
                        </div>

                        <div className='mt-5 flex gap-3'>
                            <button className='bg-blue-600 text-white px-4 h-[40px] rounded-md'>clear</button>
                            <button
                                type='submit'
                                className='bg-blue-600 text-white px-4 h-[40px] rounded-md'>Download Surat</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Coba1