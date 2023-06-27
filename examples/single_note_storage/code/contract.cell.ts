import { beginCell } from "ton-core";

const cell = beginCell()
                .storeUint( 0x01, 32 )
                .storeUint( 0x00, 64 )
                .storeRef(
                    beginCell()
                        .storeStringTail( "It is a new note. It can be infinitly large but you should to know, that each slice cal store only 127 charasters." )
                        .storeRef(
                            beginCell()
                                .storeStringTail( " If you want to exned this limit - use ref to another sell with slice like here." )
                                .storeRef(
                                    beginCell().endCell()
                                )
                            .endCell()
                        )
                    .endCell()
                )
            .endCell();

export default cell;