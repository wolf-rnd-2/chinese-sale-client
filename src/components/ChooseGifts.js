
import { useLocation } from 'react-router'
import { FilloutFullScreenEmbed } from "@fillout/react";
import axios from 'axios';
import { useEffect, useState } from "react"

export default function ChooseGifts() {
    let location = useLocation();
    let name = location.state.name
    let id = location.state.id;
    let pwd = location.state.pwd;
    debugger
    const [points, setPoints] = useState(0);
    const [balance, setBalance] = useState([]);
    const [stampPrice, setStampPrice] = useState([]);

    useEffect((() => {
        getSumPoints();
        getBalance();
        debugger
        getStampPrice();
    }))
    const getBalance = async () => {
        let balance1 = []
        const asyncBalance = await axios.get(`https://weak-plum-ostrich-wear.cyclic.app/GiftsToStudents`)
        console.log(asyncBalance.data.balance)
        asyncBalance.data.balance.forEach(element => {
            balance1[element.Code] = element.Balance
        });
        setBalance(balance1)
    }
    const getStampPrice = async () => {
        const result = await axios.get(`https://weak-plum-ostrich-wear.cyclic.app/stampPrice/${id}`)
        if (result.data)
           setStampPrice(result.data.stampPrice)
    }
    const getSumPoints = async () => {
        let points = await axios.get(`https://weak-plum-ostrich-wear.cyclic.app/${id}`)
        if (points.data.sum > 0) {
            setPoints((points.data.sum / 50) * 5);
        }
        else
            setPoints(0)
    }
    return (<>
        <div>
            <FilloutFullScreenEmbed filloutId="wdi6QjWe2Zus" inheritParameters parameters={{
                name: name,
                id: id,
                balance: points,
                balance_401: balance['401'],
                balance_402: balance['402'],
                balance_403: balance['403'],
                balance_404: balance['404'],
                balance_405: balance['405'],
                balance_406: balance['406'],
                balance_301: balance['301'],
                balance_302: balance['302'],
                balance_303: balance['303'],
                balance_304: balance['304'],
                balance_305: balance['305'],
                balance_306: balance['306'],
                balance_307: balance['307'],
                balance_308: balance['308'],
                balance_201: balance['201'],
                balance_202: balance['202'],
                balance_203: balance['203'],
                balance_204: balance['204'],
                balance_205: balance['205'],
                balance_206: balance['206'],
                balance_207: balance['207'],
                balance_208: balance['208'],
                balance_209: balance['209'],
                balance_101: balance['101'],
                balance_102: balance['102'],
                balance_103: balance['103'],
                balance_104: balance['104'],
                balance_105: balance['105'],
                balance_106: balance['106'],
                balance_501: balance['501'],
                balance_502: balance['502'],
                balance_503: balance['503'],
                balance_504: balance['504'],
                balance_505: balance['505'],
                balance_506: balance['506'],
                StampPrice: stampPrice

            }} />
        </div>
    </>);
}

