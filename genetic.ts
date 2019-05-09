export class genetic {

   
    private model:number[][] //Objetivo a alcanzar
    
    private lastprogenitors:number;
    private newPopulation:number[][];
    private dataSong:number[][] //Objetivo a alcanzar
    private offspringLength :number //La longitud del material genetico de cada individuo
    private offspring:number  //10 #La cantidad de individuos que habra en la poblacion
    private selectionCrosses:number // = 3 #Cuantos individuos se seleccionan para reproduccion.Necesariamente mayor que 2
    private mutationData:number// = 0.2 #La probabilidad de que un individuo mute


    public constructor() {
        this.model=[];
        this.lastprogenitors =0;
        this.newPopulation =[];
        this.dataSong =[];
        this.offspringLength =0;
        this.offspring=0;
        this.selectionCrosses=0;
        this.mutationData=0;

    }

    public setModel(pModel:number[][]){
        this.model = pModel;
    }

    public setDataSong(pDataSong:number[][]){
        this.dataSong = pDataSong;

    }

    public getPopulation():number[][]{
        return this.newPopulation;
    }


    

    
    //evalua todos los elementos y le asigna un valor de importancia 
    // {1,2,1,1,1}org
    // {1,2,1,0,1} 4// suma uno por match
    // {1,2,1,0,1} 9
    //crear subarray
    public fitness() {
        var pos:number = 0;
        this.lastprogenitors=0;
        var  progenitors:number [][];
        progenitors =[];
        var different:number = 0;
        var cant: number = Math.trunc(this.dataSong.length/this.model.length);
        var populationD = cant;
        for(var index: number = 0; index < cant; index++){
            if(this.model[pos][1] != this.dataSong[index][1]){
                different++;
            }
            if(this.model[pos][2] != this.dataSong[index][2]){
                different++;
            }
            if(this.model[pos][3] != this.dataSong[index][3]){
                different++;
            }
            if(this.model[pos][4] != this.dataSong[index][4]){
                different++;
            }
            if(this.model[pos][5] != this.dataSong[index][5]){
                different++;
            }
            if(this.model[pos][6] != this.dataSong[index][6]){
                different++;
            }

            if(different <= 3){
                this.dataSong[index][0] = different;
                progenitors.push(this.dataSong[index]);
            }

            if((cant-1) == index && pos < 6){
                cant+=cant;
                pos++;

                progenitors = this.sortSolution( progenitors,0);
                this.reproduction(progenitors[0], progenitors[1],(populationD));

                this.lastprogenitors += progenitors.length;
                progenitors =[];
                
            }

           
        }
       

    }

    private sortSolution(pSolution: number[][], pPosShape: number) : number[][] {
        return pSolution.sort((shapeA: number[], shapeB: number[]) => {
        if (shapeA[pPosShape] < shapeB[pPosShape]) {
            return -1;
        } 
        if (shapeA[pPosShape] > shapeB[pPosShape]) {
            return 1;
        } 
        return 0;
        });
    }
    //realiza un cruce entre los datos  dle fitnes 


    public reproduction(pFathe:number[],pMother:number[],pPopulation:number) {
        var random:number =0;
        
        for(var index = 0;index<pPopulation;index++){
            var kid:number[];
            random = (Math.floor(Math.random() * 6) + 1) ;
            kid = pFathe.slice(1,random).concat(pMother.slice(random));
            if((Math.floor(Math.random() * 100)<7)){
                kid = this.mutation(kid);

            }
            this.newPopulation.push(kid);
        }

    }

    public selectionPopulation():boolean{
       var actualProg:number;
       var auxProgenitors = (Object.assign([],this.newPopulation))
       var lastProg = this.lastprogenitors ;
       this.setDataSong(this.newPopulation);
      
       this.fitness();
       actualProg = this.lastprogenitors;

       if(lastProg > actualProg){
        this.setDataSong(auxProgenitors);
       }
       else if ((this.newPopulation.length - (this.newPopulation.length*10)/100) <= actualProg ){
           return false;
       }
       return true ;
    }
    //putacion anade datos inesperados
    // la mutacion se genera en x porcentaje desde cross0ver()
    public mutation(pKid:number[]):number[] {
        var randomPost:number =0;
        var randomMutatio:number =0;
        randomPost = (Math.floor(Math.random() * 5) + 1) ;
        randomMutatio = (Math.floor(Math.random() * 4)) ;
        pKid[randomPost] = randomMutatio;
        return  pKid;
    }



}