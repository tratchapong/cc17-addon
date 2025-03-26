import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Login from './Login'


function Modal01() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button  >Open</Button>
      </DialogTrigger>
      <DialogContent>
        {/* <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader> */}
        <Login />
      </DialogContent>
    </Dialog>
  );
}

export default Modal01;
