import React from "react";

export function useOutsideClick(
  onClose: (i: boolean) => void,
  ref: React.RefObject<HTMLDivElement>
) {
  const handleClick = React.useCallback(
    (event: MouseEvent) => {
      if (
        ref?.current?.contains &&
        !ref.current.contains(event.target as HTMLElement)
      ) {
        onClose(false);
      }
    },
    [onClose, ref]
  );

  React.useEffect(() => {
    document.addEventListener("mouseup", handleClick);

    return () => {
      document.removeEventListener("mouseup", handleClick);
    };
  }, [handleClick]);
}
