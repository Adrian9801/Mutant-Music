export class areas {
    // console.log('El area de la muestra es ' + pp.waveArea(0,ss.zonesTime,ss.zones[0],ss.zones[1]));

    //   _c1__                                
    //   |   | 
    // l1|   |l2   
    //   |_c1|                                                                     
    //   |  /               
    //c2 | /                
    //   |/                 



    // X se refiere al tiempo , Y a los valores de amplitud
    public waveArea(startPositionX: number, finalPositionX: number,
        startPositionY: number, finalPositionY: number): number {

        var cateto1: number;
        var cateto2: number;

        var lado0: number;// el menor de los dos l1 ol2

        var lado1: number;
        var lado2: number;

        var AreaRectangulo;
        var AreaTriangulo;
        var AreaTotal;

        cateto1 = finalPositionX - startPositionX;
        lado1 = (1 - startPositionY);//lado izq

        //si la altura es diferente
        if (finalPositionY !== startPositionY) {

            lado2 = (1 - finalPositionY);//lado derecho

            if (lado1 > lado2) { cateto2 = lado1 - lado2; lado0 = lado2;}//cual es mayor
            else { cateto2 = lado2 - lado1; lado0 = lado1; }

            AreaRectangulo = (cateto1) * (lado0);
            AreaTriangulo = (((cateto2) * (cateto1)) / 2);
            AreaTotal = AreaRectangulo + AreaTriangulo;

        } else {
            AreaTotal = (cateto1) * (lado1);
        }
        return AreaTotal*100;
    }

}