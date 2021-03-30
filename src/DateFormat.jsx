const DateFormat = ({ txt, d }) => {

    if (d === undefined) { d = new Date() }

    const dgt = (m, n) => `${m}`.padStart(n, '0').substr(-n)

    const arr = [
        { k: 'YYYY', v: d.getFullYear() }
        , { k: 'MM', v: dgt(d.getMonth() + 1, 2) }
        , { k: 'DD', v: dgt(d.getDate(), 2) }
        , { k: 'hh', v: d.dgt(d.getHours(), 2) }
        , { k: 'mm', v: dgt(d.getMinutes(), 2) }
        , { k: 'ss', v: dgt(d.getSeconds(), 2) }
    ]

    arr.forEach(x => txt.replace(x.k, x, v))

    return txt

}