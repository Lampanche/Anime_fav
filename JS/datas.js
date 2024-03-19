export class Datas
{

    constructor(root)
    {
        this.app = document.querySelector(root)        
    }

    entriesAnime
    
    load()
    {
        this.entriesAnime = JSON.parse(localStorage.getItem("@Animes")) || []
    }

    save()
    {
        localStorage.setItem("@Animes", JSON.stringify(this.entriesAnime))
    }

    call_add()
    {
        const addBtn = document.querySelector(".add-btn")

        addBtn.onclick = () =>
        {
            const input = document.querySelector("input")
            const {value} = input
            this.add(value)
        }
    }

    async add(userSearchAnime)
    {
        const verifyObjEntriesExists = this.entriesAnime.find(objEntries => objEntries.title === userSearchAnime)

        const selectAnimeReturn = await this.selectAnime(userSearchAnime)
        
        try
        {
            if(verifyObjEntriesExists)
            {
                throw "O anime já está listado"
            }
            else if(selectAnimeReturn.title === undefined)
            {
                throw "Anime não encontrado. Por favor verifique o título digitado"
            }
            else
            {
                this.entriesAnime = [...this.entriesAnime, selectAnimeReturn]
                this.save()
                this.updateView()
            }
        }
        catch(e)
        {
            alert(e)
        } 
    }

    async selectAnime(userSearchAnime)
    {
        return await fetch(`https://api.jikan.moe/v4/anime?q=${userSearchAnime}`)
        .then(response => response.json())
        .then(objresponse => objresponse.data)
        .then(data => data.filter(objdata => objdata.title === userSearchAnime && objdata.approved === true))
        .then(returnFilter => Object.assign({}, returnFilter[0]))
    }


}