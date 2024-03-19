import { Datas } from "./datas.js"

export class View extends Datas
{
    constructor(root)
    {
        super(root)
        {
            this.entriesAnime
            this.load()
            this.call_add()
        }

        this.updateView()
    }

    tbody = document.querySelector("tbody")

    updateView()
    {  
        this.removeAllTr()

        if(this.entriesAnime.length > 0)
        {
            this.entriesAnime.forEach(elements => 
                {   
                    const row = this.createRow()
                    row.querySelector("img").src = `${elements.images.jpg.large_image_url}`
                    row.querySelector(".title-and-validation span").textContent = `${elements.title}`
                    row.querySelector(".finish").onclick = () => this.addWatchedAndCalassificationInfo(elements, row)
                    row.querySelector(".in-coming").onclick = () => this.addInComingInfo(elements, row)
                    row.querySelector(".status").textContent = `${this.formatStatus(elements)}`
                    row.querySelector(".starterDate").textContent = `${elements.aired.prop.from.day}/${elements.aired.prop.from.month}/${elements.aired.prop.from.year}`
                    row.querySelector(".endDate").textContent =`${elements.aired.prop.to.day}/${elements.aired.prop.to.month}/${elements.aired.prop.to.year}`
                    row.querySelector(".countEpisodes").textContent =`${elements.episodes}`
                    row.querySelector(".remove").onclick = () => this.remove(elements)
                    this.tbody.append(row)
                    this.verifyAddInComingInfo(elements, row)
                    this.verifyAddWatchedAndAppraisalInfo(elements, row)
                    this.verifyAppraisalValueAndStyleElements(elements, row) 
                }
                )                
        }
        else if(this.entriesAnime.length == 0)
        {
            const row_nothing_datas = this.creatRowNothingDatas()

            row_nothing_datas.classList.add("nothing-favorites")

            const table = document.querySelector("table")
            const thead = document.querySelector("table thead")

            const heightTable = table.clientHeight
            const heightThead = thead.clientHeight
                
            const heightTr = heightTable - heightThead 

            row_nothing_datas.style.height = `${heightTr}px`
                
            this.tbody.append(row_nothing_datas)
        }
    }

    formatDate(date)
    {
        let str_date = String(date)
        let zero = "0"

        if(str_date.length == 1)
        {
            newStr = [zero, str_date].s
        }        
    }

    formatStatus(elements)
    {   
        let format

        if(elements.status === "Finished Airing")
        {   
            format = "Finalizado"
            return format
        }else if(elements.status === "Currently Airing")
        {
            format = "Em exibição"
            return format
        }
    }
    
