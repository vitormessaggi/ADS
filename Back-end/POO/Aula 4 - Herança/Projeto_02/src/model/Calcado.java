package model;

public class Calcado extends Vestuario{

    private String materialSola;
    private String materialParteSuperior;
    private String materialInterno;

    public Calcado(int c, String d, double v, String n, String co, String t, String ms, String mps, String mi) {
        super(c, d, v, n, co, t);
        setMaterialInterno(ms);
        setMaterialSola(mps);
        setMaterialParteSuperior(mi);
    }

    public String getMaterialSola() {
        return materialSola;
    }

    public void setMaterialSola(String argMats) {
        if(argMats.length()>1 && argMats.length()<20){
        this.materialSola = argMats;}
        else {
            System.out.println("Erro");
        }
    }

    public String getMaterialParteSuperior() {
        return materialParteSuperior;
    }

    public void setMaterialParteSuperior(String argMartSP) {
        if(argMartSP.length()>1 && argMartSP.length()<20){
            this.materialParteSuperior = argMartSP;}
        else {
            System.out.println("Erro");
        }
    }

    public String getMaterialInterno() {
        return materialInterno;
    }

    public void setMaterialInterno(String argMatI) {
        if(argMatI.length()>1 && argMatI.length()<20){
            this.materialInterno = argMatI;}
        else {
            System.out.println("Erro");
        }
    }

    public String print(){
        String ret;
        ret = super.print();
        ret = ret + "\nMaterial Sola: " + this.materialSola + "\nMaterial parte superior " + this.materialParteSuperior + "\nMaterial Interno " + this.materialInterno;
        return ret;
    }
}
