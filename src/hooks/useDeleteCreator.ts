import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client"
import { showConfirm } from "react-confirm-prompt";

interface CardNum{
    num?:  Int8Array | null
    param?: string | null
}
export const useDeleteCreator = (cardnum: CardNum, onUse: () => void) => {
    const navigate = useNavigate()
    const { id: paramId } = useParams<{ id: string }>();
    const id: string | Int8Array = cardnum.num ?? paramId ?? '';
    const onHome = location.pathname === '/'

    const deleteCreator = async () => {
        const answer = await showConfirm("Are you sure?", {color: "#d5135a"})
            if(answer) {
                try {
                    const { error } = await supabase
                        .from('creators')
                        .delete()
                        .eq('id', id)
                    
                    if (error) {
                        throw new Error("Failed to delete")
                    }
                } catch (error) {
                    console.error("Delete Error:", error);
                } finally {
                    if (onHome) {
                        onUse()
                        navigate('/')
                    } else {
                        onUse()
                        navigate('/dashboard')
                    }
                }
            }
        }
    return deleteCreator
}
