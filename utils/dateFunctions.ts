import { formatDistanceToNow } from "date-fns";
import { pt } from 'date-fns/locale';

export const getformatDistanceToNow = ( date:number ) => {

    const fromNow = formatDistanceToNow( date, { locale: pt } );

    return `faz ${fromNow}`;
}