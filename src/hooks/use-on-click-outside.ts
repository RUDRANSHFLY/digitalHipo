import React, { RefObject , useEffect } from "react";

type Event = MouseEvent | TouchEvent;


export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref : RefObject<T>,
    handler : (event : Event) => void
) => {
    useEffect(() => {
      const listner = ( event : Event ) => {
        const el = ref?.current;
            if(!el || el.contains(event?.target as Node) || null){
                return ;
            }

            handler(event)
        }

        document.addEventListener("mousedown",listner);
        document.addEventListener("touchstart",listner);
    
      return () => {
        document.addEventListener("mousedown",listner);
        document.addEventListener("touchstart",listner);
      }
    }, [ref,handler]);
    
}


export default useOnClickOutside;