export class areas {
    public waveTiangle(pAX: number, pAY: number, pBX: number, pBY: number, pCX: number, pCY: number): number {
        var areaTriangle = Math.abs((((pAX * (pBY - pCY)) + (pBX * (pCY - pAY)) + (pCX * (pAY - pBY))) / 2));

        return areaTriangle * 100;
    }

}