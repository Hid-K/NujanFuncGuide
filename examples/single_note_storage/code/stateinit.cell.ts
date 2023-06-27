import { beginCell } from "ton-core";
import { Address } from "ton-core"

const cell = beginCell()
                .storeAddress(Address.parse('EQBjt4lS8PR37FoSG8DCOyXRSuykoQvyeAQAmudyaRhtY3yE'))
                .storeRef(
                    beginCell()
                        .storeStringTail( "Empty note!!!!!!!" )
                    .endCell()
                )
             .endCell();

export default cell;