    createRow()
    {
        const tr = document.createElement("tr")
            
        tr.innerHTML = `<td>
        <div class="animes-content">

            <div class="initial-infos-anime">

                <img src="https://img.quizur.com/f/img638f6ea7b6e4a0.22317840.jpg?lastEdited=1670344372" alt="Imagem do anime">
                
                <div class="title-and-validation">

                    <span>One piece</span>

                    <div class="classification hidden-classification">

                        <button class = "appraisal-1">

                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C11.8321 0 12.1265 0.209195 12.2291 0.518185L14.5486 7.5H22.2333C22.5693 7.5 22.8661 7.71402 22.9656 8.02797C23.065 8.34193 22.944 8.68266 22.6669 8.86855L16.4368 13.0477L18.8389 20.0102C18.9455 20.3193 18.8356 20.6605 18.567 20.854C18.2984 21.0474 17.9327 21.0488 17.6626 20.8573L11.5 16.4887L5.33739 20.8573C5.06729 21.0488 4.70163 21.0474 4.43301 20.854C4.16439 20.6605 4.05446 20.3193 4.16113 20.0102L6.56316 13.0477L0.333151 8.86855C0.0560487 8.68266 -0.0650437 8.34193 0.0344209 8.02797C0.133886 7.71402 0.430729 7.5 0.76672 7.5H8.45138L10.7709 0.518185C10.8735 0.209195 11.1679 0 11.5 0ZM11.5 3.17651L9.73747 8.48181C9.63482 8.7908 9.34046 9 9.00835 9H3.24043L7.90859 12.1315C8.19153 12.3213 8.31113 12.6718 8.20143 12.9898L6.38163 18.2646L11.0501 14.9552C11.3185 14.7649 11.6815 14.7649 11.9499 14.9552L16.6184 18.2646L14.7986 12.9898C14.6889 12.6718 14.8085 12.3213 15.0914 12.1315L19.7596 9H13.9917C13.6595 9 13.3652 8.7908 13.2625 8.48181L11.5 3.17651Z" fill="white"/>
                            </svg>
                                
                        </button>

                        <button class = "appraisal-2">

                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C11.8321 0 12.1265 0.209195 12.2291 0.518185L14.5486 7.5H22.2333C22.5693 7.5 22.8661 7.71402 22.9656 8.02797C23.065 8.34193 22.944 8.68266 22.6669 8.86855L16.4368 13.0477L18.8389 20.0102C18.9455 20.3193 18.8356 20.6605 18.567 20.854C18.2984 21.0474 17.9327 21.0488 17.6626 20.8573L11.5 16.4887L5.33739 20.8573C5.06729 21.0488 4.70163 21.0474 4.43301 20.854C4.16439 20.6605 4.05446 20.3193 4.16113 20.0102L6.56316 13.0477L0.333151 8.86855C0.0560487 8.68266 -0.0650437 8.34193 0.0344209 8.02797C0.133886 7.71402 0.430729 7.5 0.76672 7.5H8.45138L10.7709 0.518185C10.8735 0.209195 11.1679 0 11.5 0ZM11.5 3.17651L9.73747 8.48181C9.63482 8.7908 9.34046 9 9.00835 9H3.24043L7.90859 12.1315C8.19153 12.3213 8.31113 12.6718 8.20143 12.9898L6.38163 18.2646L11.0501 14.9552C11.3185 14.7649 11.6815 14.7649 11.9499 14.9552L16.6184 18.2646L14.7986 12.9898C14.6889 12.6718 14.8085 12.3213 15.0914 12.1315L19.7596 9H13.9917C13.6595 9 13.3652 8.7908 13.2625 8.48181L11.5 3.17651Z" fill="white"/>
                            </svg>
                                
                        </button>

                        <button class = "appraisal-3">

                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C11.8321 0 12.1265 0.209195 12.2291 0.518185L14.5486 7.5H22.2333C22.5693 7.5 22.8661 7.71402 22.9656 8.02797C23.065 8.34193 22.944 8.68266 22.6669 8.86855L16.4368 13.0477L18.8389 20.0102C18.9455 20.3193 18.8356 20.6605 18.567 20.854C18.2984 21.0474 17.9327 21.0488 17.6626 20.8573L11.5 16.4887L5.33739 20.8573C5.06729 21.0488 4.70163 21.0474 4.43301 20.854C4.16439 20.6605 4.05446 20.3193 4.16113 20.0102L6.56316 13.0477L0.333151 8.86855C0.0560487 8.68266 -0.0650437 8.34193 0.0344209 8.02797C0.133886 7.71402 0.430729 7.5 0.76672 7.5H8.45138L10.7709 0.518185C10.8735 0.209195 11.1679 0 11.5 0ZM11.5 3.17651L9.73747 8.48181C9.63482 8.7908 9.34046 9 9.00835 9H3.24043L7.90859 12.1315C8.19153 12.3213 8.31113 12.6718 8.20143 12.9898L6.38163 18.2646L11.0501 14.9552C11.3185 14.7649 11.6815 14.7649 11.9499 14.9552L16.6184 18.2646L14.7986 12.9898C14.6889 12.6718 14.8085 12.3213 15.0914 12.1315L19.7596 9H13.9917C13.6595 9 13.3652 8.7908 13.2625 8.48181L11.5 3.17651Z" fill="white"/>
                            </svg>
                                
                        </button>

                        <button class = "appraisal-4">

                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C11.8321 0 12.1265 0.209195 12.2291 0.518185L14.5486 7.5H22.2333C22.5693 7.5 22.8661 7.71402 22.9656 8.02797C23.065 8.34193 22.944 8.68266 22.6669 8.86855L16.4368 13.0477L18.8389 20.0102C18.9455 20.3193 18.8356 20.6605 18.567 20.854C18.2984 21.0474 17.9327 21.0488 17.6626 20.8573L11.5 16.4887L5.33739 20.8573C5.06729 21.0488 4.70163 21.0474 4.43301 20.854C4.16439 20.6605 4.05446 20.3193 4.16113 20.0102L6.56316 13.0477L0.333151 8.86855C0.0560487 8.68266 -0.0650437 8.34193 0.0344209 8.02797C0.133886 7.71402 0.430729 7.5 0.76672 7.5H8.45138L10.7709 0.518185C10.8735 0.209195 11.1679 0 11.5 0ZM11.5 3.17651L9.73747 8.48181C9.63482 8.7908 9.34046 9 9.00835 9H3.24043L7.90859 12.1315C8.19153 12.3213 8.31113 12.6718 8.20143 12.9898L6.38163 18.2646L11.0501 14.9552C11.3185 14.7649 11.6815 14.7649 11.9499 14.9552L16.6184 18.2646L14.7986 12.9898C14.6889 12.6718 14.8085 12.3213 15.0914 12.1315L19.7596 9H13.9917C13.6595 9 13.3652 8.7908 13.2625 8.48181L11.5 3.17651Z" fill="white"/>
                            </svg> 

                        </button>

                        <button class = "appraisal-5">

                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C11.8321 0 12.1265 0.209195 12.2291 0.518185L14.5486 7.5H22.2333C22.5693 7.5 22.8661 7.71402 22.9656 8.02797C23.065 8.34193 22.944 8.68266 22.6669 8.86855L16.4368 13.0477L18.8389 20.0102C18.9455 20.3193 18.8356 20.6605 18.567 20.854C18.2984 21.0474 17.9327 21.0488 17.6626 20.8573L11.5 16.4887L5.33739 20.8573C5.06729 21.0488 4.70163 21.0474 4.43301 20.854C4.16439 20.6605 4.05446 20.3193 4.16113 20.0102L6.56316 13.0477L0.333151 8.86855C0.0560487 8.68266 -0.0650437 8.34193 0.0344209 8.02797C0.133886 7.71402 0.430729 7.5 0.76672 7.5H8.45138L10.7709 0.518185C10.8735 0.209195 11.1679 0 11.5 0ZM11.5 3.17651L9.73747 8.48181C9.63482 8.7908 9.34046 9 9.00835 9H3.24043L7.90859 12.1315C8.19153 12.3213 8.31113 12.6718 8.20143 12.9898L6.38163 18.2646L11.0501 14.9552C11.3185 14.7649 11.6815 14.7649 11.9499 14.9552L16.6184 18.2646L14.7986 12.9898C14.6889 12.6718 14.8085 12.3213 15.0914 12.1315L19.7596 9H13.9917C13.6595 9 13.3652 8.7908 13.2625 8.48181L11.5 3.17651Z" fill="white"/>
                            </svg>
                                
                        </button>

                    </div>

                </div>

            </div>

            <div class="validation-watch">
            
            
                <button class="finish">

                    <svg viewBox=" 0 -2 24.00 24.00" width="200px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" transform="rotate(0)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0">
                    </g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <title>action / 6 - action, check, circle, checkmark, button, ok icon</title> 
                    <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"> 
                    <g id="stroke-green"   transform="translate(-525.000000, -82.000000)" id="Group" stroke="#ffffff" stroke-width="2"> 
                    <g transform="translate(523.000000, 80.000000)" id="Shape"> 
                    <circle cx="12" cy="12" r="9"> 
                    </circle> 
                    <polyline points="7 11.3496994 11 15.3496994 17 9.35"> 
                    </polyline> </g> </g> </g> </g>
                    </svg>

                    <span>Já vi</span>
                </button>

                <button class="in-coming">
                    <?xml version="1.0" encoding="utf-8"?>
                    <svg fill="#ffffff" width="200px" height="200px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23,11a1,1,0,0,0-1,1,10.034,10.034,0,1,1-2.9-7.021A.862.862,0,0,1,19,5H16a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V1a1,1,0,0,0-2,0V3.065A11.994,11.994,0,1,0,24,12,1,1,0,0,0,23,11Z
                    M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z"/></svg>
                    <span>Irei ver</span>
                </button>

            </div>

        </div>

    </td>
    <td class="status">
        Iniciou
    </td>
    <td class="starterDate">
        10/05/1997
    </td>
    <td class="endDate">
        --
    </td>
    <td class="countEpisodes">
        1040
    </td>
    <td>
        <button class="remove">
            Remover
        </button>
        </td>` 
        return tr                            
    }

