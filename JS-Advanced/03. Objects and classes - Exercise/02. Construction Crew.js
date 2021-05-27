let worker = {
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
};

function modifyWorkerProperties(worker) {
    if (worker.dizziness) {
        let requiredAmount = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredAmount;
        worker.dizziness = false;
    }
    return worker;
}

console.log(modifyWorkerProperties(worker));