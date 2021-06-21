function manage(ticketDescriptions, sortCriteria) {
    class Ticket {

        ticketObj = {};
    
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    
        get getTicket() {
            this.ticketObj.destination = this.destination;
            this.ticketObj.price = this.price;
            this.ticketObj.status = this.status;
            return this.ticketObj;
        }
    }

    let tickets = [];
    ticketDescriptions.forEach(element => {
        let [destinationName, price, status] = element.split('|');
        let newTicket = new Ticket(destinationName, Number(price), status);
        tickets.push(newTicket.getTicket);
    });

    function sortBy(array, sortCriteria) {
        sortCriteria !== 'price'
            ? array = array.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]))
            : array = array.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
        return array;
    }

    let sortedTickets = sortBy(tickets, sortCriteria);
    return sortedTickets;
}

let tickets = manage(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ], 'price');

console.log(tickets);
