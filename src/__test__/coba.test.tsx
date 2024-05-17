import { expect, describe, it } from 'vitest';
import { coba } from '../modules/coba';

describe("",()=>{
    describe(" dés pouvoir",()=>{
        it('O,O', () => {
            expect(coba(["O","O"])).toBe(2+2);
        });
        it('O,R', () => {
            expect(coba(["O","R"])).toBe(0+3);
        });
        it('O,R,O,R', () => {
            expect(coba(["O","R","O","R"])).toBe(0+3+0+3);
        });
        it('R,R', () => {
            expect(coba(["R","R"])).toBe(3+3);
        });
        it('O', () => {
            expect(coba(["O"])).toBe(1);
        });
        it('R', () => {
            expect(coba(["R"])).toBe(3);
        });
    });  
});