import React, { useState } from 'react'

function Form() {

    const [selectBank, setSelectBank] = useState('')
    const [nomorSurat, setNomorSurat] = useState('')
    const [bulanPenggajian, setBulanPenggajian] = useState('')
    const [tglSurat, setTglSurat] = useState('')
    const [tglpenggajian, setTglPenggajian] = useState('')

    const generatePDF = (e) => {
        e.preventDefault()


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

export default Form