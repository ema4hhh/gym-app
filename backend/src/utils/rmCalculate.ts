interface Params {
    weight: number;
    reps: number;
}

export const rm = ({ weight, reps } : Params) => {
    const lomonerm = weight * Math.pow(reps, 1 / 10);
    
    const brzonerm = weight * (36 / (37 - reps));
    const eplonerm = weight * (1 + (reps / 30));
    const mayonerm = (weight * 100) / (52.2 + (41.9 * Math.exp(-1 * (reps * 0.055))));
    const ocoonerm = weight * (1 + reps * 0.025);
    const watonerm = (weight * 100) / (48.8 + (53.8 * Math.exp(-1 * (reps * 0.075))));
    const lanonerm = weight * 100 / (101.3 - 2.67123 * reps);


    const averageRM = Math.round(((lomonerm + brzonerm + eplonerm + mayonerm + ocoonerm + watonerm + lanonerm)/7) * 10) / 10;

    return averageRM;
}