    creatRowNothingDatas()
    {
        const rowNothingDatas = document.createElement("tr")
        rowNothingDatas.innerHTML = 
        `<td>
            <img src="./assets/kon_bleach.png" alt="Imagem do kon de bleach!">
            <span> Nenhum anime adicionado </span>
        </td>`
        return rowNothingDatas
    }

    removeAllTr()
    {
        const listTr = document.querySelectorAll("tbody tr")
        listTr.forEach(tr => this.tbody.removeChild(tr))
    }

    verifyAddInComingInfo(elements, row)
    {
        if(elements.inComing !== undefined)
        {
            row.querySelector(".in-coming svg").setAttribute("fill", `${elements.inComing}`)
            row.querySelector(".in-coming span").style.color = `${elements.inComing}`
        }    
    }
    
    viewBtnClassification(row)
    {
        const classification = row.querySelector(".classification")
        classification.classList.remove("hidden-classification")
    }

    verifyAddWatchedAndAppraisalInfo(elements, row)
    {
        if(elements.watched && elements.appraisal !== undefined)
        {
            row.querySelector("#stroke-green").setAttribute("stroke", `${elements.watched}`)
            row.querySelector(".finish span").style.color = `${elements.watched}`

            this.viewBtnClassification(row)  

            row.querySelector(".appraisal-1").addEventListener("click", (e) =>
            {
                this.entriesAnime.forEach(objEntries => {
                    if(objEntries.title !== elements.title)
                    {
                    return
                    }
                    Object.assign(objEntries, objEntries.appraisal.push(e.currentTarget.className))
                    
                })
                this.save()
                this.verifyAppraisalValueAndStyleElements(elements, row)         
            })
            row.querySelector(".appraisal-2").addEventListener("click", (e) =>
            {
                this.entriesAnime.forEach(objEntries => {
                    if(objEntries.title !== elements.title)
                    {
                    return
                    }
            
                    Object.assign(objEntries, objEntries.appraisal.push(e.currentTarget.className))
                    
                })
            
                this.save()
                this.verifyAppraisalValueAndStyleElements(elements, row)         
            })
            row.querySelector(".appraisal-3").addEventListener("click", (e) =>
            {
                this.entriesAnime.forEach(objEntries => {
                    if(objEntries.title !== elements.title)
                    {
                    return
                    }
            
                    Object.assign(objEntries, objEntries.appraisal.push(e.currentTarget.className))
                })
            
                this.save()
                this.verifyAppraisalValueAndStyleElements(elements, row)         
            })
            row.querySelector(".appraisal-4").addEventListener("click", (e) =>
            {
                this.entriesAnime.forEach(objEntries => {
                    if(objEntries.title !== elements.title)
                    {
                    return
                    }
            
                    Object.assign(objEntries, objEntries.appraisal.push(e.currentTarget.className))
                })
            
                this.save()
                this.verifyAppraisalValueAndStyleElements(elements, row)         
            })
            row.querySelector(".appraisal-5").addEventListener("click", (e) =>
            {
                this.entriesAnime.forEach(objEntries => {
                    if(objEntries.title !== elements.title)
                    {
                    return
                    }
            
                    Object.assign(objEntries, objEntries.appraisal.push(e.currentTarget.className))
                })
            
                this.save()
                this.verifyAppraisalValueAndStyleElements(elements, row)         
            })  
        }
        else
        {
            return
        }
    }

