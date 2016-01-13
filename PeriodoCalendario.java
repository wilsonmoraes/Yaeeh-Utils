import java.util.Calendar;

public class PeriodoCalendario {

    private Calendar mFim;
    private Calendar mInicio;
    private final EnumPeriodoCalendario periodo;

    public PeriodoCalendario(EnumPeriodoCalendario periodo) {
        this.periodo = periodo;
        calcularPeriodo();
    }

    private void calcularPeriodo() {
        Calendar calendar;
        Calendar calendar1;
        Calendar calendar2;
        calendar1 = Calendar.getInstance();
        calendar2 = Calendar.getInstance();
        calendar = calendar1;
        switch (periodo) {
            case HOJE:
                break;
            case ONTEM:
                calendar1.add(Calendar.DAY_OF_MONTH, -1);
                calendar2.add(Calendar.DAY_OF_MONTH, -1);
                break;
            case ANO_ATUAL:
                calendar1.set(Calendar.DAY_OF_MONTH, 1);
                calendar1.set(Calendar.MONTH, 0);
                break;

            case ANO_PASSADO:
                calendar1.add(Calendar.YEAR, -1);
                calendar1.set(Calendar.DAY_OF_MONTH, 1);
                calendar1.set(Calendar.MONTH, 0);

                calendar2.add(Calendar.YEAR, -1);
                calendar2.set(Calendar.DAY_OF_MONTH, calendar2.getActualMaximum(Calendar.DAY_OF_MONTH));
                calendar2.set(Calendar.MONTH, 11);
                break;

            case MES_ATUAL:
                calendar1.set(Calendar.DAY_OF_MONTH, 1);
                break;
            case MES_PASSADO:
                calendar1.add(Calendar.MONTH, -1);
                calendar1.set(Calendar.DAY_OF_MONTH, 1);

                calendar2.add(Calendar.MONTH, -1);
                calendar2.set(Calendar.DAY_OF_MONTH, calendar2.getActualMaximum(Calendar.DAY_OF_MONTH));
                break;
            case SEMANA_ATUAL:
                calendar1.set(Calendar.DAY_OF_WEEK, calendar1.getFirstDayOfWeek());
                break;
            case SEMANA_PASSADA:
                calendar1.add(Calendar.WEEK_OF_MONTH, -1);
                calendar1.set(Calendar.DAY_OF_WEEK, calendar1.getFirstDayOfWeek());

                calendar2.add(Calendar.WEEK_OF_MONTH, -1);
                calendar2.set(Calendar.DAY_OF_WEEK, calendar2.getActualMaximum(Calendar.DAY_OF_WEEK));
                break;
            case ULTIMOS_12_MESES:
                calendar1.set(Calendar.DAY_OF_MONTH, 1);
                calendar1.add(Calendar.MONTH, -12);
                break;
            case ULTIMOS_6_MESES:
                calendar1.set(Calendar.DAY_OF_MONTH, 1);
                calendar1.add(Calendar.MONTH, -6);
                break;
            case ULTIMOS_3_MESES:
                calendar1.set(Calendar.DAY_OF_MONTH, 1);
                calendar1.add(Calendar.MONTH, -3);
                break;
            case ULTIMOS_60_DIAS:
                calendar1.set(Calendar.DAY_OF_MONTH, 1);
                calendar1.add(Calendar.DAY_OF_YEAR, -60);
                break;
            case ULTIMOS_30_DIAS:
                calendar1.set(Calendar.DAY_OF_MONTH, 1);
                calendar1.add(Calendar.DAY_OF_YEAR, -30);
                break;
        }
        mInicio = calendar;
        mFim = calendar2;
    }

    public static Calendar getInfinitoFuturo() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(2030, 5, 7);
        return calendar;
    }

    public static Calendar getInfinitoPassado() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(2001, 0, 1);
        return calendar;
    }

    public Calendar getFim() {
        return mFim;
    }

    public Calendar getInicio() {
        return mInicio;
    }

}
