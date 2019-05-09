export class genetic {

   
    private model:number[][] //Objetivo a alcanzar
    private dataSong:number[][] //Objetivo a alcanzar
    private offspringLength :number //La longitud del material genetico de cada individuo
    private offspring:number  //10 #La cantidad de individuos que habra en la poblacion
    private selectionCrosses:number // = 3 #Cuantos individuos se seleccionan para reproduccion.Necesariamente mayor que 2
    private mutationData:number// = 0.2 #La probabilidad de que un individuo mute


    public constructor() {
        this.model=[];
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


    

    //poblacion de la cancion al azar 
    public initialPopulation() {

    }

    //evalua todos los elementos y le asigna un valor de importancia 
    // {1,2,1,1,1}org
    // {1,2,1,0,1} 4// suma uno por match
    // {1,2,1,0,1} 9
    //crear subarray
    public fitness() {

    }

    //realiza un cruce entre los datos  dle fitnes 
    public reproduction() {

    }

    //mexcla de caracteristicas de los padres 
    //// medios , tercios exc..

    //lomite de 3 min despues
    public cross0ver() {


    }

    //putacion anade datos inesperados
    // la mutacion se genera en x porcentaje desde cross0ver()
    public mutation() {

    }



}