    listClassBtnClassification(row)
    {
        const listBtnClassification = row.querySelectorAll(".classification button")

        const newListBtnClassification = this.formatNodeList(listBtnClassification)

        const listClassBtn = newListBtnClassification.map(btn => btn.className)

        return listClassBtn
    }

    verifyAppraisalValueAndStyleElements(elements, row)
    {
        const listClassBtn = this.listClassBtnClassification(row)

        let listbtnStyle
   
        if(elements.appraisal !== undefined && elements.appraisal.length > 0)
        {
            for(let i = 0; i <= elements.appraisal.length - 1; i++)
            {
                if(elements.appraisal[i] !== null)
                {
                    listbtnStyle = listClassBtn.filter(btnClass => listClassBtn.indexOf(btnClass) <= listClassBtn.indexOf(elements.appraisal[i]))
                }
                else
                {
                    break        
                }   
            }

            for(let n = 0; n <= listbtnStyle.length - 1; n++)
            {
                row.querySelector(`.${listbtnStyle[n]} svg path`).setAttribute("fill", `${elements.appraisalIdentifierColor}`)        
            }
        }
        else
        {
            return
        }

    }

    formatNodeList(nodeList)
    {
        let newArray = []
        
        let i = 0
        
        while(i <= nodeList.length - 1)
        {
            newArray.push(nodeList[i])
        
            i++
        }
        
        return newArray
    }

    remove(elements)
    {
        this.entriesAnime = this.entriesAnime.filter(objEntries => objEntries.title !== elements.title)
        this.save()
        this.updateView()
    }

    addInComingInfo(elements, row)
    {
        this.entriesAnime.forEach(objEntries => 
            {
                if(objEntries.title !== elements.title)
                {
                    return
                }
                Object.assign(objEntries, {inComing: "#b4493c"})
            })
            this.save()
            this.verifyAddInComingInfo(elements, row)
    }

    addWatchedAndCalassificationInfo(elements, row)
    {
        this.entriesAnime.forEach(objEntries => {

            if(objEntries.title !== elements.title)
            {
                return
            }

            Object.assign(objEntries, {watched : "#2e8b57", appraisal : [], appraisalIdentifierColor: "#daa520" })

            })

        this.save()
        this.verifyAddWatchedAndAppraisalInfo(elements, row)
    }
}