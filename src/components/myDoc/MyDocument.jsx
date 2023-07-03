// import React from 'react'
// import './style.css'


// function MyDocument({ data }) {

//     return (
//         <>
//             {
//                 data.map((item) => {

//                     const { id, nomorSurat, selectBank, bulanPenggajianName, tglSuratFormatted, tahunPenggajian } = item

//                     return (
//                         <div
//                             key={id}
//                             ref={pdfRef}
//                             className='document w-screen flex items-center justify-center'>
//                             <div className='w-[900px] flex flex-col justify-between '>
//                                 <div className='flex justify-between w-full'>
//                                     <div className='w-[400px]'>
//                                         <div>Nomor	    :	<span>{nomorSurat}/DEI-HRD/I/{tahunPenggajian}</span></div>
//                                         <div>Lampiran	:	<span>1(satu)</span></div>
//                                         <div>Perihal    : <span>Gaji {bulanPenggajianName} DATA ENERGY INFOMEDIA</span></div>
//                                     </div>

//                                     <div className='flex flex-col  w-[400px]'>
//                                         <h1>Jakarta, {tglSuratFormatted}</h1>

//                                         <div className='mt-8'>
//                                             <h1> Kepada Yth : </h1>
//                                             <p> PT {selectBank} (Persero),Tbk
//                                                 Kantor Cabang Jakarta Cinere
//                                                 Jl Karang Tengah Raya No.29,
//                                                 Lebak Bulus, Jakarta Selatan 12440
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className='mt-24'>
//                                     <h1 className='mb-10'>Up Yth. Pemimpin Cabang</h1>

//                                     <p>Sehubungan kerjasama Payroll gaji antara PT Data Energy Infomedia dan PT Bank Rakyat Indonesia  (Persero) Tbk., dengan ini  kami harap dapat  di lakukan transfer dana pada tanggal {tglSuratFormatted} sebesar Rp  163.796.648,- (Seratus enam puluh tiga juta tujuh ratus sembilan puluh enam ribu enam ratus empat puluh delapan rupiah) melalui pendebetan Rek Giro dengan No 118701000283300 (daftar terlampir)</p>

//                                     <p>
//                                         Demikian kami sampaikan, atas perhatian dan kerjasamanya di ucapkan terima kasih.
//                                     </p>
//                                 </div>

//                                 <div className='flex'>
//                                     <div className='w-[200px] h-[200px] flex flex-col  justify-between items-center mt-12'>
//                                         <div>Direktur </div>

//                                         <h1>Alfi</h1>
//                                     </div>

//                                 </div>
//                             </div>

//                         </div>
//                     )
//                 })
//             }

//         </>
//     )

// }

// export default MyDocument;