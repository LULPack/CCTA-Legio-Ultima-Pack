// ==UserScript==
// @name        CCTA Legio Ultima Pack
// @namespace   https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @include     https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
/* @description Auf Legio Ultima zugeschnittenes Scripte Pack.
                Pack list : 
                - Infernal Wrapper (API needed)
                - Tiberium Coords 500:500
                - Maelstorm Tools
				- CnCOpt Button
				- MT Basescanner
				- C&C: Tiberium Alliances Chat Helper Enhanced
                - C&C:TA Compass Movable
				- BaseInfo 3.2.5
				- Tiberium Alliances Zoom (Sky)
				- WarChiefs - Tiberium Alliances Upgrade Base/Defense/Army
				- CnC: Tiberium Alliances COORDS 500:500
				- New Ressource Trade Window
				- CCTA NavBar Reorderer 1.0
				- PVE/PVP Player Info Mod 1.2
				- TitleMod
				- TABS v2 final
*/
// @version     1.8.6
// @icon		data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAE9lJREFUeNrsXXtsVFd6P/P0PDwztrENtnnY4Q0GDARC2jyAQEJTUTVF0W63AlYbNSSt2v4RZbVJ/ugfuw1dKW3TrlbVqiKtYKuugrSbFFUEkTQPAgsEgnklJml4GPzAnvHMeOzxjMczt7/fufeYsbHNjD0eovYe6Whm7tw553zf73udc79zxqJpmjDLt6dYTRaYgJjFBMQExCwmICYgZjEBMQExS5GLJXti+MtfHhCdnZ1iaCgtEolEzo2wDat16thmMpqwWArbJ+9jteTQcK73FZL20lKvsNlsQuEwApBHHvkdcfbsGYCRkp9dLqcV39vx1jZOe2k0MZRMDmYKJSH37tMyhO/Tg4OpnPu02awWu92O9jTbOFYBbVnSQ5DEdDqjFZN2t7tEOJ3OYUDsI9EqFX6/X3i9Ggbkstnt1ircV4ev/GMQwhZiqO2o3Z2dXYMokx4YGCZqambarFbLRH2CCSICKW4D53o6Om7jJT1hu+XlZaKszO8Go2vxcSZ5PcZtSdTbaLc9mUz2EzyAWBTaA4HA+IAMy6Cuti6YkEV4fRS1hpeN7zL4sRpgF+pJqOxpt9s1JUAm6FPDd+hSSje534r3n+LaBfTbfy9ASkqcAmCAudoGfFxJuTPazBgWgrTEUS+gfgjm9PNnxaR9hGCOtOEZbygU+TmIbNJVXPgMCXHo/LJAe9ydPp/vhiE1lYaUXEINT3IMXtSfp1KpJkj8qD4tZELa5yu94fV6usEMi3H/VdQWfO6foF0y8yddXcEApN0NAWSbHjRpJR2gr7+8PPA1XsnJBGgf6u4OfgeMrbNabcWifWJAoK7zvV7v7nXr1onLly8DoLQSDvk+lRoSsVhfvcfjuQ1CaMudlCbYXtucOXNEY2MZQc09xIMzRFvzL1y4sLuxsXHMPhOJJPucB0B6jC9KUNGvZl21ahVN64g+qfpgGnzh2T9funTpY9FoVNy+fXvYWfN7thuNxkrj8YFIIOBv5zUEMXNLS31Pr1y5SnzxRWFpJ52xWEyAzvwAgU+z0qa98MILYv/+/ZIQKorFYhU9PSHR3d0tJTbLjmo6jRpMQwnsdbm4lwkZPdCqqiprW1ub2LNnjzhw4MBwn2QG36dSQUZeGaOv7H4l4yFAIxjB99XV1cLhcGS2bNkix/Xuu+/KvlgJcGdnu+jr6x9BA2jXqqsrtRdffMFSaNptNtvkNMSwrYKIz549W/T395Mw2WA8HjcI18YN/zigfADRpVWPakb3SeaFwz24JzNBmJyR/Y0GhJWcIlgNDQ2ioqJC3sc22fbt25Zx6Zgu2nO1HGMG0FBD2biK4Q0Cp3VCNB19sg22q9pStdjjMGfq5tKJWUxATEDMYgJiAmIWExCzmICYgJjFBMQExCwmICYgZjEBMQExiwmIWUxATEDMkluxF6CN4aQDI20n5x8a90/6+Sh/PzqNk09beS3flNDppD2fsUwVEPbkAAPc4XCPm6ku4yUCjDPQwcuXL7vcbne+DJSMSCaT8ncj04AyIhbrFalUarpByYN2i3xOP2tW9d0A2O18Zk8CmCGRniogDtQaEN4EBsxJpQaFymXKDRCRjER6l7lctfn0aSSxWara2m7amDw3ku8W7dq1q8menh5XPuk300u7Jr9jyuhd3+gJFDKVFbXDPgVVJapMWluAOoPSng8Y0oFZrSlIyKxc+lOpn0LPzV1oANNvGUMNcCmJWpOvCZ0+2i3ZzFdjVPTQ5jJJjBmQx+x5ME++ptMZZ1dX92o933aytl8fpMPh6LPZrJ2GHxmXIpgkeyKR9BMXoaeSlqOuMhgzVoH6a/NotvLJEysm7dmprGiM6sV6OWdAmHTG7HiLxWqxWi1eZvRNWsSMdE7Y3dLBwUzakBbb3fbVITMHMxnNHwyG1uXTh9NZIm7duiU1ZKp5VdNB+6hUVuLglCTn0gidJh1vfX2DYJa3bgomKyF30jn7++PDmYtjlbKyMpFMJuSrSi/NVQqZZtre3i5CoVDekU4xaB+dyqoigrx8CAfm8Xjusof5hqpjpXOODlXZPvuaN69emp18Gcr7Gfmwjv7tGEPnlaH7Rfukw95cUjFzbSf7I7WEEREz2e8KqXB9stHS6LHeMV/D29wyBmO4ZSxxH2iflonhFAYn4/BUPB4fQrFXVlbmTUC+JTvXF0APGc33ofZ8q2fquSYnT01KmMrvGuzu7kq0tbW5Fi9eLI4fPy4ndYXYRDrWbDke75ftQykzMB9xYw7QyjmAclLFoX04Hs6uYwNCO0fzwcr3hWZM9swaYS93L91+5513yl5++WWxcuVK0dLSIu8p1BxCZbFzi0Fvb6/cXuBw2EOot/BdG/o5TeVRNr5YtBumMmn4LykcowGx0l4zmqBq05EVerar7Djb1hmltVdVVV48ePDgn9XV1flQRVdX15jOeLKFTCAI3E0VCvWIgYFEorq66lf4qgX1GupZdPVAsWlHvYXLnxnzqS9RQyNmOJs3b6w5efJ084oVK6oZwxdiUjVeYThLaa2oKN+DEPVjALAqFAr/EICspblSmygLZTYICvrIgNmnKyrKfoaI6RyucUbfg9dIT0+4xmazNy9durT65s2bRaMdc5zfon+b4cO6RwMiPvnkk8Z0WluWFZdZRL5rIjlPgC0dpaXeE1x/wnuY9iE35iYPCn3na8H7h3m85vG4myH5nB3bwYg0tIXb2dQtjahFpd3pdGYMS0AtyYwwWUuWLOWdlwYHU5d6e2NimtaC7pLcLJUeAKOOZat4Ifsf5aiH7mjg8GTvklGLRntlZYX0VWOe5GCW+1/MJ4YmIGYxATEBMYsJiAmIWUxATEDMYgLy/7xM6gHVyZO/FR999JFctcy3qJUBPpOIxwfkiioPgsxnmcJYApHHzLENnhrHI5Imu+qg2kNbGld6xyoej3tEH8ZvrDykkc/Hs8fP+1yuEnmQ6MaNG8WGDQ9PLyB8iPTKK6/W4+3vo84Req5ULmvV3V6v+5Tdbr+C963RaIyIPo3ahOo2xnMvZAZKShzNLpfrczCkvbe37ymhLwq6jJqv1scxpv9yOh2XwuHe8Z4akqNPGWOUfUAITrrdJceBR2cs1n/X49+yMr+IRHrF3r2vTz8gZ86c3YmXn1VXVwfUw597FfVMIpEYjFZV+f9e0zKfAZC/raioWOlw2EXWiuuEksz00YGBuOZ2Ww+6XM7D6bT2r7W1dfKQsXwLtZQPrex2xzKfz/9KWVlFBO8zih7j+cjs9vb2IzU1NT7ey2X5RGKAv91dWup71W63/ScErDUcjg63Gwj45eGWbIfaMq0m68svvyw/dOjQT3fu3Bngmn5PT09OpoKmoKvrNs8FDkSj0e+AsN/bunXrShAqbty4kdPzB/YTiYRFR0eHJRrt/QNN8yRnzZqlPffcDyxHjx4FUAN5PfrleG7evEXGVaP6q6tnWAiuOi+LuVinT5/e+eCDD/rWrFkjzp8/L5/TdHS0i7a2dh/6ewr3NHs8ng4IVyqf4w0LBghAmDNjxowaMFMcOXJEShglabyENLXkrR468aldJBJlMm/Ntm3b5NF5zJ8aK+NktIapbHcKQiwWcyWTgzU8//CBBx5wVFVVybaM5OU7y9njLKPza5vNru6jNDD7RahsR/4G2uhCm9/ftWuX1G76TI6zry8mX/v746u9Xu9i0N+Cz0HeU3RAMFAr1++ZOKxOX9Mdc+ld6kmieJ33kFn8DZPF6AzJI+UkdQbQcXplluDo/CwST2awDdWfARKzzy3Ml6KJUN+xXbYRDoel1igwFUMJKmy/CIWCeC/7iqAGRVayFO9raWnZNm/evEU8w/HYsWOyHbYP8yYDke7uYC0AXAO6Tvl83hAA0YoOiDAOflQ1Go3AbIWHGaHOPFSFkktNYCYhTI2iWcvWHjKNGYaUTjKCzFMmTJ0y+tBDD4nVq1fL6E7/HZMx7AORSMQKE0pTKv0LCzRYrF27VvbNk0DZvn5+o57RyLFSmPjcnsCgnEN/14xtASpFCObs5vO7d+8WwWAQWh0ZtgIUAPgPtBmxIMJaX1HhfA+gXENg0D84mCp+2JttRjjQ1tZWSt1lOLiP/P5AUDk0asSJEyf+8PHHH19FXzGWSSORNHs0W3gNud2u96CB16qrZ6Z5P7Xxm2++WQxN++6jjz5qmKSMwRh3R19f70/37dtXD+nXDEamAcByv9+/ZtOmTeLSpUswMX3wU60EAE7bfo7uA/cTcSuYG5w9u+6fAO6Q31827IghPI3o84klS5aIc+fOSQBJDyuZrp8A7uHRsUsBZiP6PY/PACR6fwBR0sLoiCYAkcXnCB/3zppV20bHSAJorkBYHYhYRQIoWbq50dL6mci6LU+nh6TSgMFdVVUzfuF2e44tWrRkOEMD7W8BI7/L9lgdDqf6bQzg/93ixbNCNTV6n9QAmJq/wvs1BI/j1POw0mjL1VFZWfETtP/fCxcuHk6YUyZSaTe19Pr16z94+OGHnfR71BC+sp2FCxdKAeKmII6ltzfmHRhIrIcJ+xj0tSPUHZogXbl4M3UeLMwsdTKFpoOVTg6fXV9//bU8JJnXyCTcx4OIe8dowwqGlELiSlQbNDdghodMOXPmjPQLdMbSE6fTzXo7FgkGK5lmHHI8SiMtit4Sfq/8nzpqVkVWHB/6KEfw8b0NGzbICJBjIADnzzfLe3iAM8HwenW/CYBW4/oiCJufk9R8dpEV1GTdS4NI5LJly/758OHDtTAbPj3asmgzZ1b/GyKU7+NzfS5zhYaGhuMXL1488MYbbyyhpFIjQfgXcLa/gfalAoH8TtQeb/KpAoivvvrqj5YvXz7T0HApGAzvEWrzxGzBA5qZ9kohoXMPBkNz6NwxptPQkjDea986QBQza2trTwCEp69du1oOPnjw3gYmtsEhvpjLcolhQkIrVqzYdeVKSxUmZW7u64Nv6RkcTKZQHRUVM1KFyDLkeKA5PGn7+WeeeUb6NfgIqekMtaEBrfAnJdCgmfPnz5f7TwgaAwsI2DrQ9R7M4nW0E5/sMs60AkIHCHP1x1euXPkbOGIvSLYZ10/x4Olc2qDPATPmnTx58tcAuA6AWmlZ8BqsrJzxYxD/HuYF3QyXp2hypb/q6ur6XUw21yPcFadOnYK5TMpojHtZ/H7fIcyhMh9++OFfMHJsbm6W0RZ9I6ItBBK+RgjLBYAyaUCs02Gq1F4P2mNI0dOYRDY88cSW6oaG+hlw/jNgAjbByVZMODDjrHaCitl9U319/Zpnn3125qJFixDNVpXDDy1EtLMJwPgLtvSN/uDrnmc0RxDor2iuqB0wv0kEHR9j/P/ywQcfDNC08UhyFWgAAF8ikVwHumejTlrQrQUEIg3mJOksBwbicr2Hq50gJMUE6kceeUTuhNLBkknGY9krTd9AKZJ0pKxsB34jxbD5ySefBBPmACSHiozsOS5q3rPQ5MGRM2Nye1NTk3TmHD9DZoID530W2nq2pmbWRcyZ3mc4zZBYAULnDi1ZK/QNqb775kPIF6oneeZw2DZ1dLQv4FqPEZYmQRAlRqo19wwa1zXlPrLdCMDzJJOD6yFpLjBn0FgYSMB5ShNCotVqgGESCpLlp/7hACboTzChDNBM6v/MkIJ2RKVgIJzugGCs5d4iaPc7R48e3f7SSy9J506HzzlJKNQzl84d4H6GNsNFBUStT5EQSiykaRPs7SY1t7jzHMEjidOfM2jj+JoSNeGaGw5HX9dBzpZep5wHXL16VbZT6BRPfSklXQLn/Bw1mc6aIOjzrCG5vxH07YBz34Hb28rLA3+NEPwW7p9N586/26CWQIhs8DXry8vLjuC3/OOXgWIAYlELdiQEEY7QT2Kwjpm+z+84m+ei4qjcZYvazUpiuKmSkzelRSMGCV9Ec4fQd6wTGqasJRQqBB5Pzp07dwkc+vC6Fc1YTU0ttKBKfg4Gu+n06zCeWoBzGPf9KVcDuArMCSkmnNwQtBx+ZjmavUjwigEIJ3UaiLCQEGqAz1cqJgoqaIPVX8Nl/dFNitcIGNtReybGK2rfhj6rv7P4DFz7JlpyV+teWfMPy+jvCXhra+uLXNXlAiYFSK1n8Y9a5FMxaIz+zEX+vCQQ8P36/fff37V9+/YS7mnp7u4yllJiAWjTOtDzqdBPZxiaVkBAfBukJAhJrVLLCPcyIerBklpqsdms/wPmBuFrtrENSOfwluN7PVOJRJLDSxxg5DGMp4errwRFbRClCpPJ6l/n+Nd0XNVNp7UBPlLhxn8lINQCmKgmTDKfeOyxx/j8I2uJ545JY3tqrgM/Eke7x+H4P8HYt2KOJP//kaExLQGc+zIAwjjcMe2AYAYbXrBgwX+8+eabf9nUtFpOmu61bZmEM1qhL4EEDZWVBX4MgGJvvfXWth07dshoJhdgeR8lGDNjrkvtg+86BEYleZ1VAU+NZF80JWSQevYB0NvA6C+4w1RpAX0XANkIX+C8fv269FPqUJvsUJ7Rnt3Y1o/Pn0OrY3Do+99+++2tmzdvlv1T02m6urq6a9BFqxEx5ucPJjOB2bv39dJXX33tNeM5c66hMztqRt2H+qlx7Xuoe/jUM4/uuQ3sIOq/TyB9S1DfRM0+R4VO7LWsvrPLUtR/GHX/eIW//6HQ9wTyGfsvhP53fMOLC6j7YdL+MRqNaXym/qMfvTK9gJw6dVJgtqpi77y3f6kV1qkce5H9RDC/RwbaFE9juLNxc7y+ob2SN5PJOjE37HzLipkoZwJiFhMQExCzmICYgJjFBMQExCwmICYgZjEBMYsJiAmIWUxA/i+U/xVgAF6eQT0ldAmcAAAAAElFTkSuQmCC
// @updateURL   https://github.com/LULPack/CCTA-Legio-Ultima-Pack/raw/master/update.user.js
// @downloadURL https://github.com/LULPack/CCTA-Legio-Ultima-Pack/raw/master/update.user.js
// @grant       none
// ==/UserScript==

// type: /chelp in any text box and hit <enter> for a list of commands


/***************************************************************************************************
***************************************************************************************************/


// ==UserScript==
// @name infernal wrapper
// @description Supplies some wrapper functions for public use 
// @namespace infernal_wrapper
// @include https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version 0.390737.5
// @author infernal_me, KRS_L, krisan
// ==/UserScript==
(function () {
    var CCTAWrapper_main = function () {
        try {
            _log = function () {
                if (typeof console != 'undefined') console.log(arguments);
                else if (window.opera) opera.postError(arguments);
                else GM_log(arguments);
            }

            function createCCTAWrapper() {
                console.log('CCTAWrapper loaded');
                _log('wrapper loading' + PerforceChangelist);
                System = $I;
                SharedLib = $I;
                var strFunction;
                
                // SharedLib.Combat.CbtSimulation.prototype.DoStep
                for (var x in $I) {
                    for (var key in $I[x].prototype) {
                        if ($I[x].prototype.hasOwnProperty(key) && typeof($I[x].prototype[key]) === 'function') {  // reduced iterations from 20K to 12K
                            strFunction = $I[x].prototype[key].toString();
                            if (strFunction.indexOf("().l;var b;for (var d = 0 ; d < c.length ; d++){b = c[d];if((b.") > -1) {
                                $I[x].prototype.DoStep = $I[x].prototype[key];
                                console.log("SharedLib.Combat.CbtSimulation.prototype.DoStep = $I." + x + ".prototype." + key);
                                break;
                            }
                        }
                    }
                }

                // ClientLib.Data.CityRepair.prototype.CanRepair
                for (var key in ClientLib.Data.CityRepair.prototype) {
                    if (typeof ClientLib.Data.CityRepair.prototype[key] === 'function') {
                        strFunction = ClientLib.Data.CityRepair.prototype[key].toString();
                        if (strFunction.indexOf("DefenseSetup") > -1 && strFunction.indexOf("DamagedEntity") > -1) {  // order important to reduce iterations
                            ClientLib.Data.CityRepair.prototype.CanRepair = ClientLib.Data.CityRepair.prototype[key];
                            console.log("ClientLib.Data.CityRepair.prototype.CanRepair = ClientLib.Data.CityRepair.prototype." + key);
                            break;
                        }
                    }
                }

                // ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost
                for (var key in ClientLib.Data.CityRepair.prototype) {
                    if (typeof ClientLib.Data.CityRepair.prototype[key] === 'function') {
                        strFunction = ClientLib.Data.CityRepair.prototype[key].toString();
                        if (strFunction.indexOf("Type==7") > -1 && strFunction.indexOf("var a=0;if") > -1) {  // order important to reduce iterations
                            ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost = ClientLib.Data.CityRepair.prototype[key];
                            console.log("ClientLib.Data.CityRepair.prototype.UpdateCachedFullRepairAllCost = ClientLib.Data.CityRepair.prototype." + key);
                            break;
                        }
                    }
                }

                // ClientLib.Data.CityUnits.prototype.get_OffenseUnits
                strFunction = ClientLib.Data.CityUnits.prototype.HasUnitMdbId.toString();
                var searchString = "for (var b in {d:this.";
                var startPos = strFunction.indexOf(searchString) + searchString.length;
                var fn_name = strFunction.slice(startPos, startPos + 6);
                strFunction = "var $createHelper;return this." + fn_name + ";";
                var fn = Function('', strFunction);
                ClientLib.Data.CityUnits.prototype.get_OffenseUnits = fn;
                console.log("ClientLib.Data.CityUnits.prototype.get_OffenseUnits = function(){var $createHelper;return this." + fn_name + ";}");

                // ClientLib.Data.CityUnits.prototype.get_DefenseUnits
                strFunction = ClientLib.Data.CityUnits.prototype.HasUnitMdbId.toString();
                searchString = "for (var c in {d:this.";
                startPos = strFunction.indexOf(searchString) + searchString.length;
                fn_name = strFunction.slice(startPos, startPos + 6);
                strFunction = "var $createHelper;return this." + fn_name + ";";
                fn = Function('', strFunction);
                ClientLib.Data.CityUnits.prototype.get_DefenseUnits = fn;
                console.log("ClientLib.Data.CityUnits.prototype.get_DefenseUnits = function(){var $createHelper;return this." + fn_name + ";}");

                // ClientLib.Vis.Battleground.Battleground.prototype.get_Simulation
                strFunction = ClientLib.Vis.Battleground.Battleground.prototype.StartBattle.toString();
                searchString = "=0;for(var a=0; (a<9); a++){this.";
                startPos = strFunction.indexOf(searchString) + searchString.length;
                fn_name = strFunction.slice(startPos, startPos + 6);
                strFunction = "return this." + fn_name + ";";
                fn = Function('', strFunction);
                ClientLib.Vis.Battleground.Battleground.prototype.get_Simulation = fn;
                console.log("ClientLib.Vis.Battleground.Battleground.prototype.get_Simulation = function(){return this." + fn_name + ";}");

                // GetNerfBoostModifier
                if (typeof ClientLib.Vis.Battleground.Battleground.prototype.GetNerfAndBoostModifier == 'undefined') ClientLib.Vis.Battleground.Battleground.prototype.GetNerfAndBoostModifier = ClientLib.Base.Util.GetNerfAndBoostModifier;

                _log('wrapper loaded');
            }
        } catch (e) {
            console.log("createCCTAWrapper: ", e);
        }

        function CCTAWrapper_checkIfLoaded() {
            try {
                if (typeof qx !== 'undefined') {
                    createCCTAWrapper();
                } else {
                    window.setTimeout(CCTAWrapper_checkIfLoaded, 1000);
                }
            } catch (e) {
                CCTAWrapper_IsInstalled = false;
                console.log("CCTAWrapper_checkIfLoaded: ", e);
            }
        }

        if (/commandandconquer\.com/i.test(document.domain)) {
            window.setTimeout(CCTAWrapper_checkIfLoaded, 1000);
        }
    }

    try {
        var CCTAWrapper = document.createElement("script");
        CCTAWrapper.innerHTML = "var CCTAWrapper_IsInstalled = true; (" + CCTAWrapper_main.toString() + ")();";
        CCTAWrapper.type = "text/javascript";
        if (/commandandconquer\.com/i.test(document.domain)) {
            document.getElementsByTagName("head")[0].appendChild(CCTAWrapper);
        }
    } catch (e) {
        console.log("CCTAWrapper: init error: ", e);
    }
})();


// ==UserScript==
// @name        MaelstromTools Dev
// @namespace   MaelstromTools
// @description Just a set of statistics & summaries about repair time and base resources. Mainly for internal use, but you are free to test and comment it.
// @version     0.1.3.2
// @author      Maelstrom, HuffyLuf, KRS_L and Krisan
// @include     http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// ==/UserScript==
//var offense_units = own_city.get_CityArmyFormationsManager().GetFormationByTargetBaseId(current_city.get_Id()).get_ArmyUnits().l;
//System.Int64 GetForumIdByType (ClientLib.Data.Forum.EForumType eForumType)
//static ClientLib.Data.Forum.EForumType NormalForum
//System.Collections.Generic.List$1 get_ForumsAlliance ()
//System.Void CreateThread (System.Int64 forumId ,System.String threadTitle ,System.String threadPost ,System.Boolean autoSubscribe)
//System.Void CreatePost (System.Int64 forumId ,System.Int64 threadId ,System.String postMessage)
//System.Void StartGetForumThreadData (System.Int64 forumId ,System.Int32 skip ,System.Int32 take)
//System.Void OnForumThreadDataReceived (System.Object context ,System.Object result)
//System.Void add_ThreadsFetched (ClientLib.Data.ForumThreadsFetched value)
//System.Void MarkThreadsAsRead (System.Int64 forumId ,System.Int64[] threadIds)
//
//var score = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(lvl);
//var scoreNext = ClientLib.Base.PointOfInterestTypes.GetNextScore(score);
//var resBonus = ClientLib.Base.PointOfInterestTypes.GetBonusByType(ClientLib.Base.EPOIType.TiberiumBonus, score);
//var unitBonus = ClientLib.Base.PointOfInterestTypes.GetBonusByType(ClientLib.Base.EPOIType.InfanteryBonus, score);
//console.log("POI lvl" + lvl + "gives " + score + "points, next lvl at " + scoreNext + " points. Resource bonus: " + resBonus + " Unit bonus: " + unitBonus + "%");
/*
 ClientLib.Data.Player
 get_ResearchPoints
 GetCreditsCount
 GetCreditsGrowth
ClientLib.Data.PlayerResearch get_PlayerResearch ()
ClientLib.Data.PlayerResearchItem GetResearchItemFomMdbId (System.Int32 _mdbId)
ClientLib.Data.PlayerResearchItem.System.Object get_NextLevelInfo_Obj ()

var cw=ClientLib.Data.MainData.GetInstance().get_Player().get_Faction();
var cj=ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Research_BaseFound,cw);
var cd=cr.GetResearchItemFomMdbId(cj);
 */
(function () {
  var MaelstromTools_main = function () {
    try {
      function CCTAWrapperIsInstalled() {
        return (typeof (CCTAWrapper_IsInstalled) != 'undefined' && CCTAWrapper_IsInstalled);
      }

      function createMaelstromTools() {
        console.log('MaelstromTools loaded');

        qx.Class.define("MaelstromTools.Language", {
          type: "singleton",
          extend: qx.core.Object,
          construct: function (language) {
            this.Languages = ['de', 'pt', 'fr', 'tr']; // en is default, not needed in here!
            if (language != null) {
              this.MyLanguage = language;
            }
          },
          members: {
            MyLanguage: "en",
            Languages: null,
            Data: null,

            loadData: function (language) {
              var l = this.Languages.indexOf(language);

              if (l < 0) {
                this.Data = null;
                return;
              }

              this.Data = new Object();
              this.Data["Collect all packages"] = ["Alle Pakete einsammeln", "Recolher todos os pacotes", "Récupérez tous les paquets", "Tüm paketleri topla"][l];
              this.Data["Overall production"] = ["Produktionsübersicht", "Produção global", "La production globale", "Genel üretim"][l];
              this.Data["Army overview"] = ["Truppenübersicht", "Vista Geral de Exército", "Armée aperçu", "Ordu önizlemesi"][l];
              this.Data["Base resources"] = ["Basis Ressourcen", "Recursos base", "ressources de base", "Üs önizlemesi"][l];
              this.Data["Main menu"] = ["Hauptmenü", "Menu Principal", "menu principal", "Ana menü"][l];
              this.Data["Repair all units"] = ["Alle Einheiten reparieren", "Reparar todas as unidades", "Réparer toutes les unités", "Tüm üniteleri onar"][l];
              this.Data["Repair all defense buildings"] = ["Alle Verteidigungsgebäude reparieren", "Reparar todos os edifícios de defesa", "Réparer tous les bâtiments de défense", "Tüm savunma binalarini onar"][l];
              this.Data["Repair all buildings"] = ["Alle Gebäurde reparieren", "Reparar todos os edifícios", "Réparer tous les bâtiments", "Tüm binalari onar"][l];
              this.Data["Base status overview"] = ["Basisübersicht", "Estado geral da base", "aperçu de l'état de base", "Üs durumu önizlemesi"][l];
              this.Data["Upgrade priority overview"] = ["Upgrade Übersicht", "Prioridade de upgrades", "aperçu des priorités de mise à niveau", "Yükseltme önceligi önizlemesi"][l];
              this.Data["MaelstromTools Preferences"] = ["MaelstromTools Einstellungen", "Preferências de MaelstromTools", "Préférences MaelstromTools", "MaelstromTools Ayarlari"][l];
              this.Data["Options"] = ["Einstellungen", "Opções", "Options", "Seçenekler"][l];
              this.Data["Target out of range, no resource calculation possible"] = ["Ziel nicht in Reichweite, kann die plünderbaren Ressourcen nicht berechnen", "Alvo fora do alcance, não é possivel calcular os recursos", "Cible hors de portée, pas de calcul de ressources possible",
			  "Hedef menzil disinda, kaynak hesaplamasi olanaksiz"][l];
              this.Data["Lootable resources"] = ["Plünderbare Ressourcen", "Recursos roubáveis", "Ressources à piller", "Yagmalanabilir kaynaklar"][l];
              this.Data["per CP"] = ["pro KP", "por PC", "par PC", "KP basina"][l];
              this.Data["2nd run"] = ["2. Angriff", "2º ataque", "2° attaque", "2. saldiri"][l];
              this.Data["3rd run"] = ["3. Angriff", "3º ataque", "3° attaque", "3. saldiri"][l];
              this.Data["Calculating resources..."] = ["Berechne plünderbare Ressourcen...", "A calcular recursos...", "calcul de ressources ...", "Kaynaklar hesaplaniyor..."][l];
              this.Data["Next MCV"] = ["MBF", "MCV", "VCM"][l];
              this.Data["Show time to next MCV"] = ["Zeige Zeit bis zum nächsten MBF", "Mostrar tempo restante até ao próximo MCV", "Afficher l'heure pour le prochain VCM ", "Sirdaki MCV için gereken süreyi göster"][l];
              this.Data["Show lootable resources (restart required)"] = ["Zeige plünderbare Ressourcen (Neustart nötig)", "Mostrar recursos roubáveis (é necessário reiniciar)", "Afficher les ressources fouiller (redémarrage nécessaire)", "Yagmalanabilir kaynaklari göster (yeniden baslatma gerekli)"][l];
              this.Data["Use dedicated Main Menu (restart required)"] = ["Verwende extra Hauptmenü (Neustart nötig)", "Usar botão para o Menu Principal (é necessário reiniciar)", "Utiliser dédiée du menu principal (redémarrage nécessaire)", "Ana menü tusunu kullan (yeniden baslatma gerekli)"][l];
              this.Data["Autocollect packages"] = ["Sammle Pakete automatisch", "Auto recolher pacotes", "paquets autocollecté", "Paketleri otomatik topla"][l];
              this.Data["Autorepair units"] = ["Repariere Einheiten automatisch", "Auto reparar o exército", "unités autoréparé", "Üniteleri otomatik onar"][l];
              this.Data["Autorepair defense (higher prio than buildings)"] = ["Repariere Verteidigung automatisch (höhere Prio als Gebäude)", "Auto reparar defesa (maior prioridade do que os edifícios)", "réparation automatique la défense (priorité plus élevé que les bâtiments) ", "Savunmayi otomatik onar (binalardan daha yüksek öncelikli olarak)"][l];
              this.Data["Autorepair buildings"] = ["Repariere Gebäude automatisch", "Auto reparar edifícios", "bâtiments autoréparé", "Binalari otomatik onar"][l];
              this.Data["Automatic interval in minutes"] = ["Auto-Intervall in Minuten", "Intervalo de tempo automático (em minutos)", "intervalle automatique en quelques minutes", "Otomatik toplama araligi (dk)"][l];
              this.Data["Apply changes"] = ["Speichern", "Confirmar", "Appliquer changements", "Uygula"][l];
              this.Data["Discard changes"] = ["Abbrechen", "Cancelar", "Annuler changements", "Iptal"][l];
              this.Data["Reset to default"] = ["Auf Standard zurücksetzen", "Definições padrão", "Réinitialiser", "Sifirla"][l];
              this.Data["Continuous"] = ["Kontinuierlich", "Contínua", "continue", "Sürekli"][l];
              this.Data["Bonus"] = ["Pakete", "Bónus", "Bonus", "Bonus"][l];
              this.Data["POI"] = ["POI", "POI", "POI", "POI"][l];
              this.Data["Total / h"] = ["Gesamt / h", "Total / h", "Total / h", "Toplam / sa."][l];
              this.Data["Repaircharges"] = ["Reparaturzeiten", "Custo de reparação", "frais de réparation", "Onarim maliyeti"][l];
              this.Data["Repairtime"] = ["Max. verfügbar", "Tempo de reparação", "Temps de réparation", "Onarim süresi"][l];
              this.Data["Attacks"] = ["Angriffe", "Ataques", "Attaques", "Saldirilar"][l];
              this.Data[MaelstromTools.Statics.Infantry] = ["Infanterie", "Infantaria", "Infanterie", "Piyade"][l];
              this.Data[MaelstromTools.Statics.Vehicle] = ["Fahrzeuge", "Veículos", "Vehicule", "Motorlu B."][l];
              this.Data[MaelstromTools.Statics.Aircraft] = ["Flugzeuge", "Aeronaves", "Aviation", "Hava A."][l];
              this.Data[MaelstromTools.Statics.Tiberium] = ["Tiberium", "Tibério", "Tiberium", "Tiberium"][l];
              this.Data[MaelstromTools.Statics.Crystal] = ["Kristalle", "Cristal", "Cristal", "Kristal"][l];
              this.Data[MaelstromTools.Statics.Power] = ["Strom", "Potência", "Energie", "Güç"][l];
              this.Data[MaelstromTools.Statics.Dollar] = ["Credits", "Créditos", "Crédit", "Kredi"][l];
              this.Data[MaelstromTools.Statics.Research] = ["Forschung", "Investigação", "Recherche", "Arastirma"][l];
              this.Data["Base"] = ["Basis", "Base", "Base", "Üs"][l];
              this.Data["Defense"] = ["Verteidigung", "Defesa", "Défense", "Savunma"][l];
              this.Data["Army"] = ["Armee", "Exército", "Armée", "Ordu"][l];
              this.Data["Level"] = ["Stufe", "Nível", "Niveau", "Seviye"][l];
              this.Data["Buildings"] = ["Gebäude", "Edifícios", "Bâtiments", "Binalar"][l];
              this.Data["Health"] = ["Leben", "Vida", "Santé", "Saglik"][l];
              this.Data["Units"] = ["Einheiten", "Unidades", "Unités", "Üniteler"][l];
              this.Data["Hide Mission Tracker"] = ["Missionsfenster ausblenden", "Esconder janela das Missões", "Cacher la fenêtre de mission", "Görev Izleyicisini Gizle"][l];
              this.Data["none"] = ["keine", "nenhum", "aucun", "hiçbiri"][l];
              this.Data["Cooldown"] = ["Cooldown", "Relocalização", "Recharge", "Cooldown"][l];
              this.Data["Protection"] = ["Geschützt bis", "Protecção", "Protection", "Koruma"][l];
              this.Data["Available weapon"] = ["Verfügbare Artillerie", "Apoio disponível", "arme disponible", "Mevcut silah"][l];
              this.Data["Calibrated on"] = ["Kalibriert auf", "Calibrado em", "Calibré sur ", "Kalibreli"][l];
              this.Data["Total resources"] = ["Gesamt", "Total de recursos", "Ressources totales", "Toplam kaynaklar"][l];
              this.Data["Max. storage"] = ["Max. Kapazität", "Armazenamento Máx.", "Max. de stockage", "Maks. Depo"][l];
              this.Data["Storage full!"] = ["Lager voll!", "Armazenamento cheio!", "Stockage plein", "Depo dolu!"][l];
              this.Data["Storage"] = ["Lagerstand", "Armazenamento", "Stockage", "Depo"][l];
              this.Data["display only top buildings"] = ["Nur Top-Gebäude anzeigen", "Mostrar apenas melhores edifícios", "afficher uniquement les bâtiments principaux", "yalnizca en iyi binalari göster"][l];
              this.Data["display only affordable buildings"] = ["Nur einsetzbare Gebäude anzeigen", "Mostrar apenas edíficios acessíveis", "afficher uniquement les bâtiments abordables", "yalnizca satin alinabilir binalari göster"][l];
              this.Data["City"] = ["Stadt", "Base", "Base", "Sehir"][l];
              this.Data["Type (coord)"] = ["Typ (Koord.)", "Escrever (coord)", "Type (coord)", "Tip (koord.)"][l];
              this.Data["to Level"] = ["Auf Stufe", "para nível", "à Niveau ", "Seviye için"][l];
              this.Data["Gain/h"] = ["Zuwachs/h", "Melhoria/h", "Gain / h", "Kazanç / sa."][l];
              this.Data["Factor"] = ["Faktor", "Factor", "Facteur", "Faktör"][l];
              this.Data["Tib/gain"] = ["Tib./Zuwachs", "Tib/melhoria", "Tib / gain", "Tib/Kazanç"][l];
              this.Data["Pow/gain"] = ["Strom/Zuwachs", "Potencia/melhoria", "Puissance / Gain", "Güç/Kazanç"][l];
              this.Data["ETA"] = ["Verfügbar in", "Tempo restante", "Temps restant", "Kalan Zaman"][l];
              this.Data["Upgrade"] = ["Aufrüsten", "Upgrade", "Upgrade", "Yükselt"][l];
              this.Data["Powerplant"] = ["Kratfwerk", "Central de Energia", "Centrale", "Güç Santrali"][l];
              this.Data["Refinery"] = ["Raffinerie", "Refinaria", "Raffinerie", "Rafineri"][l];
              this.Data["Harvester"] = ["Sammler", "Harvester", "Collecteur", "Biçerdöver"][l];
              this.Data["Silo"] = ["Silo", "Silo", "Silo", "Silo"][l];
              this.Data["Accumulator"] = ["Akkumulator", "Acumulador", "Accumulateur", "Akümülatör"][l];
              this.Data["Calibrate support"] = ["Artillerie kalibrieren", "Calibrar apoio", "Calibrer soutien", "Takviyeyi kalibre et"][l];
              this.Data["Access"] = ["Öffne", "Aceder", "Accès ", "Aç"][l];
              this.Data["Focus on"] = ["Zentriere auf", "Concentrar em", "Centré sur", "Odaklan"][l];
              this.Data["Possible attacks from this base (available CP)"] = ["Mögliche Angriffe (verfügbare KP)", "Possible attacks from this base (available CP)","Possible attacks from this base (available CP)", "Bu üsten yapilmasi mümkün olan saldirilar (mevcut KP)"][l];
              //this.Data[""] = [""][l];
            },
            get: function (ident) {
              return this.gt(ident);
            },
            gt: function (ident) {
              if (!this.Data || !this.Data[ident]) {
                /*if(!parseInt(ident.substr(0, 1), 10) && ident != "0") {
                  console.log("missing language data: " + ident);
                }*/
                return ident;
              }
              return this.Data[ident];
            }
          }
        }),

        // define Base
        qx.Class.define("MaelstromTools.Base", {
          type: "singleton",
          extend: qx.core.Object,
          members: {
            /* Desktop */
            timerInterval: 1500,
            mainTimerInterval: 5000,
            lootStatusInfoInterval: null,
            images: null,
            mWindows: null,
            mainMenuWindow: null,

            itemsOnDesktop: null,
            itemsOnDesktopCount: null,
            itemsInMainMenu: null,
            itemsInMainMenuCount: null,
            buttonCollectAllResources: null,
            buttonRepairAllUnits: null,
            buttonRepairAllBuildings: null,

            lootWidget: null,

            initialize: function () {
              try {
                //console.log(qx.locale.Manager.getInstance().getLocale());
                Lang.loadData(qx.locale.Manager.getInstance().getLocale());
                //console.log("Client version: " + MaelstromTools.Wrapper.GetClientVersion());
                this.itemsOnDesktopCount = new Array();
                this.itemsOnDesktop = new Object();
                this.itemsInMainMenuCount = new Array();
                this.itemsInMainMenu = new Object();

                var fileManager = ClientLib.File.FileManager.GetInstance();
                //ui/icons/icon_mainui_defense_button
                //ui/icons/icon_mainui_base_button
                //ui/icons/icon_army_points
                //icon_def_army_points
                var factionText = ClientLib.Base.Util.GetFactionGuiPatchText();
                this.createNewImage(MaelstromTools.Statics.Tiberium, "ui/common/icn_res_tiberium.png", fileManager);
                this.createNewImage(MaelstromTools.Statics.Crystal, "ui/common/icn_res_chrystal.png", fileManager);
                this.createNewImage(MaelstromTools.Statics.Power, "ui/common/icn_res_power.png", fileManager);
                this.createNewImage(MaelstromTools.Statics.Dollar, "ui/common/icn_res_dollar.png", fileManager);
                this.createNewImage(MaelstromTools.Statics.Research, "ui/common/icn_res_research.png", fileManager);
                this.createNewImage("Sum", "ui/common/icn_build_slots.png", fileManager);
                this.createNewImage("AccessBase", "ui/" + factionText + "/icons/icon_mainui_enterbase.png", fileManager);
                this.createNewImage("FocusBase", "ui/" + factionText + "/icons/icon_mainui_focusbase.png", fileManager);
                this.createNewImage("Packages", "ui/" + factionText + "/icons/icon_collect_packages.png", fileManager);
                this.createNewImage("RepairAllUnits", "ui/" + factionText + "/icons/icon_army_points.png", fileManager);
                this.createNewImage("RepairAllBuildings", "ui/" + factionText + "/icons/icn_build_slots.png", fileManager);
                this.createNewImage("ResourceOverviewMenu", "ui/common/icn_res_chrystal.png", fileManager);
                this.createNewImage("ProductionMenu", "ui/" + factionText + "/icons/icn_build_slots.png", fileManager);
                this.createNewImage("RepairTimeMenu", "ui/" + factionText + "/icons/icon_repair_all_button.png", fileManager);
                this.createNewImage("Crosshair", "ui/icons/icon_support_tnk_white.png", fileManager);
                this.createNewImage("UpgradeBuilding", "ui/" + factionText + "/icons/icon_building_detail_upgrade.png", fileManager);

                this.createNewWindow("MainMenu", "R", 125, 140, 120, 100, "B");
                this.createNewWindow("Production", "L", 120, 60, 340, 140);
                this.createNewWindow("RepairTime", "L", 120, 60, 340, 140);
                this.createNewWindow("ResourceOverview", "L", 120, 60, 340, 140);
                this.createNewWindow("BaseStatusOverview", "L", 120, 60, 340, 140);
                this.createNewWindow("Preferences", "L", 120, 60, 440, 140);
                this.createNewWindow("UpgradePriority", "L", 120, 60, 870, 400);

                if (!this.mainMenuWindow) {
                  this.mainMenuWindow = new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({
                    //backgroundColor: "#303030",
                    padding: 5,
                    paddingRight: 0
                  });
                  if (MT_Preferences.Settings.useDedicatedMainMenu) {
                    this.mainMenuWindow.setPlaceMethod("mouse");
                    this.mainMenuWindow.setPosition("top-left");
                  } else {
                    this.mainMenuWindow.setPlaceMethod("widget");
                    this.mainMenuWindow.setPosition("bottom-right");
                    this.mainMenuWindow.setAutoHide(false);
                    this.mainMenuWindow.setBackgroundColor("transparent");
                    this.mainMenuWindow.setShadow(null);
                    this.mainMenuWindow.setDecorator(new qx.ui.decoration.Background());
                  }
                }

                var desktopPositionModifier = 0;

                this.buttonCollectAllResources = this.createDesktopButton(Lang.gt("Collect all packages"), "Packages", true, this.desktopPosition(desktopPositionModifier));
                this.buttonCollectAllResources.addListener("execute", this.collectAllPackages, this);

                var openProductionWindowButton = this.createDesktopButton(Lang.gt("Overall production"), "ProductionMenu", false, this.desktopPosition(desktopPositionModifier));
                openProductionWindowButton.addListener("execute", function () {
                  window.MaelstromTools.Production.getInstance().openWindow("Production", Lang.gt("Overall production"));
                }, this);

                var openResourceOverviewWindowButton = this.createDesktopButton(Lang.gt("Base resources"), "ResourceOverviewMenu", false, this.desktopPosition(desktopPositionModifier));
                openResourceOverviewWindowButton.addListener("execute", function () {
                  window.MaelstromTools.ResourceOverview.getInstance().openWindow("ResourceOverview", Lang.gt("Base resources"));
                }, this);

                desktopPositionModifier++;
                var openMainMenuButton = this.createDesktopButton(Lang.gt("Main menu"), "ProductionMenu", false, this.desktopPosition(desktopPositionModifier));
                openMainMenuButton.addListener("click", function (e) {
                  this.mainMenuWindow.placeToMouse(e);
                  this.mainMenuWindow.show();
                }, this);

                this.buttonRepairAllUnits = this.createDesktopButton(Lang.gt("Repair all units"), "RepairAllUnits", true, this.desktopPosition(desktopPositionModifier));
                this.buttonRepairAllUnits.addListener("execute", this.repairAllUnits, this);

                this.buttonRepairAllBuildings = this.createDesktopButton(Lang.gt("Repair all buildings"), "RepairAllBuildings", true, this.desktopPosition(desktopPositionModifier));
                this.buttonRepairAllBuildings.addListener("execute", this.repairAllBuildings, this);

                var openRepairTimeWindowButton = this.createDesktopButton(Lang.gt("Army overview"), "RepairTimeMenu", false, this.desktopPosition(desktopPositionModifier));
                openRepairTimeWindowButton.addListener("execute", function () {
                  window.MaelstromTools.RepairTime.getInstance().openWindow("RepairTime", Lang.gt("Army overview"));
                }, this);

                var openBaseStatusOverview = this.createDesktopButton(Lang.gt("Base status overview"), "Crosshair", false, this.desktopPosition(desktopPositionModifier));
                openBaseStatusOverview.addListener("execute", function () {
                  window.MaelstromTools.BaseStatus.getInstance().openWindow("BaseStatusOverview", Lang.gt("Base status overview"));
                }, this);

                desktopPositionModifier++;
                var openHuffyUpgradeOverview = this.createDesktopButton(Lang.gt("Upgrade priority overview"), "UpgradeBuilding", false, this.desktopPosition(desktopPositionModifier));
                openHuffyUpgradeOverview.addListener("execute", function () {
                  window.HuffyTools.UpgradePriorityGUI.getInstance().openWindow("UpgradePriority", Lang.gt("Upgrade priority overview"));
                }, this);

                desktopPositionModifier++;
                var preferencesButton = new qx.ui.form.Button(Lang.gt("Options")).set({
                  appearance: "button-text-small",
                  width: 100,
                  minWidth: 100,
                  maxWidth: 100
                });
                preferencesButton.setUserData("desktopPosition", this.desktopPosition(desktopPositionModifier));
                preferencesButton.addListener("execute", function () {
                  window.MaelstromTools.Preferences.getInstance().openWindow("Preferences", Lang.gt("MaelstromTools Preferences"), true);
                }, this);

                if (MT_Preferences.Settings.useDedicatedMainMenu) {
                  this.addToDesktop("MainMenu", openMainMenuButton);
                }
                this.addToMainMenu("ResourceOverviewMenu", openResourceOverviewWindowButton);
                this.addToMainMenu("ProductionMenu", openProductionWindowButton);
                this.addToMainMenu("BaseStatusMenu", openBaseStatusOverview);
                this.addToMainMenu("RepairTimeMenu", openRepairTimeWindowButton);
                this.addToMainMenu("UpgradeBuilding", openHuffyUpgradeOverview);

                this.addToMainMenu("PreferencesMenu", preferencesButton);

                if (!MT_Preferences.Settings.useDedicatedMainMenu) {
                  this.mainMenuWindow.show();
                  var target = qx.core.Init.getApplication().getOptionsBar(); //getServerBar(); //qx.core.Init.getApplication().getUIItem(ClientLib.Data.Missions.PATH.BAR_APPOINTMENTS);
                  this.mainMenuWindow.placeToWidget(target, true);
                }

                webfrontend.gui.chat.ChatWidget.recvbufsize = MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.CHATHISTORYLENGTH, 64);
                this.runSecondlyTimer();
                this.runMainTimer();
                this.runAutoCollectTimer();
              } catch (e) {
                console.log("MaelstromTools.initialize: ", e);
              }
            },

            desktopPosition: function (modifier) {
              if (!modifier) modifier = 0;
              return modifier;
            },

            createDesktopButton: function (title, imageName, isNotification, desktopPosition) {
              try {
                if (!isNotification) {
                  isNotification = false;
                }
                if (!desktopPosition) {
                  desktopPosition = this.desktopPosition();
                }
                var desktopButton = new qx.ui.form.Button(null, this.images[imageName]).set({
                  toolTipText: title,
                  width: 50,
                  height: 40,
                  maxWidth: 50,
                  maxHeight: 40,
                  appearance: (isNotification ? "button-standard-nod" : "button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
                  center: true
                });

                desktopButton.setUserData("isNotification", isNotification);
                desktopButton.setUserData("desktopPosition", desktopPosition);
                return desktopButton;
              } catch (e) {
                console.log("MaelstromTools.createDesktopButton: ", e);
              }
            },

            createNewImage: function (name, path, fileManager) {
              try {
                if (!this.images) {
                  this.images = new Object();
                }
                if (!fileManager) {
                  return;
                }

                this.images[name] = fileManager.GetPhysicalPath(path);
              } catch (e) {
                console.log("MaelstromTools.createNewImage: ", e);
              }
            },

            createNewWindow: function (name, align, x, y, w, h, alignV) {
              try {
                if (!this.mWindows) {
                  this.mWindows = new Object();
                }
                this.mWindows[name] = new Object();
                this.mWindows[name]["Align"] = align;
                this.mWindows[name]["AlignV"] = alignV;
                this.mWindows[name]["x"] = x;
                this.mWindows[name]["y"] = y;
                this.mWindows[name]["w"] = w;
                this.mWindows[name]["h"] = h;
              } catch (e) {
                console.log("MaelstromTools.createNewWindow: ", e);
              }
            },

            addToMainMenu: function (name, button) {
              try {
                /*if(!this.useDedicatedMainMenu) {
                  return;
                }*/
                if (this.itemsInMainMenu[name] != null) {
                  return;
                }
                var desktopPosition = button.getUserData("desktopPosition");
                var isNotification = button.getUserData("isNotification");
                if (!desktopPosition) {
                  desktopPosition = this.desktopPosition();
                }
                if (!isNotification) {
                  isNotification = false;
                }

                if (isNotification && MT_Preferences.Settings.useDedicatedMainMenu) {
                  this.addToDesktop(name, button);
                } else {
                  if (!this.itemsInMainMenuCount[desktopPosition]) {
                    this.itemsInMainMenuCount[desktopPosition] = 0;
                  }
                  this.mainMenuWindow.add(button, {
                    right: 5 + (52 * this.itemsInMainMenuCount[desktopPosition]),
                    top: 0 + (42 * (desktopPosition)) //bottom: 0 - (42 * (desktopPosition - 1))
                  });

                  this.itemsInMainMenu[name] = button;
                  this.itemsInMainMenuCount[desktopPosition]++;
                }
              } catch (e) {
                console.log("MaelstromTools.addToMainMenu: ", e);
              }
            },

            removeFromMainMenu: function (name, rearrange) {
              try {
                if (rearrange == null) {
                  rearrange = true;
                }
                if (this.itemsOnDesktop[name] != null) {
                  var isNotification = this.itemsOnDesktop[name].getUserData("isNotification");
                  if (!isNotification) {
                    isNotification = false;
                  }
                  if (isNotification && MT_Preferences.Settings.useDedicatedMainMenu) {
                    this.removeFromDesktop(name, rearrange);
                  }
                } else if (this.itemsInMainMenu[name] != null) {
                  var desktopPosition = this.itemsInMainMenu[name].getUserData("desktopPosition");
                  var isNotification = this.itemsInMainMenu[name].getUserData("isNotification");
                  if (!desktopPosition) {
                    desktopPosition = this.desktopPosition();
                  }
                  if (!isNotification) {
                    isNotification = false;
                  }

                  this.mainMenuWindow.remove(this.itemsInMainMenu[name]);
                  this.itemsInMainMenu[name] = null;
                  this.itemsInMainMenuCount[desktopPosition]--;

                  if (rearrange && this.itemsInMainMenu[desktopPosition] > 1) {
                    var tmpItems = new Object();
                    // remove notifications 
                    for (var itemName in this.itemsOnDesktop) {
                      if (this.itemsInMainMenu[itemName] == null) {
                        continue;
                      }
                      if (!isNotification) {
                        continue;
                      }
                      tmpItems[itemName] = this.itemsInMainMenu[itemName];
                      this.removeFromMainMenu(itemName, false);
                    }
                    // rearrange notifications
                    for (var itemName2 in tmpItems) {
                      var tmp = tmpItems[itemName2];
                      if (tmp == null) {
                        continue;
                      }
                      this.addToMainMenu(itemName2, tmp);
                    }
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.removeFromDesktop: ", e);
              }
            },

            addToDesktop: function (name, button) {
              try {
                if (this.itemsOnDesktop[name] != null) {
                  return;
                }
                var desktopPosition = button.getUserData("desktopPosition");
                if (!desktopPosition) {
                  desktopPosition = this.desktopPosition();
                }

                if (!this.itemsOnDesktopCount[desktopPosition]) {
                  this.itemsOnDesktopCount[desktopPosition] = 0;
                }

                var app = qx.core.Init.getApplication();
                //var navBar = app.getNavigationBar();

                // console.log("add to Desktop at pos: " + this.itemsOnDesktopCount);
                app.getDesktop().add(button, {
                  //right: navBar.getBounds().width + (52 * this.itemsOnDesktopCount[desktopPosition]),
                  //top: 42 * (desktopPosition - 1)
                  right: 5 + (52 * this.itemsOnDesktopCount[desktopPosition]),
                  //top: this.initialAppointmentBarHeight + 125 + (42 * (desktopPosition - 1))
                  bottom: 140 - (42 * (desktopPosition - 1))
                });

                this.itemsOnDesktop[name] = button;
                this.itemsOnDesktopCount[desktopPosition]++;
              } catch (e) {
                console.log("MaelstromTools.addToDesktop: ", e);
              }
            },

            removeFromDesktop: function (name, rearrange) {
              try {
                if (rearrange == null) {
                  rearrange = true;
                }
                var app = qx.core.Init.getApplication();

                if (this.itemsOnDesktop[name] != null) {
                  var desktopPosition = this.itemsOnDesktop[name].getUserData("desktopPosition");
                  var isNotification = this.itemsOnDesktop[name].getUserData("isNotification");
                  if (!desktopPosition) {
                    desktopPosition = this.desktopPosition();
                  }
                  if (!isNotification) {
                    isNotification = false;
                  }

                  app.getDesktop().remove(this.itemsOnDesktop[name]);
                  this.itemsOnDesktop[name] = null;
                  this.itemsOnDesktopCount[desktopPosition]--;

                  if (rearrange && this.itemsOnDesktopCount[desktopPosition] > 1) {
                    var tmpItems = new Object();
                    // remove notifications 
                    for (var itemName in this.itemsOnDesktop) {
                      if (this.itemsOnDesktop[itemName] == null) {
                        continue;
                      }
                      if (!this.itemsOnDesktop[itemName].getUserData("isNotification")) {
                        continue;
                      }
                      tmpItems[itemName] = this.itemsOnDesktop[itemName];
                      this.removeFromDesktop(itemName, false);
                    }
                    // rearrange notifications
                    for (var itemName2 in tmpItems) {
                      var tmp = tmpItems[itemName2];
                      if (tmp == null) {
                        continue;
                      }
                      this.addToMainMenu(itemName2, tmp);
                    }
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.removeFromDesktop: ", e);
              }
            },

            runSecondlyTimer: function () {
              try {
                this.calculateCostsForNextMCV();

                var self = this;
                window.setTimeout(function () {
                  self.runSecondlyTimer();
                }, 1000);
              } catch (e) {
                console.log("MaelstromTools.runSecondlyTimer: ", e);
              }
            },

            runMainTimer: function () {
              try {
                this.checkForPackages();
                if (CCTAWrapperIsInstalled()) {
                  this.checkRepairAllUnits();
                  this.checkRepairAllBuildings();
                }

                var missionTracker = typeof (qx.core.Init.getApplication().getMissionsBar) === 'function' ? qx.core.Init.getApplication().getMissionsBar() : qx.core.Init.getApplication().getMissionTracker(); //fix for PerforceChangelist>=376877
                if (MT_Preferences.Settings.autoHideMissionTracker) {
                  if (missionTracker.isVisible()) {
                    missionTracker.hide();
                  }
                  if (typeof (qx.core.Init.getApplication().getMissionsBar) === 'function') {
                    if (qx.core.Init.getApplication().getMissionsBar().getSizeHint().height != 0) {
                      qx.core.Init.getApplication().getMissionsBar().getSizeHint().height = 0;
                      qx.core.Init.getApplication().triggerDesktopResize();
                    }
                  }
                } else {
                  if (!missionTracker.isVisible()) {
                    missionTracker.show();
                    if (typeof (qx.core.Init.getApplication().getMissionsBar) === 'function') {
                      qx.core.Init.getApplication().getMissionsBar().initHeight();
                      qx.core.Init.getApplication().triggerDesktopResize();
                    }
                  }
                }
                
                var self = this;
                window.setTimeout(function () {
                  self.runMainTimer();
                }, this.mainTimerInterval);
              } catch (e) {
                console.log("MaelstromTools.runMainTimer: ", e);
              }
            },

            runAutoCollectTimer: function () {
              try {
                //console.log("runAutoCollectTimer ", MT_Preferences.Settings.AutoCollectTimer);
                if (!CCTAWrapperIsInstalled()) return; // run timer only then wrapper is running
                if (this.checkForPackages() && MT_Preferences.Settings.autoCollectPackages) {
                  this.collectAllPackages();
                }
                if (this.checkRepairAllUnits() && MT_Preferences.Settings.autoRepairUnits) {
                  this.repairAllUnits();
                }
                if (this.checkRepairAllBuildings() && MT_Preferences.Settings.autoRepairBuildings) {
                  this.repairAllBuildings();
                }

                var self = this;
                window.setTimeout(function () {
                  self.runAutoCollectTimer();
                }, MT_Preferences.Settings.AutoCollectTimer * 60000);
              } catch (e) {
                console.log("MaelstromTools.runMainTimer: ", e);
              }
            },

            openWindow: function (windowObj, windowName, skipMoveWindow) {
              try {
                if (!windowObj.isVisible()) {
                  if (windowName == "MainMenu") {
                    windowObj.show();
                  } else {
                    if (!skipMoveWindow) {
                      this.moveWindow(windowObj, windowName);
                    }
                    windowObj.open();
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.openWindow: ", e);
              }
            },

            moveWindow: function (windowObj, windowName) {
              try {
                var x = this.mWindows[windowName]["x"];
                var y = this.mWindows[windowName]["y"];
                if (this.mWindows[windowName]["Align"] == "R") {
                  x = qx.bom.Viewport.getWidth(window) - this.mWindows[windowName]["x"];
                }
                if (this.mWindows[windowName]["AlignV"] == "B") {
                  y = qx.bom.Viewport.getHeight(window) - this.mWindows[windowName]["y"] - windowObj.height;
                }
                windowObj.moveTo(x, y);
                if (windowName != "MainMenu") {
                  windowObj.setHeight(this.mWindows[windowName]["h"]);
                  windowObj.setWidth(this.mWindows[windowName]["w"]);
                }
              } catch (e) {
                console.log("MaelstromTools.moveWindow: ", e);
              }
            },

            checkForPackages: function () {
              try {
                MT_Cache.updateCityCache();

                for (var cname in MT_Cache.Cities) {
                  var ncity = MT_Cache.Cities[cname].Object;
                  if (ncity.get_CityBuildingsData().get_HasCollectableBuildings()) {
                    this.addToMainMenu("CollectAllResources", this.buttonCollectAllResources);
                    return true;
                  }
                }
                this.removeFromMainMenu("CollectAllResources");
                return false;
              } catch (e) {
                console.log("MaelstromTools.checkForPackages: ", e);
                return false;
              }
            },

            collectAllPackages: function () {
              try {
                MT_Cache.updateCityCache();
                for (var cname in MT_Cache.Cities) {
                  var ncity = MT_Cache.Cities[cname].Object;
                  if (ncity.get_CityBuildingsData().get_HasCollectableBuildings()) {
                    if (MT_Cache.CityCount <= 1) {
                      var buildings = ncity.get_Buildings().d;
                      for (var x in buildings) {
                        var building = buildings[x];
                        if (building.get_ProducesPackages() && building.get_ReadyToCollect()) {
                          ClientLib.Net.CommunicationManager.GetInstance().SendCommand("CollectResource",{cityid:ncity.get_Id(), posX:building.get_CoordX(),posY:building.get_CoordY()}, null, null, true);
                        }
                      }
                    } else {
                      ncity.CollectAllResources();
                    }
                  }
                }
                this.removeFromMainMenu("CollectAllResources");
              } catch (e) {
                console.log("MaelstromTools.collectAllPackages: ", e);
              }
            },

            checkRepairAll: function (visMode, buttonName, button) {
              try {
                MT_Cache.updateCityCache();

                for (var cname in MT_Cache.Cities) {
                  var ncity = MT_Cache.Cities[cname].Object;
                  if (MaelstromTools.Wrapper.CanRepairAll(ncity, visMode)) {
                    this.addToMainMenu(buttonName, button);
                    return true;
                  }
                }

                this.removeFromMainMenu(buttonName);
                return false;
              } catch (e) {
                console.log("MaelstromTools.checkRepairAll: ", e);
                return false;
              }
            },

            checkRepairAllUnits: function () {
              return this.checkRepairAll(ClientLib.Vis.Mode.ArmySetup, "RepairAllUnits", this.buttonRepairAllUnits);
            },

            checkRepairAllBuildings: function () {
              return this.checkRepairAll(ClientLib.Vis.Mode.City, "RepairAllBuildings", this.buttonRepairAllBuildings);
            },

            repairAll: function (visMode, buttonName) {
              try {
                MT_Cache.updateCityCache();

                for (var cname in MT_Cache.Cities) {
                  var ncity = MT_Cache.Cities[cname].Object;
                  if (MaelstromTools.Wrapper.CanRepairAll(ncity, visMode)) {
                    MaelstromTools.Wrapper.RepairAll(ncity, visMode);
                  }

                }
                this.removeFromMainMenu(buttonName);
              } catch (e) {
                console.log("MaelstromTools.repairAll: ", e);
              }
            },

            //ClientLib.Data.City.prototype.get_CityRepairData
            //ClientLib.Data.CityRepair.prototype.CanRepairAll
            //ClientLib.Data.CityRepair.prototype.RepairAll
            repairAllUnits: function () {
              try {
                this.repairAll(ClientLib.Vis.Mode.ArmySetup, "RepairAllUnits");
              } catch (e) {
                console.log("MaelstromTools.repairAllUnits: ", e);
              }
            },

            repairAllBuildings: function () {
              try {
                this.repairAll(ClientLib.Vis.Mode.City, "RepairAllBuildings");
              } catch (e) {
                console.log("MaelstromTools.repairAllBuildings: ", e);
              }
            },

            updateLoot: function (ident, visCity, widget) {
              try {
                clearInterval(this.lootStatusInfoInterval);
                if (!MT_Preferences.Settings.showLoot) {
                  if (this.lootWidget[ident]) {
                    this.lootWidget[ident].removeAll();
                  }
                  return;
                }

                var baseLoadState = MT_Cache.updateLoot(visCity);
                if (baseLoadState == -2) { // base already cached and base not changed
                  return;
                }

                if (!this.lootWidget) {
                  this.lootWidget = new Object();
                }
                if (!this.lootWidget[ident]) {
                  this.lootWidget[ident] = new qx.ui.container.Composite(new qx.ui.layout.Grid(5, 5));
                  this.lootWidget[ident].setTextColor("white");
                  widget.add(this.lootWidget[ident]);
                }
                var lootWidget = this.lootWidget[ident];

                var rowIdx = 1;
                var colIdx = 1;
                lootWidget.removeAll();
                switch (baseLoadState) {
                  case -1:
                    {
                      MaelstromTools.Util.addLabel(lootWidget, rowIdx, colIdx++, "Target out of range, no resource calculation possible", null, null, 'bold', null);
                      break;
                    }
                  case 1:
                    {
                      var Resources = MT_Cache.SelectedBaseResources;
                      this.createResourceLabels(lootWidget, ++rowIdx, "Possible attacks from this base (available CP)", Resources, - 1);
                      this.createResourceLabels(lootWidget, ++rowIdx, "Lootable resources", Resources, 1);
                      this.createResourceLabels(lootWidget, ++rowIdx, "per CP", Resources, 1 * Resources.CPNeeded);
                      this.createResourceLabels(lootWidget, ++rowIdx, "2nd run", Resources, 2 * Resources.CPNeeded);
                      this.createResourceLabels(lootWidget, ++rowIdx, "3rd run", Resources, 3 * Resources.CPNeeded);
                      break;
                    }
                  default:
                    {
                      MaelstromTools.Util.addLabel(lootWidget, rowIdx, colIdx++, "Calculating resources...", null, null, 'bold', null);
                      this.lootStatusInfoInterval = setInterval(function () {
                        MaelstromTools.Base.getInstance().updateLoot(ident, visCity, widget);
                      }, 100);
                      break;
                    }
                }
              } catch (e) {
                console.log("MaelstromTools.updateLoot: ", e);
              }
            },

            createResourceLabels: function (lootWidget, rowIdx, Label, Resources, Modifier) {
              var colIdx = 1;
              var font = (Modifier > 1 ? null : 'bold');

              if (Modifier == -1 && Resources.CPNeeded > 0) {
                Label = Lang.gt(Label) + ": " + Math.floor(ClientLib.Data.MainData.GetInstance().get_Player().GetCommandPointCount() / Resources.CPNeeded);
                MaelstromTools.Util.addLabel(lootWidget, rowIdx, colIdx++, Label, null, 'left', font, null, 9);
                return;
              }
              colIdx = 1;
              if (Modifier > 0) {
                MaelstromTools.Util.addLabel(lootWidget, rowIdx, colIdx++, Lang.gt(Label) + ":", null, null, font);
                MaelstromTools.Util.addImage(lootWidget, rowIdx, colIdx++, MaelstromTools.Util.getImage(MaelstromTools.Statics.Research));
                MaelstromTools.Util.addLabel(lootWidget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Resources[MaelstromTools.Statics.Research] / Modifier), 50, 'right', font);
                MaelstromTools.Util.addImage(lootWidget, rowIdx, colIdx++, MaelstromTools.Util.getImage(MaelstromTools.Statics.Tiberium));
                MaelstromTools.Util.addLabel(lootWidget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Resources[MaelstromTools.Statics.Tiberium] / Modifier), 50, 'right', font);
                MaelstromTools.Util.addImage(lootWidget, rowIdx, colIdx++, MaelstromTools.Util.getImage(MaelstromTools.Statics.Crystal));
                MaelstromTools.Util.addLabel(lootWidget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Resources[MaelstromTools.Statics.Crystal] / Modifier), 50, 'right', font);
                MaelstromTools.Util.addImage(lootWidget, rowIdx, colIdx++, MaelstromTools.Util.getImage(MaelstromTools.Statics.Dollar));
                MaelstromTools.Util.addLabel(lootWidget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Resources[MaelstromTools.Statics.Dollar] / Modifier), 50, 'right', font);
                MaelstromTools.Util.addImage(lootWidget, rowIdx, colIdx++, MaelstromTools.Util.getImage("Sum"));
                MaelstromTools.Util.addLabel(lootWidget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Resources["Total"] / Modifier), 50, 'right', font);
              }
            },

            mcvPopup: null,
            mcvPopupX : 0,
            mcvPopupY : 0,
            mcvTimerLabel: null,
            calculateCostsForNextMCV: function () {
              try {
                if (!MT_Preferences.Settings.showCostsForNextMCV) {
                  if (this.mcvPopup) {
                    this.mcvPopup.close();
                  }
                  return;
                }
                var player = ClientLib.Data.MainData.GetInstance().get_Player();
                var cw = player.get_Faction();
                var cj = ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Research_BaseFound, cw);
                var cr = player.get_PlayerResearch();
                var cd = cr.GetResearchItemFomMdbId(cj);
                if (cd == null) {
                  if (this.mcvPopup) {
                    this.mcvPopup.close();
                  }
                  return;
                }

                if (!this.mcvPopup) {
                  this.mcvPopup = new qx.ui.window.Window("").set({
                    contentPadding : 0,
                    showMinimize : false,
                    showMaximize : false,
                    showClose : false,
                    resizable : false
                  });
                  this.mcvPopup.setLayout(new qx.ui.layout.VBox());
                  this.mcvPopup.addListener("move", function (e) {
                    var base = MaelstromTools.Base.getInstance();
                    var size = qx.core.Init.getApplication().getRoot().getBounds();
                    var value = size.width - e.getData().left;
                    base.mcvPopupX = value < 0 ? 150 : value;
                    value = size.height - e.getData().top;
                    base.mcvPopupY = value < 0 ? 70 : value;
                    MaelstromTools.LocalStorage.set("mcvPopup", {
                      x : base.mcvPopupX,
                      y : base.mcvPopupY
                    });
                  });
                  var font = qx.bom.Font.fromString('bold').set({
                    size: 20
                  });

                  this.mcvTimerLabel = new qx.ui.basic.Label().set({
                    font: font,
                    textColor: 'red',
                    width: 155,
                    textAlign: 'center',
                    marginBottom : 5
                  });
                  this.mcvPopup.add(this.mcvTimerLabel);
                  var serverBar = qx.core.Init.getApplication().getServerBar().getBounds();
                  var pos = MaelstromTools.LocalStorage.get("mcvPopup", {
                      x : serverBar.width + 150,
                      y : 70
                    });
                  this.mcvPopupX = pos.x;
                  this.mcvPopupY = pos.y;
                  this.mcvPopup.open();
                }
                var size = qx.core.Init.getApplication().getRoot().getBounds();
                this.mcvPopup.moveTo(size.width - this.mcvPopupX, size.height - this.mcvPopupY);

                var nextLevelInfo = cd.get_NextLevelInfo_Obj();
                var resourcesNeeded = new Array();
                for (var i in nextLevelInfo.rr) {
                  if (nextLevelInfo.rr[i].t > 0) {
                    resourcesNeeded[nextLevelInfo.rr[i].t] = nextLevelInfo.rr[i].c;
                  }
                }
                //var researchNeeded = resourcesNeeded[ClientLib.Base.EResourceType.ResearchPoints];
                //var currentResearchPoints = player.get_ResearchPoints();

                var creditsNeeded = resourcesNeeded[ClientLib.Base.EResourceType.Gold];
                var creditsResourceData = player.get_Credits();
                var creditGrowthPerHour = (creditsResourceData.Delta + creditsResourceData.ExtraBonusDelta) * ClientLib.Data.MainData.GetInstance().get_Time().get_StepsPerHour();
                var creditTimeLeftInHours = (creditsNeeded - player.GetCreditsCount()) / creditGrowthPerHour;

                if (creditGrowthPerHour == 0 || creditTimeLeftInHours <= 0) {
                  if (this.mcvPopup) {
                    this.mcvPopup.close();
                  }
                  return;
                }

                this.mcvPopup.setCaption(Lang.gt("Next MCV") + " ($ " + MaelstromTools.Wrapper.FormatNumbersCompact(creditsNeeded) + ")");
                this.mcvTimerLabel.setValue(MaelstromTools.Wrapper.FormatTimespan(creditTimeLeftInHours * 60 * 60));

                if (!this.mcvPopup.isVisible()) {
                  this.mcvPopup.open();
                }
              } catch (e) {
                console.log("calculateCostsForNextMCV", e);
              }
            }
          }
        });

        // define Preferences
        qx.Class.define("MaelstromTools.Preferences", {
          type: "singleton",
          extend: qx.core.Object,

          statics: {
            USEDEDICATEDMAINMENU: "useDedicatedMainMenu",
            AUTOCOLLECTPACKAGES: "autoCollectPackages",
            AUTOREPAIRUNITS: "autoRepairUnits",
            AUTOREPAIRBUILDINGS: "autoRepairBuildings",
            AUTOHIDEMISSIONTRACKER: "autoHideMissionTracker",
            AUTOCOLLECTTIMER: "AutoCollectTimer",
            SHOWLOOT: "showLoot",
            SHOWCOSTSFORNEXTMCV: "showCostsForNextMCV",
            CHATHISTORYLENGTH: "ChatHistoryLength"
          },

          members: {
            Window: null,
            Widget: null,
            Settings: null,
            FormElements: null,

            readOptions: function () {
              try {
                if (!this.Settings) {
                  this.Settings = new Object();
                }

                /*
                if(MaelstromTools.LocalStorage.get("useDedicatedMainMenu") == null) {
                  if(qx.bom.Viewport.getWidth(window) > 1800) {
                    this.Settings["useDedicatedMainMenu"] = false;
                  }
                } else {
                  this.Settings["useDedicatedMainMenu"] = (MaelstromTools.LocalStorage.get("useDedicatedMainMenu", 1) == 1);
                }*/
                this.Settings[MaelstromTools.Preferences.USEDEDICATEDMAINMENU] = (MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.USEDEDICATEDMAINMENU, 1) == 1);
                this.Settings[MaelstromTools.Preferences.AUTOCOLLECTPACKAGES] = (MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.AUTOCOLLECTPACKAGES, 0) == 1);
                this.Settings[MaelstromTools.Preferences.AUTOREPAIRUNITS] = (MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.AUTOREPAIRUNITS, 0) == 1);
                this.Settings[MaelstromTools.Preferences.AUTOREPAIRBUILDINGS] = (MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.AUTOREPAIRBUILDINGS, 0) == 1);
                this.Settings[MaelstromTools.Preferences.AUTOHIDEMISSIONTRACKER] = (MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.AUTOHIDEMISSIONTRACKER, 0) == 1);
                this.Settings[MaelstromTools.Preferences.AUTOCOLLECTTIMER] = MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.AUTOCOLLECTTIMER, 60);
                this.Settings[MaelstromTools.Preferences.SHOWLOOT] = (MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.SHOWLOOT, 1) == 1);
                this.Settings[MaelstromTools.Preferences.SHOWCOSTSFORNEXTMCV] = (MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.SHOWCOSTSFORNEXTMCV, 1) == 1);
                this.Settings[MaelstromTools.Preferences.CHATHISTORYLENGTH] = MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.CHATHISTORYLENGTH, 64);

                if (!CCTAWrapperIsInstalled()) {
                  this.Settings[MaelstromTools.Preferences.AUTOREPAIRUNITS] = false;
                  this.Settings[MaelstromTools.Preferences.AUTOREPAIRBUILDINGS] = false;
                  //this.Settings[MaelstromTools.Preferences.SHOWLOOT] = false;
                }
                //console.log(this.Settings);

              } catch (e) {
                console.log("MaelstromTools.Preferences.readOptions: ", e);
              }
            },

            openWindow: function (WindowName, WindowTitle) {
              try {
                if (!this.Window) {
                  //this.Window = new qx.ui.window.Window(WindowTitle).set({
                  this.Window = new webfrontend.gui.OverlayWindow().set({
                    autoHide: false,
                    title: WindowTitle,
                    minHeight: 350

                    //resizable: false,
                    //showMaximize:false,
                    //showMinimize:false,
                    //allowMaximize:false,
                    //allowMinimize:false,
                    //showStatusbar: false
                  });
                  this.Window.clientArea.setPadding(10);
                  this.Window.clientArea.setLayout(new qx.ui.layout.VBox(3));

                  this.Widget = new qx.ui.container.Composite(new qx.ui.layout.Grid().set({
                    spacingX: 5,
                    spacingY: 5
                  }));

                  //this.Widget.setTextColor("white");

                  this.Window.clientArea.add(this.Widget);
                }

                if (this.Window.isVisible()) {
                  this.Window.close();
                } else {
                  MT_Base.openWindow(this.Window, WindowName);
                  this.setWidgetLabels();
                }
              } catch (e) {
                console.log("MaelstromTools.Preferences.openWindow: ", e);
              }
            },

            addFormElement: function (name, element) {
              this.FormElements[name] = element;
            },

            setWidgetLabels: function () {
              try {
                this.readOptions();

                this.FormElements = new Object();
                this.Widget.removeAll();
                var rowIdx = 1;
                var colIdx = 1;

                var chkAutoHideMissionTracker = new qx.ui.form.CheckBox(Lang.gt("Hide Mission Tracker")).set({
                  value: this.Settings[MaelstromTools.Preferences.AUTOHIDEMISSIONTRACKER] == 1
                });
                var chkUseDedicatedMainMenu = new qx.ui.form.CheckBox(Lang.gt("Use dedicated Main Menu (restart required)")).set({
                  value: this.Settings[MaelstromTools.Preferences.USEDEDICATEDMAINMENU] == 1
                });
                var chkShowLoot = new qx.ui.form.CheckBox(Lang.gt("Show lootable resources (restart required)")).set({
                  value: this.Settings[MaelstromTools.Preferences.SHOWLOOT] == 1/*,
                  enabled: CCTAWrapperIsInstalled()*/
                });
                var chkCostsNextMCV = new qx.ui.form.CheckBox(Lang.gt("Show time to next MCV")).set({
                  value: this.Settings[MaelstromTools.Preferences.SHOWCOSTSFORNEXTMCV] == 1
                });
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx, chkAutoHideMissionTracker, 2);
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx, chkUseDedicatedMainMenu, 2);
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx, chkShowLoot, 2);
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx, chkCostsNextMCV, 2);

                var chkAutoCollectPackages = new qx.ui.form.CheckBox(Lang.gt("Autocollect packages")).set({
                  value: this.Settings[MaelstromTools.Preferences.AUTOCOLLECTPACKAGES] == 1
                });
                var chkAutoRepairUnits = new qx.ui.form.CheckBox(Lang.gt("Autorepair units")).set({
                  value: this.Settings[MaelstromTools.Preferences.AUTOREPAIRUNITS] == 1,
                  enabled: CCTAWrapperIsInstalled()
                });
                var chkAutoRepairBuildings = new qx.ui.form.CheckBox(Lang.gt("Autorepair buildings")).set({
                  value: this.Settings[MaelstromTools.Preferences.AUTOREPAIRBUILDINGS] == 1,
                  enabled: CCTAWrapperIsInstalled()
                });

                var spinnerChatHistoryLength = new qx.ui.form.Spinner().set({
                  minimum: 64,
                  maximum: 512,
                  value: this.Settings[MaelstromTools.Preferences.CHATHISTORYLENGTH]
                });

                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx, Lang.gt("Chat history length") + " (" + spinnerChatHistoryLength.getMinimum() + " - " + spinnerChatHistoryLength.getMaximum() + ")");
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx + 1, spinnerChatHistoryLength);

                var spinnerAutoCollectTimer = new qx.ui.form.Spinner().set({
                  minimum: 5,
                  maximum: 60 * 6,
                  value: this.Settings[MaelstromTools.Preferences.AUTOCOLLECTTIMER]
                });

                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx, Lang.gt("Automatic interval in minutes") + " (" + spinnerAutoCollectTimer.getMinimum() + " - " + spinnerAutoCollectTimer.getMaximum() + ")");
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx + 1, spinnerAutoCollectTimer);
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx, chkAutoCollectPackages, 2);
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx, chkAutoRepairUnits, 2);
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx, chkAutoRepairBuildings, 2);

                var applyButton = new qx.ui.form.Button(Lang.gt("Apply changes")).set({
                  appearance: "button-detailview-small",
                  width: 120,
                  minWidth: 120,
                  maxWidth: 120
                });
                applyButton.addListener("execute", this.applyChanges, this);

                var cancelButton = new qx.ui.form.Button(Lang.gt("Discard changes")).set({
                  appearance: "button-detailview-small",
                  width: 120,
                  minWidth: 120,
                  maxWidth: 120
                });
                cancelButton.addListener("execute", function () {
                  this.Window.close();
                }, this);

                var resetButton = new qx.ui.form.Button(Lang.gt("Reset to default")).set({
                  appearance: "button-detailview-small",
                  width: 120,
                  minWidth: 120,
                  maxWidth: 120
                });
                resetButton.addListener("execute", this.resetToDefault, this);

                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx, resetButton);
                colIdx = 1;
                MaelstromTools.Util.addElement(this.Widget, rowIdx, colIdx++, cancelButton);
                MaelstromTools.Util.addElement(this.Widget, rowIdx++, colIdx, applyButton);

                this.addFormElement(MaelstromTools.Preferences.AUTOHIDEMISSIONTRACKER, chkAutoHideMissionTracker);
                this.addFormElement(MaelstromTools.Preferences.USEDEDICATEDMAINMENU, chkUseDedicatedMainMenu);
                this.addFormElement(MaelstromTools.Preferences.SHOWLOOT, chkShowLoot);
                this.addFormElement(MaelstromTools.Preferences.SHOWCOSTSFORNEXTMCV, chkCostsNextMCV);
                this.addFormElement(MaelstromTools.Preferences.AUTOCOLLECTPACKAGES, chkAutoCollectPackages);
                this.addFormElement(MaelstromTools.Preferences.AUTOREPAIRUNITS, chkAutoRepairUnits);
                this.addFormElement(MaelstromTools.Preferences.AUTOREPAIRBUILDINGS, chkAutoRepairBuildings);
                this.addFormElement(MaelstromTools.Preferences.AUTOCOLLECTTIMER, spinnerAutoCollectTimer);
                this.addFormElement(MaelstromTools.Preferences.CHATHISTORYLENGTH, spinnerChatHistoryLength);
              } catch (e) {
                console.log("MaelstromTools.Preferences.setWidgetLabels: ", e);
              }
            },

            applyChanges: function () {
              try {
                var autoRunNeeded = false;
                for (var idx in this.FormElements) {
                  var element = this.FormElements[idx];
                  if (idx == MaelstromTools.Preferences.AUTOCOLLECTTIMER) {
                    autoRunNeeded = (MaelstromTools.LocalStorage.get(MaelstromTools.Preferences.AUTOCOLLECTTIMER, 0) != element.getValue());
                  }
                  if (idx == MaelstromTools.Preferences.CHATHISTORYLENGTH) {
                    webfrontend.gui.chat.ChatWidget.recvbufsize = element.getValue();
                  }
                  MaelstromTools.LocalStorage.set(idx, element.getValue());
                }
                this.readOptions();
                if (autoRunNeeded) {
                  MT_Base.runAutoCollectTimer();
                }
                this.Window.close();
              } catch (e) {
                console.log("MaelstromTools.Preferences.applyChanges: ", e);
              }
            },

            resetToDefault: function () {
              try {
                MaelstromTools.LocalStorage.clearAll();
                this.setWidgetLabels();
              } catch (e) {
                console.log("MaelstromTools.Preferences.resetToDefault: ", e);
              }
            }
          }
        });

        // define DefaultObject
        qx.Class.define("MaelstromTools.DefaultObject", {
          type: "abstract",
          extend: qx.core.Object,
          members: {
            Window: null,
            Widget: null,
            Cache: {}, //k null
            IsTimerEnabled: true,

            calc: function () {
              try {
                if (this.Window.isVisible()) {
                  this.updateCache();
                  this.setWidgetLabels();
                  if (this.IsTimerEnabled) {
                    var self = this;
                    window.setTimeout(function () {
                      self.calc();
                    }, MT_Base.timerInterval);
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.DefaultObject.calc: ", e);
              }
            },

            openWindow: function (WindowName, WindowTitle) {
              try {
                if (!this.Window) {
                  this.Window = new qx.ui.window.Window(WindowTitle).set({
                    resizable: false,
                    showMaximize: false,
                    showMinimize: false,
                    allowMaximize: false,
                    allowMinimize: false,
                    showStatusbar: false
                  });
                  this.Window.setPadding(10);
                  this.Window.setLayout(new qx.ui.layout.VBox(3));

                  this.Widget = new qx.ui.container.Composite(new qx.ui.layout.Grid());
                  this.Widget.setTextColor("white");

                  this.Window.add(this.Widget);
                }

                if (this.Window.isVisible()) {
                  this.Window.close();
                } else {
                  MT_Base.openWindow(this.Window, WindowName);
                  this.calc();
                }
              } catch (e) {
                console.log("MaelstromTools.DefaultObject.openWindow: ", e);
              }
            }
          }
        });

        // define Production
        qx.Class.define("MaelstromTools.Production", {
          type: "singleton",
          extend: MaelstromTools.DefaultObject,
          members: {
            updateCache: function (onlyForCity) {
              try {
                MT_Cache.updateCityCache();
                var alliance = ClientLib.Data.MainData.GetInstance().get_Alliance();
                //this.Cache = Object();

                for (var cname in MT_Cache.Cities) {
                  if (onlyForCity != null && onlyForCity != cname) {
                    continue;
                  }
                  var ncity = MT_Cache.Cities[cname].Object;
                  if (typeof (this.Cache[cname]) !== 'object') this.Cache[cname] = {};
                  if (typeof (this.Cache[cname][MaelstromTools.Statics.Tiberium]) !== 'object') this.Cache[cname][MaelstromTools.Statics.Tiberium] = {}; // all have to be checked, 
                  if (typeof (this.Cache[cname][MaelstromTools.Statics.Crystal]) !== 'object') this.Cache[cname][MaelstromTools.Statics.Crystal] = {}; // this.Cache[cname] can be created inside different namespaces
                  if (typeof (this.Cache[cname][MaelstromTools.Statics.Power]) !== 'object') this.Cache[cname][MaelstromTools.Statics.Power] = {}; // like the RepairTime etc... without those objs
                  if (typeof (this.Cache[cname][MaelstromTools.Statics.Dollar]) !== 'object') this.Cache[cname][MaelstromTools.Statics.Dollar] = {};

                  this.Cache[cname]["ProductionStopped"] = ncity.get_IsGhostMode();
                  this.Cache[cname]["PackagesStopped"] = (ncity.get_hasCooldown() || ncity.get_IsGhostMode());
                  this.Cache[cname][MaelstromTools.Statics.Tiberium]["Delta"] = ncity.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Tiberium, false, false); // (production.d[ClientLib.Base.EResourceType.Tiberium]['Delta'] * serverTime.get_StepsPerHour());
                  this.Cache[cname][MaelstromTools.Statics.Tiberium]["ExtraBonusDelta"] = ncity.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Tiberium); //(production.d[ClientLib.Base.EResourceType.Tiberium]['ExtraBonusDelta'] * serverTime.get_StepsPerHour());
                  this.Cache[cname][MaelstromTools.Statics.Tiberium]["POI"] = alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Tiberium);
                  this.Cache[cname][MaelstromTools.Statics.Crystal]["Delta"] = ncity.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Crystal, false, false); //(production.d[ClientLib.Base.EResourceType.Crystal]['Delta'] * serverTime.get_StepsPerHour());
                  this.Cache[cname][MaelstromTools.Statics.Crystal]["ExtraBonusDelta"] = ncity.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Crystal); //(production.d[ClientLib.Base.EResourceType.Crystal]['ExtraBonusDelta'] * serverTime.get_StepsPerHour());
                  this.Cache[cname][MaelstromTools.Statics.Crystal]["POI"] = alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Crystal);
                  this.Cache[cname][MaelstromTools.Statics.Power]["Delta"] = ncity.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Power, false, false); //(production.d[ClientLib.Base.EResourceType.Power]['Delta'] * serverTime.get_StepsPerHour());
                  this.Cache[cname][MaelstromTools.Statics.Power]["ExtraBonusDelta"] = ncity.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Power); // (production.d[ClientLib.Base.EResourceType.Power]['ExtraBonusDelta'] * serverTime.get_StepsPerHour());
                  this.Cache[cname][MaelstromTools.Statics.Power]["POI"] = alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Power);
                  this.Cache[cname][MaelstromTools.Statics.Dollar]["Delta"] = ClientLib.Base.Resource.GetResourceGrowPerHour(ncity.get_CityCreditsProduction(), false); // (ncity.get_CityCreditsProduction()['Delta'] * serverTime.get_StepsPerHour());
                  this.Cache[cname][MaelstromTools.Statics.Dollar]["ExtraBonusDelta"] = ClientLib.Base.Resource.GetResourceBonusGrowPerHour(ncity.get_CityCreditsProduction(), false); // (ncity.get_CityCreditsProduction()['ExtraBonusDelta'] * serverTime.get_StepsPerHour());
                  this.Cache[cname][MaelstromTools.Statics.Dollar]["POI"] = 0;
                  this.Cache[cname]["BaseLevel"] = MaelstromTools.Wrapper.GetBaseLevel(ncity);
                  if (onlyForCity != null && onlyForCity == cname) return this.Cache[cname];
                }
              } catch (e) {
                console.log("MaelstromTools.Production.updateCache: ", e);
              }
            },

            createProductionLabels2: function (rowIdx, colIdx, cityName, resourceType) {
              try {
                if (cityName == "-Total-") {
                  var Totals = Object();
                  Totals["Delta"] = 0;
                  Totals["ExtraBonusDelta"] = 0;
                  Totals["POI"] = 0;
                  Totals["Total"] = 0;

                  for (var cname in this.Cache) {
                    Totals["Delta"] += this.Cache[cname][resourceType]['Delta'];
                    Totals["ExtraBonusDelta"] += this.Cache[cname][resourceType]['ExtraBonusDelta'];
                    Totals["POI"] += this.Cache[cname][resourceType]['POI'];
                  }
                  Totals["Total"] = Totals['Delta'] + Totals['ExtraBonusDelta'] + Totals['POI'];

                  rowIdx++;

                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, MaelstromTools.Wrapper.FormatNumbersCompact(Totals['Delta']), 80, 'right', 'bold');
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, MaelstromTools.Wrapper.FormatNumbersCompact(Totals['ExtraBonusDelta']), 80, 'right', 'bold');
                  if (resourceType != MaelstromTools.Statics.Dollar) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, MaelstromTools.Wrapper.FormatNumbersCompact(Totals['POI']), 80, 'right', 'bold');
                  } else {
                    rowIdx++;
                  }
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, MaelstromTools.Wrapper.FormatNumbersCompact(Totals['Total']), 80, 'right', 'bold');
                } else if (cityName == "-Labels-") {
                  MaelstromTools.Util.addImage(this.Widget, rowIdx++, colIdx, MaelstromTools.Util.getImage(resourceType));
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, "Continuous", 100, 'left');
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, "Bonus", 100, 'left');
                  if (resourceType != MaelstromTools.Statics.Dollar) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, "POI", 100, 'left');
                  } else {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, "Total / BaseLevel", 100, 'left');
                  }
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, "Total / h", 100, 'left');
                } else {
                  var cityCache = this.Cache[cityName];
                  if (rowIdx > 2) {
                    rowIdx++;
                  }
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[resourceType]['Delta']), 80, 'right', null, ((cityCache["ProductionStopped"] || cityCache[resourceType]['Delta'] == 0) ? "red" : "white"));
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[resourceType]['ExtraBonusDelta']), 80, 'right', null, ((cityCache["PackagesStopped"] || cityCache[resourceType]['ExtraBonusDelta'] == 0) ? "red" : "white"));
                  if (resourceType != MaelstromTools.Statics.Dollar) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[resourceType]['POI']), 80, 'right', null, (cityCache[resourceType]['POI'] == 0 ? "red" : "white"));
                  } else {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, MaelstromTools.Wrapper.FormatNumbersCompact((cityCache[resourceType]['Delta'] + cityCache[resourceType]['ExtraBonusDelta'] + cityCache[resourceType]['POI']) / cityCache["BaseLevel"]), 80, 'right');
                  }
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[resourceType]['Delta'] + cityCache[resourceType]['ExtraBonusDelta'] + cityCache[resourceType]['POI']), 80, 'right', 'bold');
                }
                return rowIdx;
              } catch (e) {
                console.log("MaelstromTools.Production.createProductionLabels2: ", e);
              }
            },

            setWidgetLabels: function () {
              try {
                this.Widget.removeAll();

                var rowIdx = 1;
                var colIdx = 1;

                rowIdx = this.createProductionLabels2(rowIdx, colIdx, "-Labels-", MaelstromTools.Statics.Tiberium);
                rowIdx = this.createProductionLabels2(rowIdx, colIdx, "-Labels-", MaelstromTools.Statics.Crystal);
                rowIdx = this.createProductionLabels2(rowIdx, colIdx, "-Labels-", MaelstromTools.Statics.Power);
                rowIdx = this.createProductionLabels2(rowIdx, colIdx, "-Labels-", MaelstromTools.Statics.Dollar);

                colIdx++;
                for (var cityName in this.Cache) {
                  rowIdx = 1;
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx, cityName, 80, 'right');

                  rowIdx = this.createProductionLabels2(rowIdx, colIdx, cityName, MaelstromTools.Statics.Tiberium);
                  rowIdx = this.createProductionLabels2(rowIdx, colIdx, cityName, MaelstromTools.Statics.Crystal);
                  rowIdx = this.createProductionLabels2(rowIdx, colIdx, cityName, MaelstromTools.Statics.Power);
                  rowIdx = this.createProductionLabels2(rowIdx, colIdx, cityName, MaelstromTools.Statics.Dollar);

                  MaelstromTools.Util.addElement(this.Widget, rowIdx, colIdx++, MaelstromTools.Util.getAccessBaseButton(cityName));
                }

                rowIdx = 1;
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx, "Total / h", 80, 'right', 'bold');

                rowIdx = this.createProductionLabels2(rowIdx, colIdx, "-Total-", MaelstromTools.Statics.Tiberium);
                rowIdx = this.createProductionLabels2(rowIdx, colIdx, "-Total-", MaelstromTools.Statics.Crystal);
                rowIdx = this.createProductionLabels2(rowIdx, colIdx, "-Total-", MaelstromTools.Statics.Power);
                rowIdx = this.createProductionLabels2(rowIdx, colIdx, "-Total-", MaelstromTools.Statics.Dollar);
              } catch (e) {
                console.log("MaelstromTools.Production.setWidgetLabels: ", e);
              }
            }
          }
        });

        // define RepairTime
        qx.Class.define("MaelstromTools.RepairTime", {
          type: "singleton",
          extend: MaelstromTools.DefaultObject,
          members: {

            updateCache: function () {
              try {
                MT_Cache.updateCityCache();
                this.Cache = Object();

                for (var cname in MT_Cache.Cities) {
                  var ncity = MT_Cache.Cities[cname].Object;
                  var RepLargest = '';

                  this.Cache[cname] = Object();
                  this.Cache[cname]["RepairTime"] = Object();
                  this.Cache[cname]["Repaircharge"] = Object();
                  this.Cache[cname]["Repaircharge"]["Smallest"] = 999999999;
                  this.Cache[cname]["RepairTime"]["Largest"] = 0;

                  this.Cache[cname]["RepairTime"][MaelstromTools.Statics.Infantry] = ncity.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Infantry, false);
                  this.Cache[cname]["RepairTime"][MaelstromTools.Statics.Vehicle] = ncity.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Vehicle, false);
                  this.Cache[cname]["RepairTime"][MaelstromTools.Statics.Aircraft] = ncity.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Aircraft, false);
                  this.Cache[cname]["RepairTime"]["Maximum"] = ncity.GetResourceMaxStorage(ClientLib.Base.EResourceType.RepairChargeInf);
                  this.Cache[cname]["Repaircharge"][MaelstromTools.Statics.Infantry] = ncity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeInf);
                  this.Cache[cname]["Repaircharge"][MaelstromTools.Statics.Vehicle] = ncity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeVeh);
                  this.Cache[cname]["Repaircharge"][MaelstromTools.Statics.Aircraft] = ncity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeAir);

                  if (this.Cache[cname]["Repaircharge"][MaelstromTools.Statics.Infantry] < this.Cache[cname]["Repaircharge"]["Smallest"]) {
                    this.Cache[cname]["Repaircharge"]["Smallest"] = this.Cache[cname]["Repaircharge"][MaelstromTools.Statics.Infantry];
                  }
                  if (this.Cache[cname]["Repaircharge"][MaelstromTools.Statics.Vehicle] < this.Cache[cname]["Repaircharge"]["Smallest"]) {
                    this.Cache[cname]["Repaircharge"]["Smallest"] = this.Cache[cname]["Repaircharge"][MaelstromTools.Statics.Vehicle];
                  }
                  if (this.Cache[cname]["Repaircharge"][MaelstromTools.Statics.Aircraft] < this.Cache[cname]["Repaircharge"]["Smallest"]) {
                    this.Cache[cname]["Repaircharge"]["Smallest"] = this.Cache[cname]["Repaircharge"][MaelstromTools.Statics.Aircraft];
                  }

                  if (this.Cache[cname]["RepairTime"][MaelstromTools.Statics.Infantry] > this.Cache[cname]["RepairTime"]["Largest"]) {
                    this.Cache[cname]["RepairTime"]["Largest"] = this.Cache[cname]["RepairTime"][MaelstromTools.Statics.Infantry];
                    RepLargest = "Infantry";
                  }
                  if (this.Cache[cname]["RepairTime"][MaelstromTools.Statics.Vehicle] > this.Cache[cname]["RepairTime"]["Largest"]) {
                    this.Cache[cname]["RepairTime"]["Largest"] = this.Cache[cname]["RepairTime"][MaelstromTools.Statics.Vehicle];
                    RepLargest = "Vehicle";
                  }
                  if (this.Cache[cname]["RepairTime"][MaelstromTools.Statics.Aircraft] > this.Cache[cname]["RepairTime"]["Largest"]) {
                    this.Cache[cname]["RepairTime"]["Largest"] = this.Cache[cname]["RepairTime"][MaelstromTools.Statics.Aircraft];
                    RepLargest = "Aircraft";
                  }

                  //PossibleAttacks and MaxAttacks fixes
                  var offHealth = ncity.GetOffenseConditionInPercent();
                  if (RepLargest !== '') {
                    this.Cache[cname]["RepairTime"]["LargestDiv"] = this.Cache[cname]["RepairTime"][RepLargest];
                    var i = Math.ceil(this.Cache[cname]["Repaircharge"].Smallest / this.Cache[cname]["RepairTime"].LargestDiv); //fix
                    var j = this.Cache[cname]["Repaircharge"].Smallest / this.Cache[cname]["RepairTime"].LargestDiv;
                    if (offHealth !== 100) { i--; i += '*';} // Decrease number of attacks by 1 when unit unhealthy. Additional visual info: asterisk when units aren't healthy
                    this.Cache[cname]["RepairTime"]["PossibleAttacks"] = i;
                    var k = this.Cache[cname]["RepairTime"].Maximum / this.Cache[cname]["RepairTime"].LargestDiv;
                    this.Cache[cname]["RepairTime"]["MaxAttacks"] = Math.ceil(k); //fix
                  } else {
                    this.Cache[cname]["RepairTime"]["LargestDiv"] = 0;
                    this.Cache[cname]["RepairTime"]["PossibleAttacks"] = 0;
                    this.Cache[cname]["RepairTime"]["MaxAttacks"] = 0;
                  }

                  var unitsData = ncity.get_CityUnitsData();
                  this.Cache[cname]["Base"] = Object();
                  this.Cache[cname]["Base"]["Level"] = MaelstromTools.Wrapper.GetBaseLevel(ncity);
                  this.Cache[cname]["Base"]["UnitLimit"] = ncity.GetBuildingSlotLimit(); //ncity.GetNumBuildings();
                  this.Cache[cname]["Base"]["TotalHeadCount"] = ncity.GetBuildingSlotCount();
                  this.Cache[cname]["Base"]["FreeHeadCount"] = this.Cache[cname]["Base"]["UnitLimit"] - this.Cache[cname]["Base"]["TotalHeadCount"];
                  this.Cache[cname]["Base"]["HealthInPercent"] = ncity.GetBuildingsConditionInPercent();

                  this.Cache[cname]["Offense"] = Object();
                  this.Cache[cname]["Offense"]["Level"] = (Math.floor(ncity.get_LvlOffense() * 100) / 100).toFixed(2);
                  this.Cache[cname]["Offense"]["UnitLimit"] = unitsData.get_UnitLimitOffense();
                  this.Cache[cname]["Offense"]["TotalHeadCount"] = unitsData.get_TotalOffenseHeadCount();
                  this.Cache[cname]["Offense"]["FreeHeadCount"] = unitsData.get_FreeOffenseHeadCount();
                  this.Cache[cname]["Offense"]["HealthInPercent"] = offHealth > 0 ? offHealth : 0;

                  this.Cache[cname]["Defense"] = Object();
                  this.Cache[cname]["Defense"]["Level"] = (Math.floor(ncity.get_LvlDefense() * 100) / 100).toFixed(2);
                  this.Cache[cname]["Defense"]["UnitLimit"] = unitsData.get_UnitLimitDefense();
                  this.Cache[cname]["Defense"]["TotalHeadCount"] = unitsData.get_TotalDefenseHeadCount();
                  this.Cache[cname]["Defense"]["FreeHeadCount"] = unitsData.get_FreeDefenseHeadCount();
                  this.Cache[cname]["Defense"]["HealthInPercent"] = ncity.GetDefenseConditionInPercent() > 0 ? ncity.GetDefenseConditionInPercent() : 0;

                  //console.log(ncity.get_CityUnitsData().get_UnitLimitOffense() + " / " + ncity.get_CityUnitsData().get_TotalOffenseHeadCount() + " = " + ncity.get_CityUnitsData().get_FreeOffenseHeadCount());
                  //console.log(ncity.get_CityUnitsData().get_UnitLimitDefense() + " / " + ncity.get_CityUnitsData().get_TotalDefenseHeadCount() + " = " + ncity.get_CityUnitsData().get_FreeDefenseHeadCount());
                }
              } catch (e) {
                console.log("MaelstromTools.RepairTime.updateCache: ", e);
              }
            },

            setWidgetLabels: function () {
              try {
                this.Widget.removeAll();
                var rowIdx = 1;

                rowIdx = this.createOverviewLabels(rowIdx);
                rowIdx = this.createRepairchargeLabels(rowIdx);
              } catch (e) {
                console.log("MaelstromTools.RepairTime.setWidgetLabels: ", e);
              }
            },

            createRepairchargeLabels: function (rowIdx) {
              try {
                var colIdx = 2;
                MaelstromTools.Util.addLabel(this.Widget, rowIdx++, colIdx++, "Repaircharges", null, 'left', null, null, 3);
                colIdx = 2;

                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Statics.Infantry, 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Statics.Vehicle, 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Statics.Aircraft, 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Repairtime", 80, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Attacks", 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Next at", 80, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Max+1 at", 80, 'right');

                rowIdx++;
                for (var cityName in this.Cache) {
                  var cityCache = this.Cache[cityName];
                  if (cityCache.Offense.UnitLimit == 0) {
                    continue;
                  }
                  colIdx = 1;
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityName, 80, 'left');

                  // Skip bases with no armies
                  if (cityCache.Offense.UnitLimit > 0) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatTimespan(cityCache.RepairTime.Infantry), 60, 'right', null, (cityCache.RepairTime.Infantry == cityCache.RepairTime.LargestDiv ? "yellow" : "white"));
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatTimespan(cityCache.RepairTime.Vehicle), 60, 'right', null, (cityCache.RepairTime.Vehicle == cityCache.RepairTime.LargestDiv ? "yellow" : "white"));
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatTimespan(cityCache.RepairTime.Aircraft), 60, 'right', null, (cityCache.RepairTime.Aircraft == cityCache.RepairTime.LargestDiv ? "yellow" : "white"));
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatTimespan(cityCache.Repaircharge.Smallest), 80, 'right');
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.RepairTime.PossibleAttacks + " / " + cityCache.RepairTime.MaxAttacks, 60, 'right', null, (cityCache.Offense.HealthInPercent !== 100 ? 'red' : null)); // mark red when unhealthy
                    var i = cityCache.RepairTime.LargestDiv * cityCache.RepairTime.PossibleAttacks;
                    var j = cityCache.RepairTime.LargestDiv * cityCache.RepairTime.MaxAttacks;
                    (i>0) ? MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatTimespan(i), 80, 'right', null, (i > cityCache.RepairTime.Maximum ? "yellow" : "white")) : colIdx++; /// yellow if more than Maximum RT
                    (j>0) ? MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatTimespan(j), 80, 'right') : colIdx++;
                  } else {
                    colIdx += 7;
                  }

                  colIdx += 4;
                  MaelstromTools.Util.addElement(this.Widget, rowIdx, colIdx++, MaelstromTools.Util.getAccessBaseButton(cityName, PerforceChangelist >= 376877 ? ClientLib.Data.PlayerAreaViewMode.pavmPlayerOffense : webfrontend.gui.PlayArea.PlayArea.modes.EMode_PlayerOffense));
                  rowIdx += 2;
                }

                return rowIdx;
              } catch (e) {
                console.log("MaelstromTools.RepairTime.createRepairchargeLabels: ", e);
              }
            },

            createOverviewLabels: function (rowIdx) {
              try {
                var colIdx = 2;

                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx, "Base", 60, 'right');
                colIdx += 3;
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx, "Defense", 60, 'right');
                colIdx += 3;
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx, "Army", 60, 'right');

                rowIdx++;
                colIdx = 2;

                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Level", 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Buildings", 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Health", 60, 'right');

                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Level", 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Buildings", 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Health", 60, 'right');

                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Level", 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Units", 60, 'right');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Health", 60, 'right');

                rowIdx++;
                for (var cityName in this.Cache) {
                  var cityCache = this.Cache[cityName];
                  colIdx = 1;

                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityName, 80, 'left');

                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.Base.Level, 60, 'right');
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.Base.TotalHeadCount + " / " + cityCache.Base.UnitLimit, 60, 'right', null, (cityCache.Base.FreeHeadCount >= 1 ? "red" : "white"));
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.Base.HealthInPercent + "%", 60, 'right', null, (cityCache.Base.HealthInPercent < 25 ? "red" : (cityCache.Base.HealthInPercent < 100 ? "yellow" : "white")));

                  if (cityCache.Defense.UnitLimit > 0) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.Defense.Level, 60, 'right');
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.Defense.TotalHeadCount + " / " + cityCache.Defense.UnitLimit, 60, 'right', null, (cityCache.Defense.FreeHeadCount >= 5 ? "red" : (cityCache.Defense.FreeHeadCount >= 3 ? "yellow" : "white")));
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.Defense.HealthInPercent + "%", 60, 'right', null, (cityCache.Defense.HealthInPercent < 25 ? "red" : (cityCache.Defense.HealthInPercent < 100 ? "yellow" : "white")));
                  } else {
                    colIdx += 3;
                  }

                  // Skip bases with no armies
                  if (cityCache.Offense.UnitLimit > 0) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.Offense.Level, 60, 'right');
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.Offense.TotalHeadCount + " / " + cityCache.Offense.UnitLimit, 60, 'right', null, (cityCache.Offense.FreeHeadCount >= 10 ? "red" : (cityCache.Offense.FreeHeadCount >= 5 ? "yellow" : "white")));
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.Offense.HealthInPercent + "%", 60, 'right', null, (cityCache.Offense.HealthInPercent < 25 ? "red" : (cityCache.Offense.HealthInPercent < 100 ? "yellow" : "white")));
                  } else {
                    colIdx += 3;
                  }

                  MaelstromTools.Util.addElement(this.Widget, rowIdx, colIdx++, MaelstromTools.Util.getAccessBaseButton(cityName));
                  rowIdx += 2;
                }
                return rowIdx;
              } catch (e) {
                console.log("MaelstromTools.RepairTime.createOverviewLabels: ", e);
              }
            }

          }
        });

        // define ResourceOverview
        qx.Class.define("MaelstromTools.ResourceOverview", {
          type: "singleton",
          extend: MaelstromTools.DefaultObject,
          members: {
            Table: null,
            Model: null,

            updateCache: function () {
              try {
                MT_Cache.updateCityCache();
                this.Cache = Object();

                for (var cname in MT_Cache.Cities) {
                  var ncity = MT_Cache.Cities[cname].Object;
                  var mtime = ClientLib.Data.MainData.GetInstance().get_Time();

                  this.Cache[cname] = Object();
                  this.Cache[cname][MaelstromTools.Statics.Tiberium] = ncity.GetResourceCount(ClientLib.Base.EResourceType.Tiberium);
                  this.Cache[cname][MaelstromTools.Statics.Tiberium + "Max"] = ncity.GetResourceMaxStorage(ClientLib.Base.EResourceType.Tiberium);
                  this.Cache[cname][MaelstromTools.Statics.Tiberium + "Full"] = mtime.GetJSStepTime(ncity.GetResourceStorageFullStep(ClientLib.Base.EResourceType.Tiberium));
                  this.Cache[cname][MaelstromTools.Statics.Crystal] = ncity.GetResourceCount(ClientLib.Base.EResourceType.Crystal);
                  this.Cache[cname][MaelstromTools.Statics.Crystal + "Max"] = ncity.GetResourceMaxStorage(ClientLib.Base.EResourceType.Crystal);
                  this.Cache[cname][MaelstromTools.Statics.Crystal + "Full"] = mtime.GetJSStepTime(ncity.GetResourceStorageFullStep(ClientLib.Base.EResourceType.Crystal));
                  this.Cache[cname][MaelstromTools.Statics.Power] = ncity.GetResourceCount(ClientLib.Base.EResourceType.Power);
                  this.Cache[cname][MaelstromTools.Statics.Power + "Max"] = ncity.GetResourceMaxStorage(ClientLib.Base.EResourceType.Power);
                  this.Cache[cname][MaelstromTools.Statics.Power + "Full"] = mtime.GetJSStepTime(ncity.GetResourceStorageFullStep(ClientLib.Base.EResourceType.Power));
                }

              } catch (e) {
                console.log("MaelstromTools.ResourceOverview.updateCache: ", e);
              }
            },
/*
            setWidgetLabelsTable: function () {
              try {
                if (!this.Table) {
                  this.Widget.setLayout(new qx.ui.layout.HBox());

                  this.Model = new qx.ui.table.model.Simple();
                  this.Model.setColumns(["City", "Tib. Storage", "Tiberium", "Full", "Crystal", "Full", "Power", "Storage", "Full"]);
                  this.Table = new qx.ui.table.Table(this.Model);
                  this.Widget.add(this.Table, {
                    flex: 1
                  });
                }

                var Totals = Object();
                Totals[MaelstromTools.Statics.Tiberium] = 0;
                Totals[MaelstromTools.Statics.Crystal] = 0;
                Totals[MaelstromTools.Statics.Power] = 0;
                Totals[MaelstromTools.Statics.Tiberium + "Max"] = 0;
                Totals[MaelstromTools.Statics.Power + "Max"] = 0;

                var rowData = [];

                for (var cityName in this.Cache) {
                  var cityCache = this.Cache[cityName];

                  Totals[MaelstromTools.Statics.Tiberium] += cityCache[MaelstromTools.Statics.Tiberium];
                  Totals[MaelstromTools.Statics.Crystal] += cityCache[MaelstromTools.Statics.Crystal];
                  Totals[MaelstromTools.Statics.Power] += cityCache[MaelstromTools.Statics.Power];
                  Totals[MaelstromTools.Statics.Tiberium + "Max"] += cityCache[MaelstromTools.Statics.Tiberium + 'Max'];
                  Totals[MaelstromTools.Statics.Power + "Max"] += cityCache[MaelstromTools.Statics.Power + 'Max'];

                  rowData.push([
                    cityName,
                    MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Tiberium + 'Max']),
                    MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Tiberium]),
                    MaelstromTools.Wrapper.GetDateTimeString(cityCache[MaelstromTools.Statics.Tiberium + 'Full']),
                    MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Crystal]),
                    MaelstromTools.Wrapper.GetDateTimeString(cityCache[MaelstromTools.Statics.Crystal + 'Full']),
                    MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Power]),
                    MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Power + 'Max']),
                    MaelstromTools.Wrapper.GetDateTimeString(cityCache[MaelstromTools.Statics.Power + 'Full'])
                    ]);
                }
                rowData.push([
                  'Total resources',
                  MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Tiberium + 'Max']),
                  MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Tiberium]),
                  '',
                  MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Crystal]),
                  '',
                  MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Power]),
                  MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Power + 'Max']),
                  ''
                  ]);

                this.Model.setData(rowData);
              } catch (e) {
                console.log("MaelstromTools.ResourceOverview.setWidgetLabels: ", e);
              }
            },

            */
            setWidgetLabels: function () {
              try {
                this.Widget.removeAll();

                var first = true;
                var rowIdx = 2;
                var Totals = Object();
                var colIdx = 1;
                Totals[MaelstromTools.Statics.Tiberium] = 0;
                Totals[MaelstromTools.Statics.Crystal] = 0;
                Totals[MaelstromTools.Statics.Power] = 0;
                Totals[MaelstromTools.Statics.Tiberium + "Max"] = 0;
                Totals[MaelstromTools.Statics.Power + "Max"] = 0;

                for (var cityName in this.Cache) {
                  var cityCache = this.Cache[cityName];
                  Totals[MaelstromTools.Statics.Tiberium] += cityCache[MaelstromTools.Statics.Tiberium];
                  Totals[MaelstromTools.Statics.Crystal] += cityCache[MaelstromTools.Statics.Crystal];
                  Totals[MaelstromTools.Statics.Power] += cityCache[MaelstromTools.Statics.Power];
                  Totals[MaelstromTools.Statics.Tiberium + "Max"] += cityCache[MaelstromTools.Statics.Tiberium + 'Max'];
                  Totals[MaelstromTools.Statics.Power + "Max"] += cityCache[MaelstromTools.Statics.Power + 'Max'];

                  colIdx = 1;

                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityName, 100, 'left');
                  if (first) {
                    MaelstromTools.Util.addLabel(this.Widget, 1, colIdx, 'Max. storage', 80, 'left');
                  }
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Tiberium + 'Max']), 80, 'right');

                  if (first) {
                    MaelstromTools.Util.addImage(this.Widget, 1, colIdx, MaelstromTools.Util.getImage(MaelstromTools.Statics.Tiberium));
                  }
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Tiberium]), 60, 'right', null, (cityCache[MaelstromTools.Statics.Tiberium] >= cityCache[MaelstromTools.Statics.Tiberium + 'Max'] ? "red" : (cityCache[MaelstromTools.Statics.Tiberium] >= (0.75 * cityCache[MaelstromTools.Statics.Tiberium + 'Max']) ? "yellow" : "white")));

                  if (cityCache[MaelstromTools.Statics.Tiberium] < cityCache[MaelstromTools.Statics.Tiberium + 'Max']) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.GetDateTimeString(cityCache[MaelstromTools.Statics.Tiberium + 'Full']), 100, 'right', null, (cityCache[MaelstromTools.Statics.Tiberium] >= (0.75 * cityCache[MaelstromTools.Statics.Tiberium + 'Max']) ? "yellow" : "white"));
                  } else {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Storage full!", 100, 'right', null, "red");
                  }
                  if (first) {
                    MaelstromTools.Util.addImage(this.Widget, 1, colIdx, MaelstromTools.Util.getImage(MaelstromTools.Statics.Crystal));
                  }
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Crystal]), 60, 'right', null, (cityCache[MaelstromTools.Statics.Crystal] >= cityCache[MaelstromTools.Statics.Crystal + 'Max'] ? "red" : (cityCache[MaelstromTools.Statics.Crystal] >= (0.75 * cityCache[MaelstromTools.Statics.Crystal + 'Max']) ? "yellow" : "white")));

                  if (cityCache[MaelstromTools.Statics.Crystal] < cityCache[MaelstromTools.Statics.Crystal + 'Max']) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.GetDateTimeString(cityCache[MaelstromTools.Statics.Crystal + 'Full']), 100, 'right', null, (cityCache[MaelstromTools.Statics.Crystal] >= (0.75 * cityCache[MaelstromTools.Statics.Crystal + 'Max']) ? "yellow" : "white"));
                  } else {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Storage full!", 100, 'right', null, "red");
                  }

                  if (first) {
                    MaelstromTools.Util.addImage(this.Widget, 1, colIdx, MaelstromTools.Util.getImage(MaelstromTools.Statics.Power));
                  }
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Power]), 60, 'right', null, (cityCache[MaelstromTools.Statics.Power] >= cityCache[MaelstromTools.Statics.Power + 'Max'] ? "red" : (cityCache[MaelstromTools.Statics.Power] >= (0.75 * cityCache[MaelstromTools.Statics.Power + 'Max']) ? "yellow" : "white")));

                  if (first) {
                    MaelstromTools.Util.addLabel(this.Widget, 1, colIdx, 'Storage', 80, 'left');
                  }
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(cityCache[MaelstromTools.Statics.Power + 'Max']), 80, 'right');

                  if (cityCache[MaelstromTools.Statics.Power] < cityCache[MaelstromTools.Statics.Power + 'Max']) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.GetDateTimeString(cityCache[MaelstromTools.Statics.Power + 'Full']), 100, 'right', null, (cityCache[MaelstromTools.Statics.Power] >= (0.75 * cityCache[MaelstromTools.Statics.Power + 'Max']) ? "yellow" : "white"));
                  } else {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Storage full!", 100, 'right', null, "red");
                  }


                  MaelstromTools.Util.addElement(this.Widget, rowIdx, colIdx++, MaelstromTools.Util.getAccessBaseButton(cityName));
                  rowIdx++;
                  first = false;
                }

                colIdx = 1;
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Total resources", 100, 'left', 'bold');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Tiberium + 'Max']), 80, 'right', 'bold');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Tiberium]), 60, 'right', 'bold');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, Math.round(Totals[MaelstromTools.Statics.Tiberium] / Totals[MaelstromTools.Statics.Tiberium + 'Max'] * 100) + '%', 100, 'center', 'bold');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Crystal]), 60, 'right', 'bold');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, Math.round(Totals[MaelstromTools.Statics.Crystal] / Totals[MaelstromTools.Statics.Tiberium + 'Max'] * 100) + '%', 100, 'center', 'bold');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Power]), 60, 'right', 'bold');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.FormatNumbersCompact(Totals[MaelstromTools.Statics.Power + 'Max']), 80, 'right', 'bold');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, Math.round(Totals[MaelstromTools.Statics.Power] / Totals[MaelstromTools.Statics.Power + 'Max'] * 100) + '%', 100, 'center', 'bold');
              } catch (e) {
                console.log("MaelstromTools.ResourceOverview.setWidgetLabels: ", e);
              }
            }
          }
        });

        // define BaseStatus
        qx.Class.define("MaelstromTools.BaseStatus", {
          type: "singleton",
          extend: MaelstromTools.DefaultObject,
          members: {
            CityMenuButtons: null,

            //City.SetDedicatedSupport
            //City.RecallDedicatedSupport
            //City.get_SupportDedicatedBaseId
            //System.String get_SupportDedicatedBaseName ()
            updateCache: function () {
              try {
                MT_Cache.updateCityCache();
                this.Cache = Object();

                for (var cname in MT_Cache.Cities) {
                  var ncity = MT_Cache.Cities[cname].Object;
                  var player = ClientLib.Data.MainData.GetInstance().get_Player();
                  var supportData = ncity.get_SupportData();
                  //System.String get_PlayerName ()
                  this.Cache[cname] = Object();
                  // Movement lock
                  this.Cache[cname]["HasCooldown"] = ncity.get_hasCooldown();
                  this.Cache[cname]["CooldownEnd"] = Math.max(ncity.get_MoveCooldownEndStep(), ncity.get_MoveRestictionEndStep());
                  this.Cache[cname]["MoveCooldownEnd"] = ncity.get_MoveCooldownEndStep();
                  this.Cache[cname]["MoveLockdownEnd"] = ncity.get_MoveRestictionEndStep();
                  this.Cache[cname]["IsProtected"] = ncity.get_isProtected();
                  this.Cache[cname]["ProtectionEnd"] = ncity.get_ProtectionEndStep();
                  this.Cache[cname]["IsProtected"] = ncity.get_ProtectionEndStep();
                  this.Cache[cname]["IsAlerted"] = ncity.get_isAlerted();

                  // Supportweapon
                  if (supportData == null) {
                    this.Cache[cname]["HasSupportWeapon"] = false;
                  } else {
                    this.Cache[cname]["HasSupportWeapon"] = true;
                    if (ncity.get_SupportDedicatedBaseId() > 0) {
                      this.Cache[cname]["SupportedCityId"] = ncity.get_SupportDedicatedBaseId();
                      this.Cache[cname]["SupportedCityName"] = ncity.get_SupportDedicatedBaseName();
                      var coordId = ncity.get_SupportDedicatedBaseCoordId();
                      this.Cache[cname]["SupportedCityX"] = (coordId & 0xffff);
                      this.Cache[cname]["SupportedCityY"] = ((coordId >> 0x10) & 0xffff);
                      /*
                      var cityX = ncity.get_PosX();
                      var cityY = ncity.get_PosY();
                      
                      var mainData = ClientLib.Data.MainData.GetInstance();
                      var visRegion = ClientLib.Vis.VisMain.GetInstance().get_Region();

                      var gridW = visRegion.get_GridWidth();
                      var gridH = visRegion.get_GridHeight();
                      //console.log(cname);
                      //console.log("x: " + cityX + " y: " + cityY);

                      var worldObj = visRegion.GetObjectFromPosition((this.Cache[cname]["SupportedCityX"]*gridW), (this.Cache[cname]["SupportedCityY"]*gridH));
                      
                      //ClientLib.Vis.Region.RegionCity
                      if (worldObj == null) {
                        this.Cache[cname]["SupportTime"] = "";
                      } else {
                        console.log(cname);
                        //console.log(worldObj.CalibrationSupportDuration());
                        var weaponState = worldObj.get_SupportWeaponStatus();
                        
                        //console.log(this.calcDuration(ncity, worldObj));
                        var cities = ClientLib.Data.MainData.GetInstance().get_Cities();
                        cities.set_CurrentOwnCityId(ncity.get_Id());
                        var status = worldObj.get_SupportWeaponStatus();
                        var server = mainData.get_Server();
                        //console.log(worldObj.CalculateSupportCalibrationEndStep(worldObj.get_SupportData(), worldObj.get_SupportWeapon()));
                        console.log(status);
                        console.log(currStep);
                        this.Cache[cname]["SupportTime"] = mainData.get_Time().GetTimespanString(worldObj.CalculateSupportCalibrationEndStep(worldObj.get_SupportData(), worldObj.get_SupportWeapon()), currStep);
                        //status.Status&ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating)==ClientLib.Vis.Region.ESupportWeaponStatus.Calibrating
                        var currStep = ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep();
                        //this.Cache[cname]["SupportTime"] = webfrontend.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Time().GetTimeSpan(Math.max(0, status.CalibrationEndStep) - currStep), false);
                        //this.Cache[cname]["SupportTime"] = ClientLib.Data.MainData.GetInstance().get_Time().GetTimespanString(weaponState.CalibrationEndStep, currStep);
                        //this.Cache[cname]["SupportTime"] = webfrontend.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Time().GetTimeSpan(Math.max(0, worldObj.CalculateSupportCalibrationEndStep(worldObj.get_SupportData(), worldObj.get_SupportWeapon()) - currStep)), false);
                      //console.log(this.Cache[cname]["SupportTime"]);
                      }
                       */
                    } else { // prevent reference to undefined property ReferenceError
                      this.Cache[cname]["SupportedCityId"] = null;
                      this.Cache[cname]["SupportedCityName"] = null;
                      this.Cache[cname]["SupportedCityX"] = null;
                      this.Cache[cname]["SupportedCityY"] = null;
                    }
                    this.Cache[cname]["SupportRange"] = MaelstromTools.Wrapper.GetSupportWeaponRange(ncity.get_SupportWeapon());
                    var techName = ClientLib.Base.Tech.GetTechNameFromTechId(supportData.get_Type(), player.get_Faction());
                    this.Cache[cname]["SupportName"] = ClientLib.Base.Tech.GetProductionBuildingNameFromFaction(techName, player.get_Faction());
                    this.Cache[cname]["SupportLevel"] = supportData.get_Level();
                    //this.Cache[cname]["SupportBuilding"] = ncity.get_CityBuildingsData().GetUniqueBuildingByTechName(techName);
                    //console.log(this.Cache[cname]["SupportBuilding"]);
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.BaseStatus.updateCache: ", e);
              }
            },
            /*
            calcDuration: function(currOwnCity, regionCity) {
              var targetCity = MaelstromTools.Wrapper.GetCity(regionCity.get_Id());
              
              var supportBase=regionCity.get_SupportData();
              if(supportBase == null)
              {
                return -1;
              }
              var weapon=regionCity.get_SupportWeapon();
              if(weapon == null)
              {
                return -1;
              }
              if(currOwnCity.get_Id() == regionCity.get_Id())
              {
                if(supportBase.get_Magnitude() == 0) {
                  return -1;
                }
                return 0;
              }
              var dx=(currOwnCity.get_X() - targetCity.get_PosX());
              var dy=(currOwnCity.get_Y() - targetCity.get_PosY());
              var distance=((dx * dx) + (dy * dy));
              return Math.floor((weapon.pt + (weapon.tpf * Math.floor((Math.sqrt(distance) + 0.5)))));
            },*/

            setWidgetLabels: function () {
              try {
                this.Widget.removeAll();
                var rowIdx = 1;
                var colIdx = 2;

                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Cooldown", 85, 'left');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Protection", 85, 'left');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Available weapon", 140, 'left');
                MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "Calibrated on", 140, 'left');

                //colIdx++;
                var rowIdxRecall = rowIdx;
                var colIdxRecall = 0;
                var supportWeaponCount = 0;

                rowIdx++;
                for (var cityName in this.Cache) {
                  var cityCache = this.Cache[cityName];
                  colIdx = 1;

                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityName, 100, 'left', null, (cityCache.IsAlerted ? 'red' : null));

                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.GetStepTime(cityCache.CooldownEnd), 70, 'right');
                  MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, MaelstromTools.Wrapper.GetStepTime(cityCache.ProtectionEnd), 70, 'right');

                  if (!cityCache.HasSupportWeapon) {
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, "none", 140, 'left');
                    colIdx += 2;
                  } else {
                    supportWeaponCount++;
                    MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.SupportName + " (" + cityCache.SupportLevel + ")", 140, 'left');

                    if (cityCache.SupportedCityId > 0) {
                      MaelstromTools.Util.addLabel(this.Widget, rowIdx, colIdx++, cityCache.SupportedCityName, 140, 'left');
                      colIdxRecall = colIdx;
                      MaelstromTools.Util.addElement(this.Widget, rowIdx, colIdx++, this.getRecallButton(cityName));
                    } else {
                      colIdx += 2;
                    }
                  }

                  MaelstromTools.Util.addElement(this.Widget, rowIdx, colIdx++, MaelstromTools.Util.getAccessBaseButton(cityName));
                  MaelstromTools.Util.addElement(this.Widget, rowIdx, colIdx++, MaelstromTools.Util.getFocusBaseButton(cityName));

                  rowIdx++;
                }

                if (supportWeaponCount > 0 && colIdxRecall > 0) {
                  MaelstromTools.Util.addElement(this.Widget, rowIdxRecall, colIdxRecall, this.getRecallAllButton());
                }
              } catch (e) {
                console.log("MaelstromTools.BaseStatus.setWidgetLabels: ", e);
              }
            },

            getRecallAllButton: function () {
              var button = new qx.ui.form.Button("Recall all").set({
                appearance: "button-text-small",
                toolTipText: "Recall all support weapons",
                width: 100,
                height: 20
              });
              button.addListener("execute", function (e) {
                MaelstromTools.Util.recallAllSupport();
              }, this);
              return button;
            },

            getRecallButton: function (cityName) {
              var button = new qx.ui.form.Button("Recall").set({
                appearance: "button-text-small",
                toolTipText: "Recall support to " + cityName,
                width: 100,
                height: 20
              });
              button.addListener("execute", function (e) {
                MaelstromTools.Util.recallSupport(cityName);
              }, this);
              return button;
            }
            /*
            getCalibrateAllOnSelectedBaseButton: function() {
              var button = new qx.ui.form.Button("Calibrate all weapons on selected base").set({
                appearance: "button-text-small",
                toolTipText: "Calibrate all weapons",
                width: 100,
                height: 20
              });
              button.addListener("execute", function(e){
                Util.calibrateWholeSupport(ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId());
              }, this);
              return button;
            }*/


          }
        });

        // define Statics
        qx.Class.define("MaelstromTools.Statics", {
          type: "static",
          statics: {
            Tiberium: 'Tiberium',
            Crystal: 'Crystal',
            Power: 'Power',
            Dollar: 'Dollar',
            Research: 'Research',
            Vehicle: "Vehicle",
            Aircraft: "Aircraft",
            Infantry: "Infantry",

            LootTypeName: function (ltype) {
              switch (ltype) {
                case ClientLib.Base.EResourceType.Tiberium:
                  return MaelstromTools.Statics.Tiberium;
                  break;
                case ClientLib.Base.EResourceType.Crystal:
                  return MaelstromTools.Statics.Crystal;
                  break;
                case ClientLib.Base.EResourceType.Power:
                  return MaelstromTools.Statics.Power;
                  break;
                case ClientLib.Base.EResourceType.Gold:
                  return MaelstromTools.Statics.Dollar;
                  break;
                default:
                  return "";
                  break;
              }
            }
          }
        });

        // define Util
        //ClientLib.Data.Cities.prototype.GetCityByCoord
        //ClientLib.Data.City.prototype.get_HasIncommingAttack
        qx.Class.define("MaelstromTools.Util", {
          type: "static",
          statics: {
            ArrayUnique: function (array) {
              var o = {};
              var l = array.length;
              r = [];
              for (var i = 0; i < l; i++) o[array[i]] = array[i];
              for (var i in o) r.push(o[i]);
              return r;
            },

            ArraySize: function (array) {
              var size = 0;
              for (var key in array)
              if (array.hasOwnProperty(key)) size++;
              return size;
            },

            addLabel: function (widget, rowIdx, colIdx, value, width, textAlign, font, color, colSpan) {
              try {
                var label = new qx.ui.basic.Label().set({
                  value: Lang.gt(value)
                });
                if (width) {
                  label.setWidth(width);
                }
                if (textAlign) {
                  label.setTextAlign(textAlign);
                }
                if (color) {
                  label.setTextColor(color);
                }
                if (font) {
                  label.setFont(font);
                }
                if (!colSpan || colSpan == 0) {
                  colSpan = 1;
                }

                widget.add(label, {
                  row: rowIdx,
                  column: colIdx,
                  colSpan: colSpan
                });
              } catch (e) {
                console.log("MaelstromTools.Util.addLabel: ", e);
              }
            },

            addElement: function (widget, rowIdx, colIdx, element, colSpan) {
              try {
                if (!colSpan || colSpan == 0) {
                  colSpan = 1;
                }
                widget.add(element, {
                  row: rowIdx,
                  column: colIdx,
                  colSpan: colSpan
                });
              } catch (e) {
                console.log("MaelstromTools.Util.addElement: ", e);
              }
            },

            addImage: function (widget, rowIdx, colIdx, image) {
              try {
                widget.add(image, {
                  row: rowIdx,
                  column: colIdx
                });
              } catch (e) {
                console.log("MaelstromTools.Util.addImage: ", e);
              }
            },

            getImage: function (name) {
              var image = new qx.ui.basic.Image(MT_Base.images[name]);
              image.setScale(true);
              image.setWidth(20);
              image.setHeight(20);
              return image;
            },

            getAccessBaseButton: function (cityName, viewMode) {
              try {
                var cityButton = new qx.ui.form.Button(null, MT_Base.images["AccessBase"]).set({
                  appearance: "button-detailview-small",
                  toolTipText: Lang.gt("Access") + " " + cityName,
                  width: 20,
                  height: 20,
                  marginLeft: 5
                });
                cityButton.setUserData("cityId", MT_Cache.Cities[cityName].ID);
                cityButton.setUserData("viewMode", viewMode);
                cityButton.addListener("execute", function (e) {
                  MaelstromTools.Util.accessBase(e.getTarget().getUserData("cityId"), e.getTarget().getUserData("viewMode"));
                }, this);
                return cityButton;
              } catch (e) {
                console.log("MaelstromTools.Util.getAccessBaseButton: ", e);
              }
            },

            getFocusBaseButton: function (cityName) {
              try {
                var cityButton = new qx.ui.form.Button(null, MT_Base.images["FocusBase"]).set({
                  appearance: "button-detailview-small",
                  toolTipText: Lang.gt("Focus on") + " " + cityName,
                  width: 20,
                  height: 20,
                  marginLeft: 5
                });
                cityButton.setUserData("cityId", MT_Cache.Cities[cityName].ID);
                cityButton.addListener("execute", function (e) {
                  MaelstromTools.Util.focusBase(e.getTarget().getUserData("cityId"));
                }, this);
                return cityButton;
              } catch (e) {
                console.log("MaelstromTools.Util.getFocusBaseButton: ", e);
              }
            },

            accessBase: function (cityId, viewMode) {
              try {
                if (cityId > 0) {
                  var ncity = MaelstromTools.Wrapper.GetCity(cityId);

                  if (ncity != null && !ncity.get_IsGhostMode()) {
                    if (viewMode) {
                      webfrontend.gui.UtilView.openVisModeInMainWindow(viewMode, cityId, false);
                    } else {
                      webfrontend.gui.UtilView.openCityInMainWindow(cityId);
                    }
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.Util.accessBase: ", e);
              }
            },
            focusBase: function (cityId) {
              try {
                if (cityId > 0) {
                  var ncity = MaelstromTools.Wrapper.GetCity(cityId);

                  if (ncity != null && !ncity.get_IsGhostMode()) {
                    webfrontend.gui.UtilView.centerCityOnRegionViewWindow(cityId);
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.Util.focusBase: ", e);
              }
            },

            recallSupport: function (cityName) {
              try {
                var ncity = MT_Cache.Cities[cityName]["Object"];
                ncity.RecallDedicatedSupport();
              } catch (e) {
                console.log("MaelstromTools.Util.recallSupport: ", e);
              }
            },

            recallAllSupport: function () {
              try {
                MT_Cache.updateCityCache();
                for (var cityName in MT_Cache.Cities) {
                  var ncity = MT_Cache.Cities[cityName]["Object"];
                  ncity.RecallDedicatedSupport();
                }
              } catch (e) {
                console.log("MaelstromTools.Util.recallAllSupport: ", e);
              }
            },

            checkIfSupportIsAllowed: function (selectedBase) {
              try {
                if (selectedBase.get_VisObjectType() != ClientLib.Vis.VisObject.EObjectType.RegionCityType) {
                  return false;
                }
                if (selectedBase.get_Type() != ClientLib.Vis.Region.RegionCity.ERegionCityType.Own && selectedBase.get_Type() != ClientLib.Vis.Region.RegionCity.ERegionCityType.Alliance) {
                  return false;
                }
                return true;
              } catch (e) {
                console.log("MaelstromTools.Util.checkIfSupportIsAllowed: ", e);
                return false;
              }
            },

            calibrateWholeSupportOnSelectedBase: function () {
              if (this.checkIfSupportIsAllowed(MT_Cache.SelectedBaseForMenu)) {
                this.calibrateWholeSupport(MT_Cache.SelectedBaseForMenu);
              }
            },

            calibrateWholeSupport: function (targetRegionCity) {
              try {
                MT_Cache.updateCityCache();
                for (var cityName in MT_Cache.Cities) {
                  var ncity = MT_Cache.Cities[cityName]["Object"];
                  //var targetCity = MaelstromTools.Wrapper.GetCity(targetCityId);
                  var weapon = ncity.get_SupportWeapon();

                  //console.log("checking support weapon for " + ncity.get_Name() + " calibrating on " + targetRegionCity.get_Name());

                  if (targetRegionCity != null && weapon != null) {
                    //console.log("city at " + ncity.get_X() + " / " + ncity.get_Y());
                    //console.log("targetRegionCity at " + targetRegionCity.get_RawX() + " / " + targetRegionCity.get_RawY());
                    //var distance = ClientLib.Base.Util.CalculateDistance(ncity.get_X(), ncity.get_Y(), targetRegionCity.get_RawX(), targetRegionCity.get_RawY());
                    var dx = (ncity.get_X() - targetRegionCity.get_RawX());
                    var dy = (ncity.get_Y() - targetRegionCity.get_RawY());
                    var distance = ((dx * dx) + (dy * dy));
                    var range = MaelstromTools.Wrapper.GetSupportWeaponRange(weapon);
                    //console.log("distance is " + distance);
                    //console.log("range isy " + range*range);
                    if (distance <= (range * range)) {
                      ncity.SetDedicatedSupport(targetRegionCity.get_Id());
                    }
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.Util.calibrateWholeSupport: ", e);
              }
            },

            // visCity : ClientLib.Vis.Region.RegionObject
            getResources: function (visCity) { // to verifier against PerforceChangelist>=376877
              try {
                var loot = new Object();
                if (visCity.get_X() < 0 || visCity.get_Y() < 0) {
                  loot["LoadState"] = 0;
                  return loot;
                }
                var currentOwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();

                var distance = ClientLib.Base.Util.CalculateDistance(currentOwnCity.get_X(), currentOwnCity.get_Y(), visCity.get_RawX(), visCity.get_RawY());
                var maxAttackDistance = ClientLib.Data.MainData.GetInstance().get_Server().get_MaxAttackDistance();
                if (distance > maxAttackDistance) {
                  loot["LoadState"] = -1;
                  return loot;
                }

                var ncity = MaelstromTools.Wrapper.GetCity(visCity.get_Id());
                /* ClientLib.Data.CityBuildings */
                //var cityBuildings = ncity.get_CityBuildingsData();
                var cityUnits = ncity.get_CityUnitsData();

                //var buildings = MaelstromTools.Wrapper.GetBuildings(cityBuildings);
                var buildings = ncity.get_Buildings().d;
                var defenseUnits = MaelstromTools.Wrapper.GetDefenseUnits(cityUnits);
                //var defenseUnits = MaelstromTools.Wrapper.GetDefenseUnits();

                /*for(var u in buildings) {
              console.log(buildings[u].get_MdbBuildingId());
              console.log("----------------");
            }*/

                var buildingLoot = MaelstromTools.Util.getResourcesPart(buildings);
                //var buildingLoot2 = MaelstromTools.Util.getResourcesPart(this.collectBuildings(ncity));

                var unitLoot = MaelstromTools.Util.getResourcesPart(defenseUnits);

                loot[MaelstromTools.Statics.Tiberium] = buildingLoot[ClientLib.Base.EResourceType.Tiberium] + unitLoot[ClientLib.Base.EResourceType.Tiberium];
                loot[MaelstromTools.Statics.Crystal] = buildingLoot[ClientLib.Base.EResourceType.Crystal] + unitLoot[ClientLib.Base.EResourceType.Crystal];
                loot[MaelstromTools.Statics.Dollar] = buildingLoot[ClientLib.Base.EResourceType.Gold] + unitLoot[ClientLib.Base.EResourceType.Gold];
                loot[MaelstromTools.Statics.Research] = buildingLoot[ClientLib.Base.EResourceType.ResearchPoints] + unitLoot[ClientLib.Base.EResourceType.ResearchPoints];
                loot["Factor"] = loot[MaelstromTools.Statics.Tiberium] + loot[MaelstromTools.Statics.Crystal] + loot[MaelstromTools.Statics.Dollar] + loot[MaelstromTools.Statics.Research];
                loot["CPNeeded"] = currentOwnCity.CalculateAttackCommandPointCostToCoord(ncity.get_X(), ncity.get_Y());
                loot["LoadState"] = (loot["Factor"] > 0 ? 1 : 0);
                loot["Total"] = loot[MaelstromTools.Statics.Research] + loot[MaelstromTools.Statics.Tiberium] + loot[MaelstromTools.Statics.Crystal] + loot[MaelstromTools.Statics.Dollar];

                /*console.log("Building loot");
                console.log( buildingLoot[ClientLib.Base.EResourceType.Tiberium] + " vs " +  buildingLoot2[ClientLib.Base.EResourceType.Tiberium]);
                console.log( buildingLoot[ClientLib.Base.EResourceType.Crystal] + " vs " +  buildingLoot2[ClientLib.Base.EResourceType.Crystal]);
                console.log( buildingLoot[ClientLib.Base.EResourceType.Gold] + " vs " +  buildingLoot2[ClientLib.Base.EResourceType.Gold]);
                console.log( buildingLoot[ClientLib.Base.EResourceType.ResearchPoints] + " vs " +  buildingLoot2[ClientLib.Base.EResourceType.ResearchPoints]);
                console.log("-------------");*/
                return loot;
              } catch (e) {
                console.log("MaelstromTools.Util.getResources", e);
              }
            },
            /*
            collectBuildings: function(ncity) {
              var cityBuildings = ncity.get_CityBuildingsData();
              var buildings = new Array();
              var count = 0;
              // ncity.GetNumBuildings()
              for(var i = 0; i < 100000; i++) {
                var building = cityBuildings.GetBuildingByMDBId(i);
                if(!building) {
                  continue;
                }
                
                //console.log(building.get_TechName() + " - " + ncity.get_CityFaction() + " - " + ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(building.get_TechName(), ncity.get_CityFaction()) + " at lvl " + building.get_CurrentLevel());
                buildings.push(building);
              //buildings[count++] = building;
              }
              return buildings; //MaelstromTools.Util.ArrayUnique(buildings);
            },*/

            getResourcesPart: function (cityEntities) {
              try {
                var loot = [0, 0, 0, 0, 0, 0, 0, 0];
                if (cityEntities == null) {
                  return loot;
                }

                var objcityEntities = [];
                if (PerforceChangelist >= 376877) { //new
                  for (var o in cityEntities) objcityEntities.push(cityEntities[o]);
                } else { //old
                  for (var i = 0; i < cityEntities.length; i++) objcityEntities.push(cityEntities[i]);
                }

                for (var i = 0; i < objcityEntities.length; i++) {
                  var cityEntity = objcityEntities[i];
                  var unitLevelRequirements = MaelstromTools.Wrapper.GetUnitLevelRequirements(cityEntity);

                  for (var x = 0; x < unitLevelRequirements.length; x++) {
                    loot[unitLevelRequirements[x].Type] += unitLevelRequirements[x].Count * cityEntity.get_HitpointsPercent();
                    if (cityEntity.get_HitpointsPercent() < 1.0) {
                      // destroyed

                    }
                  }
                }

                return loot;
              } catch (e) {
                console.log("MaelstromTools.Util.getResourcesPart", e);
              }
            }

            /*
            findBuildings: function(city) {
              for (var k in city) {
                if ((typeof(city[k]) == "object") && city[k] && city[k] && 0 in city[k]) {
                  if ((typeof(city[k][0]) == "object")  && city[k][0] && "BuildingDBId" in city[k][0]) {
                    return city[k];
                  }
                }
              }
              return [];
            }*/
          }
        });

        // define Wrapper
        qx.Class.define("MaelstromTools.Wrapper", {
          type: "static",
          statics: {
            GetStepTime: function (step, defaultString) {
              if (!defaultString) {
                defaultString = "";
              }
              var endTime = ClientLib.Data.MainData.GetInstance().get_Time().GetTimespanString(step, ClientLib.Data.MainData.GetInstance().get_Time().GetServerStep());
              if (endTime == "00:00") {
                return defaultString;
              }
              return endTime;
            },

            FormatNumbersCompact: function (value) {
              if (PerforceChangelist >= 387751) { //new
                return phe.cnc.gui.util.Numbers.formatNumbersCompact(value);
              } else { //old
                return webfrontend.gui.Util.formatNumbersCompact(value);
              }
            },

            GetDateTimeString: function (value) {
                return phe.cnc.Util.getDateTimeString(value);
            },

            FormatTimespan: function (value) {
              return ClientLib.Vis.VisMain.FormatTimespan(value);
            },

            GetSupportWeaponRange: function (weapon) {
              return weapon.r;
            },

            GetCity: function (cityId) {
              return ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(cityId);
            },

            RepairAll: function (ncity, visMode) {
              var oldMode = ClientLib.Vis.VisMain.GetInstance().get_Mode();
              ClientLib.Vis.VisMain.GetInstance().set_Mode(visMode);
              ncity.RepairAll();
              ClientLib.Vis.VisMain.GetInstance().set_Mode(oldMode);
            },

            CanRepairAll: function (ncity, viewMode) {
              try {
                /*var oldMode = ClientLib.Vis.VisMain.GetInstance().get_Mode();
                ClientLib.Vis.VisMain.GetInstance().set_Mode(visMode);
                var retVal = ncity.CanRepairAll();
                ClientLib.Vis.VisMain.GetInstance().set_Mode(oldMode);
                return retVal;*/

                var repairData = ncity.get_CityRepairData();
                var myRepair = repairData.CanRepair(0, viewMode);
                repairData.UpdateCachedFullRepairAllCost(viewMode);
                return ((myRepair != null) && (!ncity.get_IsLocked() || (viewMode != ClientLib.Vis.Mode.ArmySetup)));

                return false;
              } catch (e) {
                console.log("MaelstromTools.Wrapper.CanRepairAll: ", e);
                return false;
              }
            },
            /*GetBuildings: function (cityBuildings) {
              if (PerforceChangelist >= 376877) { //new
                return (cityBuildings.get_Buildings() != null ? cityBuildings.get_Buildings().d : null);
              } else { //old
                return (cityBuildings.get_Buildings() != null ? cityBuildings.get_Buildings().l : null);
              }
            },*/
            GetDefenseUnits: function (cityUnits) {
            //GetDefenseUnits: function () {
              if (PerforceChangelist >= 392583) { //endgame patch
                return (cityUnits.get_DefenseUnits() != null ? cityUnits.get_DefenseUnits().d : null);
              } else { //old
                var defenseObjects = [];
                for (var x = 0; x < 9; x++) {
                  for (var y = 0; y < 8; y++) {
                    var defenseObject = ClientLib.Vis.VisMain.GetInstance().get_DefenseSetup().GetDefenseObjectFromPosition((x * ClientLib.Vis.VisMain.GetInstance().get_City().get_GridWidth()),(y * ClientLib.Vis.VisMain.GetInstance().get_City().get_GridHeight()));
                    if (defenseObject !== null && defenseObject.get_CityEntity() !== null) {
                      defenseObjects.push(defenseObject.get_UnitDetails());
                    }
                  }
                }
                return defenseObjects;
              }
            },
            GetUnitLevelRequirements: function (cityEntity) {
              if (PerforceChangelist >= 376877) { //new
                return (cityEntity.get_UnitLevelRepairRequirements() != null ? cityEntity.get_UnitLevelRepairRequirements() : null);
              } else { //old
                return (cityEntity.get_UnitLevelRequirements() != null ? cityEntity.get_UnitLevelRequirements() : null);
              }
            },

            GetBaseLevel: function (ncity) {
              return (Math.floor(ncity.get_LvlBase() * 100) / 100).toFixed(2);
            }
            /*,
            
            GetPointsByLevelWithThresholds: function (_levelThresholds,_levelFactors,_iLevel) {
              var result=0;
              var lastLevel=_iLevel;
              if(_levelThresholds.length != _levelFactors.length) {
                return 0;
              }
              for (var i=(_levelThresholds.length - 1); (i >= 0); i--) {
                var threshold=(_levelThresholds[i] - 1);
                if(lastLevel >= threshold) {
                  result += ((lastLevel - threshold) * _levelFactors[i]);
                  lastLevel=threshold;
                }
              }
              return result;
            },
            GetArmyPoints: function(_iLevel) {
              var server = ClientLib.Data.MainData.GetInstance().get_Server();
              var m_iArmyPointsPerLevelThresholds = server.get_ArmyPointsPerLevelThresholds();
              var m_fArmyPointsPerLevel = server.get_ArmyPointsPerLevel();
              _iLevel += 4;
              var armyPoints = MaelstromTools.Wrapper.GetPointsByLevelWithThresholds(m_iArmyPointsPerLevelThresholds, m_fArmyPointsPerLevel, _iLevel);
              return Math.min(armyPoints, server.get_MaxArmyPoints());
            },
            
            GetBuilding: function(ncity, techName) {
              return ncity.get_CityBuildingsData().GetUniqueBuildingByTechName(techName)
            },
            
            GetCommandCenter: function(ncity) {
              //var techName = ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ClientLib.Base.ETechName.Command_Center, ClientLib.Data.MainData.GetInstance().get_Player().get_Faction());

              return MaelstromTools.Wrapper.GetBuilding(ncity, ClientLib.Base.ETechName.Command_Center);
            // conyard return this.GetBuildingCondition$0(ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction$0(0, ClientLib.Data.MainData.GetInstance$9().get_Player$2().get_Faction$2()));
            // ClientLib.Data.City.prototype.GetOffenseConditionInPercent=ClientLib.Data.City.prototype.GetOffenseConditionInPercent$0;
            }*/
          }
        });

        // define LocalStorage
        qx.Class.define("MaelstromTools.LocalStorage", {
          type: "static",
          statics: {
            isSupported: function () {
              return typeof (Storage) !== "undefined";
            },
            set: function (key, value) {
              try {
                if (MaelstromTools.LocalStorage.isSupported()) {
                  localStorage["CCTA_MaelstromTools_" + key] = JSON.stringify(value);
                }
              } catch (e) {
                console.log("MaelstromTools.LocalStorage.set: ", e);
              }
            },
            get: function (key, defaultValueIfNotSet) {
              try {
                if (MaelstromTools.LocalStorage.isSupported()) {
                  if (localStorage["CCTA_MaelstromTools_" + key] != null && localStorage["CCTA_MaelstromTools_" + key] != 'undefined') {
                    return JSON.parse(localStorage["CCTA_MaelstromTools_" + key]);
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.LocalStorage.get: ", e);
              }
              return defaultValueIfNotSet;
            },
            clearAll: function () {
              try {
                if (!MaelstromTools.LocalStorage.isSupported()) {
                  return;
                }
                for (var key in localStorage) {
                  if (key.indexOf("CCTA_MaelstromTools_") == 0) {
                    localStorage.removeItem(key);
                  }
                }
              } catch (e) {
                console.log("MaelstromTools.LocalStorage.clearAll: ", e);
              }
            }
          }
        });

        // define Cache
        qx.Class.define("MaelstromTools.Cache", {
          type: "singleton",
          extend: qx.core.Object,
          members: {
            CityCount: 0,
            Cities: null,
            SelectedBaseForMenu: null,
            SelectedBaseResources: null,
            SelectedBaseForLoot: null,

            updateCityCache: function () {
              try {
                this.CityCount = 0;
                this.Cities = Object();

                var cities = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities();
                for (var cindex in cities.d) {
                  this.CityCount++;
                  var ncity = MaelstromTools.Wrapper.GetCity(cindex);
                  var ncityName = ncity.get_Name();
                  this.Cities[ncityName] = Object();
                  this.Cities[ncityName]["ID"] = cindex;
                  this.Cities[ncityName]["Object"] = ncity;
                }
              } catch (e) {
                console.log("MaelstromTools.Cache.updateCityCache: ", e);
              }
            },

            updateLoot: function (visCity) {
              var cityId = visCity.get_Id();

              if (this.SelectedBaseForLoot != null && cityId == this.SelectedBaseForLoot.get_Id() && this.SelectedBaseResources != null && this.SelectedBaseResources["LoadState"] > 0) {
                return -2;
              }
              this.SelectedBaseForLoot = visCity;
              this.SelectedBaseResources = MaelstromTools.Util.getResources(visCity);
              return this.SelectedBaseResources["LoadState"];
            }
          }
        });

        // define HuffyTools.ImageRender
        qx.Class.define("HuffyTools.ImageRender", {
          extend: qx.ui.table.cellrenderer.AbstractImage,
          construct: function (width, height) {
            this.base(arguments);
            if (width) {
              this.__imageWidth = width;
            }
            if (height) {
              this.__imageHeight = height;
            }
            this.__am = qx.util.AliasManager.getInstance();
          },
          members: {
            __am: null,
            __imageHeight: 16,
            __imageWidth: 16,
            // overridden
            _identifyImage: function (cellInfo) {
              var imageHints = {
                imageWidth: this.__imageWidth,
                imageHeight: this.__imageHeight
              };
              if (cellInfo.value == "") {
                imageHints.url = null;
              } else {
                imageHints.url = this.__am.resolve(cellInfo.value);
              }
              imageHints.tooltip = cellInfo.tooltip;
              return imageHints;
            }
          },
          destruct: function () {
            this.__am = null;
          }
        });

        // define HuffyTools.ReplaceRender
        qx.Class.define("HuffyTools.ReplaceRender", {
          extend: qx.ui.table.cellrenderer.Default,
          properties: {
            replaceFunction: {
              check: "Function",
              nullable: true,
              init: null
            }
          },
          members: {
            // overridden
            _getContentHtml: function (cellInfo) {
              var value = cellInfo.value;
              var replaceFunc = this.getReplaceFunction();
              // use function
              if (replaceFunc) {
                cellInfo.value = replaceFunc(value);
              }
              return qx.bom.String.escape(this._formatValue(cellInfo));
            }
          }
        });

        qx.Class.define("HuffyTools.CityCheckBox", {
          extend: qx.ui.form.CheckBox,
          members: {
            HT_CityID: null
          }
        });

        // define HuffyTools.UpgradePriorityGUI
        qx.Class.define("HuffyTools.UpgradePriorityGUI", {
          type: "singleton",
          extend: MaelstromTools.DefaultObject,
          members: {
            HT_TabView: null,
            HT_Options: null,
            HT_ShowOnlyTopBuildings: null,
            HT_ShowOnlyAffordableBuildings: null,
            HT_CityBuildings: null,
            HT_Pages: null,
            HT_Tables: null,
            HT_Models: null,
            HT_SelectedResourceType: null,
            BuildingList: null,
            upgradeInProgress: null,
            init: function () {
              /*
              Done:
              - Added cost per gain to the lists
              - Added building coordinates to the lists
              - Only display the top affordable and not affordable building
              - Persistent filter by city, top and affordable per resource type
              - Reload onTabChange for speed optimization
              - Estimated time until upgrade is affordable
              
              ToDo:
              - let the user decide to sort by colums he like i.e. timefactor or cost/gain and save it in the configuration
              - integrate buttons to transfer resources ?

               */
              try {
                this.HT_SelectedResourceType = -1;
                this.IsTimerEnabled = false;
                this.upgradeInProgress = false;

                this.HT_TabView = new qx.ui.tabview.TabView();
                this.HT_TabView.set({
                  contentPadding: 0,
                  appearance: "tabview",
                  margin: 5,
                  barPosition: 'left'
                });
                this.Widget = new qx.ui.tabview.Page("UpgradePriority");
                this.Widget.setPadding(0);
                this.Widget.setMargin(0);
                this.Widget.setBackgroundColor("#BEC8CF");
                this.Widget.setLayout(new qx.ui.layout.VBox(2));
                //this.Widget.add(this.HT_Options);
                this.Widget.add(this.HT_TabView, {
                  flex: 1
                });
                this.Window.setPadding(0);
                this.Window.set({
                  resizable: true
                });

                this.Window.removeAll();
                this.Window.add(this.Widget);

                this.BuildingList = new Array;
                this.HT_Models = new Array;
                this.HT_Tables = new Array;
                this.HT_Pages = new Array;

                this.createTabPage(ClientLib.Base.EResourceType.Tiberium);
                this.createTable(ClientLib.Base.EResourceType.Tiberium);
                this.HT_Tables[ClientLib.Base.EResourceType.Tiberium].addListener("cellClick", function (e) {
                  this.upgradeBuilding(e, ClientLib.Base.EResourceType.Tiberium);
                }, this);


                this.createTabPage(ClientLib.Base.EResourceType.Crystal);
                this.createTable(ClientLib.Base.EResourceType.Crystal);
                this.HT_Tables[ClientLib.Base.EResourceType.Crystal].addListener("cellClick", function (e) {
                  this.upgradeBuilding(e, ClientLib.Base.EResourceType.Crystal);
                }, this);

                this.createTabPage(ClientLib.Base.EResourceType.Power);
                this.createTable(ClientLib.Base.EResourceType.Power);
                this.HT_Tables[ClientLib.Base.EResourceType.Power].addListener("cellClick", function (e) {
                  this.upgradeBuilding(e, ClientLib.Base.EResourceType.Power);
                }, this);

                this.createTabPage(ClientLib.Base.EResourceType.Gold);
                this.createTable(ClientLib.Base.EResourceType.Gold);
                this.HT_Tables[ClientLib.Base.EResourceType.Gold].addListener("cellClick", function (e) {
                  this.upgradeBuilding(e, ClientLib.Base.EResourceType.Gold);
                }, this);


                MT_Cache.updateCityCache();
                this.HT_Options = new Array();
                this.HT_ShowOnlyTopBuildings = new Array();
                this.HT_ShowOnlyAffordableBuildings = new Array();
                this.HT_CityBuildings = new Array();
                for (var mPage in this.HT_Pages) {
                  this.createOptions(mPage);
                  this.HT_Pages[mPage].add(this.HT_Options[mPage]);
                  this.HT_Pages[mPage].add(this.HT_Tables[mPage], {
                    flex: 1
                  });
                  this.HT_TabView.add(this.HT_Pages[mPage]);
                }

                // Zeigen wir Dollars an !
                this.HT_TabView.setSelection([this.HT_TabView.getChildren()[2]]);
                this.HT_SelectedResourceType = ClientLib.Base.EResourceType.Gold;
              } catch (e) {
                console.log("HuffyTools.UpgradePriority.init: ", e);
              }
            },
            createOptions: function (eType) {
              var oBox = new qx.ui.layout.Flow();
              var oOptions = new qx.ui.container.Composite(oBox);
              oOptions.setMargin(5);
              this.HT_ShowOnlyTopBuildings[eType] = new qx.ui.form.CheckBox(Lang.gt("display only top buildings"));
              this.HT_ShowOnlyTopBuildings[eType].setMargin(5);
              this.HT_ShowOnlyTopBuildings[eType].setValue(MaelstromTools.LocalStorage.get("UGL_TOPBUILDINGS_" + eType, true));
              this.HT_ShowOnlyTopBuildings[eType].addListener("execute", this.CBChanged, this);
              oOptions.add(this.HT_ShowOnlyTopBuildings[eType], {
                left: 10,
                top: 10
              });
              this.HT_ShowOnlyAffordableBuildings[eType] = new qx.ui.form.CheckBox(Lang.gt("display only affordable buildings"));
              this.HT_ShowOnlyAffordableBuildings[eType].setMargin(5);
              this.HT_ShowOnlyAffordableBuildings[eType].setValue(MaelstromTools.LocalStorage.get("UGL_AFFORDABLE_" + eType, true));
              this.HT_ShowOnlyAffordableBuildings[eType].addListener("execute", this.CBChanged, this);
              oOptions.add(this.HT_ShowOnlyAffordableBuildings[eType], {
                left: 10,
                top: 10,
                lineBreak: true
              });
              this.HT_CityBuildings[eType] = new Array();
              for (var cname in MT_Cache.Cities) {
                var oCity = MT_Cache.Cities[cname].Object;
                var oCityBuildings = new HuffyTools.CityCheckBox(cname);
                oCityBuildings.HT_CityID = oCity.get_Id();
                oCityBuildings.setMargin(5);
                oCityBuildings.setValue(MaelstromTools.LocalStorage.get("UGL_CITYFILTER_" + eType + "_" + oCity.get_Id(), true));
                oCityBuildings.addListener("execute", this.CBChanged, this);
                oOptions.add(oCityBuildings, {
                  left: 10,
                  top: 10
                });
                this.HT_CityBuildings[eType][cname] = oCityBuildings;
              }
              this.HT_Options[eType] = oOptions;
            },
            createTable: function (eType) {
              try {
                this.HT_Models[eType] = new qx.ui.table.model.Simple();
                this.HT_Models[eType].setColumns(["ID", Lang.gt("City"), Lang.gt("Type (coord)"), Lang.gt("to Level"), Lang.gt("Gain/h"), Lang.gt("Factor"), Lang.gt("Tiberium"), Lang.gt("Power"), Lang.gt("Tib/gain"), Lang.gt("Pow/gain"), Lang.gt("ETA"), Lang.gt("Upgrade"), "State"]);
                this.HT_Tables[eType] = new qx.ui.table.Table(this.HT_Models[eType]);
                this.HT_Tables[eType].setColumnVisibilityButtonVisible(false);
                this.HT_Tables[eType].setColumnWidth(0, 0);
                this.HT_Tables[eType].setColumnWidth(1, 90);
                this.HT_Tables[eType].setColumnWidth(2, 120);
                this.HT_Tables[eType].setColumnWidth(3, 55);
                this.HT_Tables[eType].setColumnWidth(4, 70);
                this.HT_Tables[eType].setColumnWidth(5, 60);
                this.HT_Tables[eType].setColumnWidth(6, 70);
                this.HT_Tables[eType].setColumnWidth(7, 70);
                this.HT_Tables[eType].setColumnWidth(8, 70);
                this.HT_Tables[eType].setColumnWidth(9, 70);
                this.HT_Tables[eType].setColumnWidth(10, 70);
                this.HT_Tables[eType].setColumnWidth(11, 40);
                this.HT_Tables[eType].setColumnWidth(12, 0);
                var tcm = this.HT_Tables[eType].getTableColumnModel();
                tcm.setColumnVisible(0, false);
                tcm.setColumnVisible(12, false);
                tcm.setDataCellRenderer(4, new qx.ui.table.cellrenderer.Number().set({
                  numberFormat: new qx.util.format.NumberFormat().set({
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                  })
                }));
                tcm.setDataCellRenderer(5, new qx.ui.table.cellrenderer.Number().set({
                  numberFormat: new qx.util.format.NumberFormat().set({
                    maximumFractionDigits: 5,
                    minimumFractionDigits: 5
                  })
                }));
                tcm.setDataCellRenderer(6, new HuffyTools.ReplaceRender().set({
                  ReplaceFunction: this.formatTiberiumAndPower
                }));
                tcm.setDataCellRenderer(7, new HuffyTools.ReplaceRender().set({
                  ReplaceFunction: this.formatTiberiumAndPower
                }));
                tcm.setDataCellRenderer(11, new HuffyTools.ImageRender(40, 20));
              } catch (e) {
                console.log("HuffyTools.UpgradePriority.createTable: ", e);
              }
            },
            createTabPage: function (resource_type) {
              try {
                var sName = MaelstromTools.Statics.LootTypeName(resource_type);
                var oRes = new qx.ui.tabview.Page(Lang.gt(sName), MT_Base.images[sName]);
                oRes.setLayout(new qx.ui.layout.VBox(2));
                oRes.setPadding(5);
                var btnTab = oRes.getChildControl("button");
                btnTab.resetWidth();
                btnTab.resetHeight();
                btnTab.set({
                  show: "icon",
                  margin: 0,
                  padding: 0,
                  toolTipText: sName
                });
                btnTab.addListener("execute", this.TabChanged, [this, resource_type]);
                this.HT_Pages[resource_type] = oRes;
                return oRes;
              } catch (e) {
                console.log("HuffyTools.UpgradePriority.createTabPage: ", e);
              }
            },

            TabChanged: function (e) {
              try {
                this[0].HT_SelectedResourceType = this[1];
                this[0].UpgradeCompleted(null, null);
              } catch (e) {
                console.log("HuffyTools.UpgradePriority.TabChanged: ", e);
              }
            },

            upgradeBuilding: function (e, eResourceType) {
              if (this.upgradeInProgress == true) {
                console.log("upgradeBuilding:", "upgrade in progress !");
                return;
              }
              try {
                if (e.getColumn() == 11) {
                  var buildingID = this.HT_Models[eResourceType].getValue(0, e.getRow());
                  var iState = parseInt(this.HT_Models[eResourceType].getValue(12, e.getRow()));
                  if (iState != 1) {
                    return;
                  }
                  if (buildingID in this.BuildingList) {
                    this.upgradeInProgress = true;
                    if (PerforceChangelist >= 382917) { //new
                      ClientLib.Net.CommunicationManager.GetInstance().SendCommand("UpgradeBuilding", this.BuildingList[buildingID], phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.UpgradeCompleted), null, true);
                    } else { //old
                      ClientLib.Net.CommunicationManager.GetInstance().SendCommand("UpgradeBuilding", this.BuildingList[buildingID], webfrontend.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.UpgradeCompleted), null, true);
                    }
                  }
                }
              } catch (e) {
                console.log("HuffyTools.UpgradePriority.upgradeBuilding: ", e);
              }
            },
            UpgradeCompleted: function (context, result) {
              var self = this;
              window.setTimeout(function () {
                self.calc();
              }, 1000);
              this.upgradeInProgress = false;
            },
            CBChanged: function (e) {
              this.UpgradeCompleted(null, null);
            },
            formatTiberiumAndPower: function (oValue) {
              if (PerforceChangelist >= 387751) { //new
                return phe.cnc.gui.util.Numbers.formatNumbersCompact(oValue);
              } else { //old
                return webfrontend.gui.Util.formatNumbersCompact(oValue);
              }
            },
            updateCache: function () {
              try {
                if (!this.HT_TabView) {
                  this.init();
                }
                var eType = this.HT_SelectedResourceType;
                var bTop = this.HT_ShowOnlyTopBuildings[eType].getValue();
                MaelstromTools.LocalStorage.set("UGL_TOPBUILDINGS_" + eType, bTop);
                var bAffordable = this.HT_ShowOnlyAffordableBuildings[eType].getValue();
                MaelstromTools.LocalStorage.set("UGL_AFFORDABLE_" + eType, bAffordable);
                var oCityFilter = new Array();
                for (var cname in this.HT_CityBuildings[eType]) {
                  var oCityBuildings = this.HT_CityBuildings[eType][cname];
                  var bFilterBuilding = oCityBuildings.getValue();
                  MaelstromTools.LocalStorage.set("UGL_CITYFILTER_" + eType + "_" + oCityBuildings.HT_CityID, bFilterBuilding);
                  oCityFilter[cname] = bFilterBuilding;
                }
                window.HuffyTools.UpgradePriority.getInstance().collectData(bTop, bAffordable, oCityFilter, eType);
              } catch (e) {
                console.log("HuffyTools.UpgradePriority.updateCache: ", e);
              }
            },
            setWidgetLabels: function () {
              try {
                var HuffyCalc = window.HuffyTools.UpgradePriority.getInstance();
                var UpgradeList = HuffyCalc.Cache;

                for (var eResourceType in UpgradeList) {
                  //var eResourceType = MaelstromTools.Statics.LootTypeName(eResourceName);
                  var rowData = [];

                  this.HT_Models[eResourceType].setData([]);

                  for (var mCity in UpgradeList[eResourceType]) {
                    for (var mBuilding in UpgradeList[eResourceType][mCity]) {
                      var UpItem = UpgradeList[eResourceType][mCity][mBuilding];
                      if (typeof (UpItem.Type) == "undefined") {
                        continue;
                      }
                      if (!(mBuilding in this.BuildingList)) {
                        this.BuildingList[UpItem.ID] = UpItem.Building;
                      }
                      var iTiberiumCosts = 0;
                      if (ClientLib.Base.EResourceType.Tiberium in UpItem.Costs) {
                        iTiberiumCosts = UpItem.Costs[ClientLib.Base.EResourceType.Tiberium];
                      }
                      var iTiberiumPerGain = 0;
                      if (ClientLib.Base.EResourceType.Tiberium in UpItem.Costs) {
                        iTiberiumPerGain = UpItem.Costs[ClientLib.Base.EResourceType.Tiberium] / UpItem.GainPerHour;
                      }
                      var iPowerCosts = 0;
                      if (ClientLib.Base.EResourceType.Power in UpItem.Costs) {
                        iPowerCosts = UpItem.Costs[ClientLib.Base.EResourceType.Power];
                      }
                      var iPowerPerGain = 0;
                      if (ClientLib.Base.EResourceType.Power in UpItem.Costs) {
                        iPowerPerGain = UpItem.Costs[ClientLib.Base.EResourceType.Power] / UpItem.GainPerHour;
                      }
                      var img = MT_Base.images["UpgradeBuilding"];
                      if (UpItem.Affordable == false) {
                        img = "";
                      }
                      var sType = UpItem.Type;
                      sType = sType + "(" + UpItem.PosX + ":" + UpItem.PosY + ")";
                      var iETA = 0;
                      if (UpItem.TimeTillUpgradable[ClientLib.Base.EResourceType.Tiberium] > 0) {
                        iETA = UpItem.TimeTillUpgradable[ClientLib.Base.EResourceType.Tiberium];
                      }
                      if (UpItem.TimeTillUpgradable[ClientLib.Base.EResourceType.Power] > iETA) {
                        iETA = UpItem.TimeTillUpgradable[ClientLib.Base.EResourceType.Power];
                      }
                      var sETA = "";
                      if (iETA > 0) {
                        sETA = ClientLib.Vis.VisMain.FormatTimespan(iETA);
                      }
                      var iState = 0;
                      if (UpItem.Affordable == true) {
                        iState = 1;
                      } else if (UpItem.AffordableByTransfer == true) {
                        iState = 2;
                      } else {
                        iState = 3;
                      }
                      rowData.push([UpItem.ID, mCity, sType, UpItem.Level, UpItem.GainPerHour, UpItem.Ticks, iTiberiumCosts, iPowerCosts, iTiberiumPerGain, iPowerPerGain, sETA, img, iState]);
                    }
                  }
                  this.HT_Models[eResourceType].setData(rowData);
                }
              } catch (e) {
                console.log("HuffyTools.UpgradePriority.setWidgetLabels: ", e);
              }
            }
          }
        });

        // define HuffyTools.UpgradePriority
        qx.Class.define("HuffyTools.UpgradePriority", {
          type: "singleton",
          extend: qx.core.Object,
          members: {
            list_units: null,
            list_buildings: null,

            comparePrio: function (elem1, elem2) {
              if (elem1.Ticks < elem2.Ticks) return -1;
              if (elem1.Ticks > elem2.Ticks) return 1;
              return 0;
            },
            getPrioList: function (city, arTechtypes, eModPackageSize, eModProduction, bOnlyTopBuildings, bOnlyAffordableBuildings) {
              try {
                var RSI = window.MaelstromTools.ResourceOverview.getInstance();
                RSI.updateCache();
                var TotalTiberium = 0;

                for (var cityName in this.Cache) {
                  var cityCache = this.Cache[cityName];
                  var i = cityCache[MaelstromTools.Statics.Tiberium];
                  if (typeof (i) !== 'undefined') {
                    TotalTiberium += i;
                    //but never goes here during test.... // to optimize - to do
                  }
                }
                var resAll = new Array();
                var prod = MaelstromTools.Production.getInstance().updateCache(city.get_Name());
                //var buildings = MaelstromTools.Wrapper.GetBuildings(city.get_CityBuildingsData());
                var buildings = city.get_Buildings().d;

                // 376877 & old fixes 
                var objbuildings = [];
                if (PerforceChangelist >= 376877) { //new
                  for (var o in buildings) objbuildings.push(buildings[o]);
                } else { //old
                  for (var i = 0; i < buildings.length; i++) objbuildings.push(buildings[i]);
                }


                for (var i = 0; i < objbuildings.length; i++) {
                  var city_building = objbuildings[i];

                  // TODO: check for destroyed building

                  var iTechType = city_building.get_TechName();
                  var bSkip = true;
                  for (var iTypeKey in arTechtypes) {
                    if (arTechtypes[iTypeKey] == iTechType) {
                      bSkip = false;
                      break;
                    }
                  }
                  if (bSkip == true) {
                    continue;
                  }
                  var city_buildingdetailview = city.GetBuildingDetailViewInfo(city_building);
                  if (city_buildingdetailview == null) {
                    continue;
                  }
                  var bindex = city_building.get_Id();
                  var resbuilding = new Array();
                  resbuilding["ID"] = bindex;
                  resbuilding["Type"] = this.TechTypeName(parseInt(iTechType, 10));
                  resbuilding["PosX"] = city_building.get_CoordX();
                  resbuilding["PosY"] = city_building.get_CoordY();

                  resbuilding["Building"] = {
                    cityid: city.get_Id(),
                    posX: resbuilding["PosX"],
                    posY: resbuilding["PosY"],
                    isPaid: true
                  };

                  resbuilding["GainPerHour"] = 0;
                  resbuilding["Level"] = city_building.get_CurrentLevel() + 1;
                  for (var ModifierType in city_buildingdetailview.OwnProdModifiers.d) {
                    switch (parseInt(ModifierType, 10)) {
                      case eModPackageSize:
                        {
                          var ModOj = city_buildingdetailview.OwnProdModifiers.d[city_building.get_MainModifierTypeId()];
                          var Mod = (ModOj.TotalValue + ModOj.NewLvlDelta) / ClientLib.Data.MainData.GetInstance().get_Time().get_StepsPerHour();
                          resbuilding["GainPerHour"] += (city_buildingdetailview.OwnProdModifiers.d[ModifierType].NewLvlDelta / Mod);
                          break;
                        }
                      case eModProduction:
                        {
                          resbuilding["GainPerHour"] += city_buildingdetailview.OwnProdModifiers.d[ModifierType].NewLvlDelta;
                          break;
                        }
                    }
                  }
                  // Nutzen ins VerhÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ltnis zu den Kosten setzten
                  var TechLevelData = ClientLib.Base.Util.GetTechLevelResourceRequirements_Obj(city_building.get_CurrentLevel() + 1, city_building.get_TechGameData_Obj());
                  var RatioPerCostType = new Object();
                  var sRatio = "";
                  var sCosts = "";
                  var lTicks = 0;
                  var bHasPower = true;
                  var bHasTiberium = true;
                  var bAffordableByTransfer = true;
                  var oCosts = new Array();
                  var oTimes = new Array();
                  for (var costtype in TechLevelData) {
                    if (typeof (TechLevelData[costtype]) == "function") {
                      continue;
                    }
                    if (TechLevelData[costtype].Type == "0") {
                      continue;
                    }

                    oCosts[TechLevelData[costtype].Type] = TechLevelData[costtype].Count;
                    if (parseInt(TechLevelData[costtype].Count) <= 0) {
                      continue;
                    }
                    RatioPerCostType[costtype] = TechLevelData[costtype].Count / resbuilding["GainPerHour"];
                    if (sCosts.length > 0) {
                      sCosts = sCosts + ", ";
                    }
                    sCosts = sCosts + MaelstromTools.Wrapper.FormatNumbersCompact(TechLevelData[costtype].Count) + " " + MaelstromTools.Statics.LootTypeName(TechLevelData[costtype].Type);
                    if (sRatio.length > 0) {
                      sRatio = sRatio + ", ";
                    }
                    // Upgrade affordable ?
                    if (city.GetResourceCount(TechLevelData[costtype].Type) < TechLevelData[costtype].Count) {
                      switch (TechLevelData[costtype].Type) {
                        case ClientLib.Base.EResourceType.Tiberium:
                          {
                            bHasTiberium = false;
                            if (TotalTiberium < TechLevelData[costtype].Count) {
                              bAffordableByTransfer = false;
                            }
                          }
                          break;
                        case ClientLib.Base.EResourceType.Power:
                          {
                            bHasPower = false;
                          }
                          break;
                      }
                    }
                    sRatio = sRatio + MaelstromTools.Wrapper.FormatNumbersCompact(RatioPerCostType[costtype]);

                    var techlevelData = MaelstromTools.Statics.LootTypeName(TechLevelData[costtype].Type);

                    var dCityProduction = prod[techlevelData].Delta + prod[techlevelData].ExtraBonusDelta + prod[techlevelData].POI;
                    if (dCityProduction > 0) {
                      if (lTicks < (3600 * RatioPerCostType[costtype] / dCityProduction)) {
                        lTicks = (3600 * RatioPerCostType[costtype] / dCityProduction);
                      }
                    }
                    oTimes[TechLevelData[costtype].Type] = 0;
                    if (oCosts[TechLevelData[costtype].Type] > city.GetResourceCount(TechLevelData[costtype].Type)) {
                      oTimes[TechLevelData[costtype].Type] = (3600 * (oCosts[TechLevelData[costtype].Type] - city.GetResourceCount(TechLevelData[costtype].Type))) / dCityProduction;
                    }
                  }
                  resbuilding["Ticks"] = lTicks;
                  resbuilding["Time"] = ClientLib.Vis.VisMain.FormatTimespan(lTicks);
                  resbuilding["Costtext"] = sCosts;
                  resbuilding["Costs"] = oCosts;
                  resbuilding["TimeTillUpgradable"] = oTimes;
                  resbuilding["Ratio"] = sRatio;
                  resbuilding["Affordable"] = bHasTiberium && bHasPower;
                  resbuilding["AffordableByTransfer"] = bHasPower && bAffordableByTransfer;
                  if (resbuilding["GainPerHour"] > 0 && (bOnlyAffordableBuildings == false || resbuilding["Affordable"] == true)) {
                    resAll[bindex] = resbuilding;
                  }
                }


                resAll = resAll.sort(this.comparePrio);
                if (!bOnlyTopBuildings) {
                  return resAll;
                }
                var res2 = new Array();
                if (MaelstromTools.Util.ArraySize(resAll) > 0) {
                  var iTopNotAffordable = -1;
                  var iTopAffordable = -1;
                  var iNextNotAffordable = -1;
                  var iLastIndex = -1;
                  for (var iNewIndex in resAll) {
                    if (resAll[iNewIndex].Affordable == true) {
                      if (iTopAffordable == -1) {
                        iTopAffordable = iNewIndex;
                        iNextNotAffordable = iLastIndex;
                      }
                    } else {
                      if (iTopNotAffordable == -1) {
                        iTopNotAffordable = iNewIndex;
                      }
                    }
                    iLastIndex = iNewIndex;
                  }
                  if (iTopAffordable == -1) {
                    iNextNotAffordable = iLastIndex;
                  }
                  var iIndex = 0;
                  if (iTopNotAffordable != -1) {
                    res2[iIndex++] = resAll[iTopNotAffordable];
                  }
                  if (iNextNotAffordable != -1) {
                    res2[iIndex++] = resAll[iNextNotAffordable];
                  }
                  if (iTopAffordable != -1) {
                    res2[iIndex++] = resAll[iTopAffordable];
                  }
                }
                res2 = res2.sort(this.comparePrio);
                return res2;
              } catch (e) {
                console.log("HuffyTools.getPrioList: ", e);
              }
            },
            TechTypeName: function (iTechType) {
              switch (iTechType) {
                case ClientLib.Base.ETechName.PowerPlant:
                  {
                    return Lang.gt("Powerplant");
                    break;
                  }
                case ClientLib.Base.ETechName.Refinery:
                  {
                    return Lang.gt("Refinery");
                    break;
                  }
                case ClientLib.Base.ETechName.Harvester_Crystal:
                  {
                    return Lang.gt("Harvester");
                    break;
                  }
                case ClientLib.Base.ETechName.Harvester:
                  {
                    return Lang.gt("Harvester");
                    break;
                  }
                case ClientLib.Base.ETechName.Silo:
                  {
                    return Lang.gt("Silo");
                    break;
                  }
                case ClientLib.Base.ETechName.Accumulator:
                  {
                    return Lang.gt("Accumulator");
                    break;
                  }
              }
              return "?";
            },
            collectData: function (bOnlyTopBuildings, bOnlyAffordableBuildings, oCityFilter, eSelectedResourceType) {
              try {
                MT_Cache.updateCityCache();
                this.Cache = new Object();
                if (eSelectedResourceType == ClientLib.Base.EResourceType.Tiberium) {
                  this.Cache[ClientLib.Base.EResourceType.Tiberium] = new Object();
                }
                if (eSelectedResourceType == ClientLib.Base.EResourceType.Crystal) {
                  this.Cache[ClientLib.Base.EResourceType.Crystal] = new Object();
                }
                if (eSelectedResourceType == ClientLib.Base.EResourceType.Power) {
                  this.Cache[ClientLib.Base.EResourceType.Power] = new Object();
                }
                if (eSelectedResourceType == ClientLib.Base.EResourceType.Gold) {
                  this.Cache[ClientLib.Base.EResourceType.Gold] = new Object();
                }
                for (var cname in MT_Cache.Cities) {
                  var city = MT_Cache.Cities[cname].Object;
                  if (oCityFilter[cname] == false) {
                    continue;
                  }
                  if (eSelectedResourceType == ClientLib.Base.EResourceType.Tiberium) {
                    this.Cache[ClientLib.Base.EResourceType.Tiberium][cname] = this.getPrioList(city, [ClientLib.Base.ETechName.Harvester, ClientLib.Base.ETechName.Silo], ClientLib.Base.EModifierType.TiberiumPackageSize, ClientLib.Base.EModifierType.TiberiumProduction, bOnlyTopBuildings, bOnlyAffordableBuildings);
                  }
                  if (eSelectedResourceType == ClientLib.Base.EResourceType.Crystal) {
                    this.Cache[ClientLib.Base.EResourceType.Crystal][cname] = this.getPrioList(city, [ClientLib.Base.ETechName.Harvester, ClientLib.Base.ETechName.Silo], ClientLib.Base.EModifierType.CrystalPackageSize, ClientLib.Base.EModifierType.CrystalProduction, bOnlyTopBuildings, bOnlyAffordableBuildings);
                  }
                  if (eSelectedResourceType == ClientLib.Base.EResourceType.Power) {
                    this.Cache[ClientLib.Base.EResourceType.Power][cname] = this.getPrioList(city, [ClientLib.Base.ETechName.PowerPlant, ClientLib.Base.ETechName.Accumulator], ClientLib.Base.EModifierType.PowerPackageSize, ClientLib.Base.EModifierType.PowerProduction, bOnlyTopBuildings, bOnlyAffordableBuildings);
                  }
                  if (eSelectedResourceType == ClientLib.Base.EResourceType.Gold) {
                    this.Cache[ClientLib.Base.EResourceType.Gold][cname] = this.getPrioList(city, [ClientLib.Base.ETechName.Refinery, ClientLib.Base.ETechName.PowerPlant], ClientLib.Base.EModifierType.CreditsPackageSize, ClientLib.Base.EModifierType.CreditsProduction, bOnlyTopBuildings, bOnlyAffordableBuildings);
                  }
                }
              } catch (e) {
                console.log("HuffyTools.UpgradePriority.collectData: ", e);
              }
            }
          }
        });

        var __MTCity_initialized = false; //k undeclared

        var Lang = window.MaelstromTools.Language.getInstance();
        var MT_Cache = window.MaelstromTools.Cache.getInstance();
        var MT_Base = window.MaelstromTools.Base.getInstance();
        var MT_Preferences = window.MaelstromTools.Preferences.getInstance();
        MT_Preferences.readOptions();

        if (!webfrontend.gui.region.RegionCityMenu.prototype.__MTCity_showMenu) {
          webfrontend.gui.region.RegionCityMenu.prototype.__MTCity_showMenu = webfrontend.gui.region.RegionCityMenu.prototype.showMenu;
        }
        webfrontend.gui.region.RegionCityMenu.prototype.showMenu = function (selectedVisObject) {

          MT_Cache.SelectedBaseForMenu = selectedVisObject;
          var baseStatusOverview = window.MaelstromTools.BaseStatus.getInstance();

          if (__MTCity_initialized == false) {
            //console.log(selectedBase.get_Name());
            __MTCity_initialized = true;
            baseStatusOverview.CityMenuButtons = new Array();

            for (var k in this) {
              try {
                if (this.hasOwnProperty(k)) {
                  if (this[k] && this[k].basename == "Composite") {
                    var button = new qx.ui.form.Button(Lang.gt("Calibrate support"));
                    button.addListener("execute", function (e) {
                      MaelstromTools.Util.calibrateWholeSupportOnSelectedBase();
                    }, this);

                    this[k].add(button);
                    baseStatusOverview.CityMenuButtons.push(button);
                  }
                }
              } catch (e) {
                console.log("webfrontend.gui.region.RegionCityMenu.prototype.showMenu: ", e);
              }
            }
          }

          var isAllowed = MaelstromTools.Util.checkIfSupportIsAllowed(MT_Cache.SelectedBaseForMenu);

          for (var x = 0; x < baseStatusOverview.CityMenuButtons.length; ++x) {
            baseStatusOverview.CityMenuButtons[x].setVisibility(isAllowed ? 'visible' : 'excluded');
          }
          this.__MTCity_showMenu(selectedVisObject);
        };

        if (MT_Preferences.Settings.showLoot) {
          // Wrap onCitiesChange method
          if (!webfrontend.gui.region.RegionNPCCampStatusInfo.prototype.__MTCity_NPCCamp) {
            webfrontend.gui.region.RegionNPCCampStatusInfo.prototype.__MTCity_NPCCamp = webfrontend.gui.region.RegionNPCCampStatusInfo.prototype.onCitiesChange;
          }
          webfrontend.gui.region.RegionNPCCampStatusInfo.prototype.onCitiesChange = function () {
            MT_Base.updateLoot(1, ClientLib.Vis.VisMain.GetInstance().get_SelectedObject(), webfrontend.gui.region.RegionNPCCampStatusInfo.getInstance());
            return this.__MTCity_NPCCamp();
          };

          if (!webfrontend.gui.region.RegionNPCBaseStatusInfo.prototype.__MTCity_NPCBase) {
            webfrontend.gui.region.RegionNPCBaseStatusInfo.prototype.__MTCity_NPCBase = webfrontend.gui.region.RegionNPCBaseStatusInfo.prototype.onCitiesChange;
          }
          webfrontend.gui.region.RegionNPCBaseStatusInfo.prototype.onCitiesChange = function () {
            MT_Base.updateLoot(2, ClientLib.Vis.VisMain.GetInstance().get_SelectedObject(), webfrontend.gui.region.RegionNPCBaseStatusInfo.getInstance());
            //MT_Base.updateLoot(2, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity(), webfrontend.gui.region.RegionNPCBaseStatusInfo.getInstance());
            return this.__MTCity_NPCBase();
          };

          if (!webfrontend.gui.region.RegionCityStatusInfoEnemy.prototype.__MTCity_City) {
            webfrontend.gui.region.RegionCityStatusInfoEnemy.prototype.__MTCity_City = webfrontend.gui.region.RegionCityStatusInfoEnemy.prototype.onCitiesChange;
          }
          webfrontend.gui.region.RegionCityStatusInfoEnemy.prototype.onCitiesChange = function () {
            MT_Base.updateLoot(3, ClientLib.Vis.VisMain.GetInstance().get_SelectedObject(), webfrontend.gui.region.RegionCityStatusInfoEnemy.getInstance());
            //MT_Base.updateLoot(3, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity(), webfrontend.gui.region.RegionCityStatusInfoEnemy.getInstance());
            return this.__MTCity_City();
          };
        }

      }
    } catch (e) {
      console.log("createMaelstromTools: ", e);
    }

    function MaelstromTools_checkIfLoaded() {
      try {
        if (typeof qx != 'undefined' && qx.core.Init.getApplication() && qx.core.Init.getApplication().getUIItem(ClientLib.Data.Missions.PATH.BAR_NAVIGATION) && qx.core.Init.getApplication().getUIItem(ClientLib.Data.Missions.PATH.BAR_NAVIGATION).isVisible()) {
          createMaelstromTools();
          window.MaelstromTools.Base.getInstance().initialize();
        } else {
          window.setTimeout(MaelstromTools_checkIfLoaded, 1000);
        }
      } catch (e) {
        console.log("MaelstromTools_checkIfLoaded: ", e);
      }
    }

    if (/commandandconquer\.com/i.test(document.domain)) {
      window.setTimeout(MaelstromTools_checkIfLoaded, 1000);
    }
  };

  try {
    var MaelstromScript = document.createElement("script");
    MaelstromScript.innerHTML = "(" + MaelstromTools_main.toString() + ")();";
    MaelstromScript.type = "text/javascript";
    if (/commandandconquer\.com/i.test(document.domain)) {
      document.getElementsByTagName("head")[0].appendChild(MaelstromScript);
    }
  } catch (e) {
    console.log("MaelstromTools: init error: ", e);
  }
})();


// ==UserScript==
// @name        Maelstrom ADDON Basescanner
// @namespace   http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @description Maelstrom ADDON Basescanner
// @include     http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version     1.8.4
// @author      BlinDManX
// @grant       none
// @copyright   2012+, Claus Neumann
// @license     CC BY-NC-ND 3.0 - http://creativecommons.org/licenses/by-nc-nd/3.0/
// @updateURL   https://userscripts.org/scripts/source/145168.meta.js
// @downloadURL https://userscripts.org/scripts/source/145168.user.js
// ==/UserScript==
(function(){
var b=function(){var e=["__msbs_version","1.8.4","Addons.BaseScannerGUI","singleton","Window","window","ui","base","Addons.BaseScannerGUI ","info","T","getInstance","Language","setWidth","setHeight","setContentPadding","setShowMinimize","setShowMaximize","setShowClose","setResizable","setAllowMaximize","setAllowMinimize","setAllowClose","setShowStatusbar","setDecorator","setPadding","layout","setLayout","src","stats","http://goo.gl/DrJ2x","ZE","removeAll","add","setData","ZL","Addons.BaseScannerGUI.construct: ","debug","img","createElement","setCaption","isVisible","close","updateCityCache","Cache","MaelstromTools","ZC","Cities","form","Basescanner_LastCityID","getserver","LocalStorage","get_Id","Object","setSelection","open","moveTo","MaelstromTools.DefaultObject.openWindow: ","log","model","table","ID","LoadState","City","get","Location","Level","Tiberium","Crystal","Dollar","Research","Crystalfields","Tiberiumfields","Building state","Defense state","CP","Def.HP/Off.HP","Sum Tib+Cry+Cre","(Tib+Cry+Cre)/CP","CY","DF","base set up at","setColumns","YY","get_Player","MainData","Data","ZN","setColumnVisibilityButtonVisible","setColumnWidth","Basescanner_ColWidth_2","Basescanner_ColWidth_3","Basescanner_ColWidth_4","Basescanner_ColWidth_5","Basescanner_ColWidth_6","Basescanner_ColWidth_7","Basescanner_ColWidth_8","Basescanner_ColWidth_9","Basescanner_ColWidth_10","Basescanner_ColWidth_11","Basescanner_ColWidth_12","Basescanner_ColWidth_13","Basescanner_ColWidth_14","Basescanner_ColWidth_15","Basescanner_ColWidth_16","Basescanner_ColWidth_17","Basescanner_ColWidth_18","Basescanner_ColWidth_19","getTableColumnModel","getColumnCount","Basescanner_Column_","setColumnVisible","Statics","images","headerrenderer","setHeaderCellRenderer","FA","set","cellrenderer","setDataCellRenderer","cellDblclick","BaseScannerGUI","addListener","widthChanged","col","getData","newWidth","Basescanner_ColWidth_","setserver","Addons.BaseScannerGUI.FI: ","getRow","length",":","split","VisMain","Vis","getValue","ZK","getApplication","Init","core","closeCityInfo","getBackgroundArea","pavmCombatSetupDefense","PlayerAreaViewMode","setView","getPlayArea","get_CurrentOwnCity","get_Cities","set_CurrentTargetBaseId","get_CityArmyFormationsManager","Addons.BaseScannerGUI FB error: ","Scan","setLabel","ZG","ZH","format","util","setGroupingUsed","setMaximumFractionDigits","abs","floor","k","M","G","container","setMargin","changeSelection","CP Limit","white","basic","ZQ","Basescanner_Cplimiter","","min Level","Basescanner_minLevel","1","ZY","Player","setTextColor","Basescanner_Show0","setValue","changeValue","Bases","Basescanner_Show1","Outpost","Basescanner_Show2","Camp","Basescanner_Show3","execute","solid","blue","decoration","ZV","red","ZU","green","ZX","center","YZ","clear Cache","ZZ","Only center on World","ZJ","7 "," 5 ","6 "," 6 ","5 "," 7 ","ZD","Get Layouts","BaseScannerLayout","Addons","BaseScanner Layout","openWindow","setEnabled","ZB","Loader","gui","ZR","getColumnName","isColumnVisible","index","ZO","+","ZI","addAfter","-","remove","right","setAlignX","ZF","Addons.BaseScannerGUI.createOptions: ","\x3Ca href=\x22https://sites.google.com/site/blindmanxdonate\x22 target=\x22_blank\x22\x3ESupport Development of BlinDManX Addons\x3C/a\x3E","ZP","getModel","getSelection","get_PosX","get_PosY","set_CurrentCityId","ZT","prototype","WorldObjectCity","WorldSector","$ctor","ClientLib.Data.WorldSector.WorldObjectCity","getLevel","Error - ClientLib.Data.WorldSector.WorldObjectCity.Level undefined","error","getID","Error - ClientLib.Data.WorldSector.WorldObjectCity.ID undefined","WorldObjectNPCBase","ClientLib.Data.WorldSector.WorldObjectNPCBase","Error - ClientLib.Data.WorldSector.WorldObjectNPCBase.Level undefined","Error - ClientLib.Data.WorldSector.WorldObjectNPCBase.ID undefined","WorldObjectNPCCamp","ClientLib.Data.WorldSector.WorldObjectNPCCamp","Error - ClientLib.Data.WorldSector.WorldObjectNPCCamp.Level undefined","getCampType","Error - ClientLib.Data.WorldSector.WorldObjectNPCCamp.CampType undefined","Error - ClientLib.Data.WorldSector.WorldObjectNPCCamp.ID undefined","Pause","window.Addons.BaseScannerGUI.getInstance().FJ()","setTimeout","window.Addons.BaseScannerGUI.getInstance().FG()","/","ZM","get_World","Scanning from: ","get_Name","get_MaxAttackDistance","get_Server","sqrt","Type","function","push","sortByColumn","name","DR01D","Maelstrom_Basescanner FJ error: ","data null: ","warn","data[i] null: ","get_PlayerId","get_AllianceId","get_IsGhostMode","get_CityUnitsData","d","get_Buildings","get_DefenseUnits","get_OffenseUnits","EResourceType","Base","Gold","ResearchPoints","ZA","get_Health","get_MdbUnitId","get_CoordY","HPRecord"," finish","countlastidchecked"," on "," removed (GetBuildingsConditionInPercent == 0)","splice"," removed (IsGhostMode)","lastid"," removed (found no data)","MaelstromTools_Basescanner getResources","ZS","define","Class","Addons.BaseScannerLayout","Addons.BaseScannerLayout ","ZW","Addons.BaseScannerLayout.construct: ","Addons.BaseScannerLayout.openWindow: ","ZE null: ","\x3Ctable border=\x222\x22 cellspacing=\x220\x22 cellpadding=\x220\x22\x3E"," - ","\x3Ctr\x3E\x3Ctd colspan=\x229\x22\x3E\x3Cfont color=\x22#FFF\x22\x3E","\x3C/font\x3E\x3C/td\x3E\x3C/tr\x3E","\x3Ctr\x3E","\x3Cimg width=\x2214\x22 height=\x2214\x22 src=\x22","\x22\x3E","Emptypixels","\x3Ctd\x3E","\x3C/td\x3E","\x3C/tr\x3E","\x3C/table\x3E","#303030","cid","click","setReturnValue","Addons.LocalStorage","static","undefined","isSupported","stringify","Addons.LocalStorage.setglobal: ","isdefined","parse","Addons.LocalStorage.getglobal: ","object","LocalStorage data from server not null, but not object","LocalStorage data from server not null, but parsererror","Addons.LocalStorage.setserver: ","isdefineddata","Addons.LocalStorage.getserver: ","Addons.Language","main","hasOwnProperty","Translate Added ","Addons.Language.addtranslateobj main not define","getLocale","Manager","locale","_","Addons.Language.get "," not translate for locale ","qx.ui.table.cellrenderer.Replace","Default","Function","value","getReplaceMap","getReplaceFunction","escape","String","bom","Maelstrom_Basescanner initalisiert","Point","Position","addtranslateobj","BaseScanner Overview","Basescanner Übersicht","Visão geral do scanner de base","Aperçu du scanner de base","Scannen","Esquadrinhar","Balayer","Lage","localização","Emplacement","Spieler","Jogador","Joueur","Camp,Outpost","Lager,Vorposten","Camp,posto avançado","Camp,avant-poste","Lager","Vorposten","posto avançado","avant-poste","Layout da Base de Dados de Scanner","Mise scanner de base","Show Layouts","Layouts anzeigen","Mostrar Layouts","Voir Layouts","Gebäudezustand","construção do Estado","construction de l\x27État","Verteidigungszustand","de Defesa do Estado","défense de l\x27Etat","KP","KP begrenzen","CP limitar","CP limiter","min. Level","nível mínimo","niveau minimum","Cache leeren","limpar cache","vider le cache","Nur auf Welt zentrieren","Único centro no Mundial","Seul centre sur World","Basis errichtbar","base de configurar a","mis en place à la base","Infantry","Infanterie","Infantaria","Vehicle","Fahrzeuge","Veículos","Vehicule","Aircraft","Flugzeuge","Aeronaves","Aviation","Tibério","Kristalle","Cristal","Power","Strom","Potência","Energie","Credits","Créditos","Crédit","Forschung","Investigação","Recherche","-----","--","FileManager","File","BaseScanner","ui/icons/icon_item.png","createNewImage","ui/menues/main_menu/misc_empty_pixel.png","version ","desktopPosition","createDesktopButton"," version ","addToMainMenu","AddonMainMenu","Basescanner","ALT+B","Wrapper","Count","get_HitpointsPercent","MaelstromTools_Basescanner getResourcesPart","replace","match","Error - ","not found","MaelstromTools_Basescanner_checkIfLoaded: ","domain","test"];window[e[0]]=e[1];function j(){qx[e[312]][e[311]](e[2],{type:e[3],extend:qx[e[6]][e[5]][e[4]],construct:function(){try{this[e[7]](arguments);console[e[9]](e[8]+window[e[0]]);this[e[10]]=Addons[e[12]][e[11]]();this[e[13]](820);this[e[14]](400);this[e[15]](10);this[e[16]](true);this[e[17]](true);this[e[18]](true);this[e[19]](true);this[e[20]](true);this[e[21]](true);this[e[22]](true);this[e[23]](false);this[e[24]](null);this[e[25]](5);this[e[27]](new qx[e[6]][e[26]].VBox(3));this[e[29]][e[28]]=e[30];this.FI();this.FH();this.FD();if(this[e[31]]==null){this[e[31]]=[];}this[e[25]](0);this[e[32]]();this[e[33]](this.ZF);this[e[33]](this.ZN);this[e[33]](this.ZP);this[e[35]][e[34]](this.ZE);}catch(t){console[e[37]](e[36],t);}},members:{stats:document[e[39]](e[38]),T:null,ZA:0,ZB:null,ZC:null,ZD:null,ZE:null,ZF:null,ZG:null,ZH:false,ZI:true,ZJ:null,ZK:null,ZL:null,ZM:null,ZN:null,ZO:null,ZP:null,ZQ:null,ZR:[],ZT:true,ZU:null,ZV:null,ZX:null,ZY:null,ZZ:[],ZS:{},YZ:null,YY:null,openWindow:function(w){try{this[e[40]](w);if(this[e[41]]()){this[e[42]]();}else{q[e[43]]();q=window[e[45]][e[44]][e[11]]();var v;this[e[46]][e[32]]();for(v in q[e[47]]){var u=new qx[e[6]][e[48]].ListItem(v,null,q[e[47]][v].Object);this[e[46]][e[33]](u);if(Addons[e[51]][e[50]](e[49])==q[e[47]][v][e[53]][e[52]]()){this[e[46]][e[54]]([u]);}}this[e[55]]();this[e[56]](100,100);}}catch(t){console[e[58]](e[57],t);}},FI:function(){try{this[e[35]]=new qx[e[6]][e[60]][e[59]].Simple();this[e[35]][e[82]]([e[61],e[62],this[e[10]][e[64]](e[63]),this[e[10]][e[64]](e[65]),this[e[10]][e[64]](e[66]),this[e[10]][e[64]](e[67]),this[e[10]][e[64]](e[68]),this[e[10]][e[64]](e[69]),this[e[10]][e[64]](e[70]),e[71],e[72],this[e[10]][e[64]](e[73]),this[e[10]][e[64]](e[74]),this[e[10]][e[64]](e[75]),e[76],e[77],e[78],e[79],e[80],this[e[10]][e[64]](e[81])]);this[e[83]]=ClientLib[e[86]][e[85]].GetInstance()[e[84]]();this[e[87]]=new qx[e[6]][e[60]].Table(this.ZL);this[e[87]][e[88]](false);this[e[87]][e[89]](0,0);this[e[87]][e[89]](1,0);this[e[87]][e[89]](2,Addons[e[51]][e[50]](e[90],120));this[e[87]][e[89]](3,Addons[e[51]][e[50]](e[91],60));this[e[87]][e[89]](4,Addons[e[51]][e[50]](e[92],50));this[e[87]][e[89]](5,Addons[e[51]][e[50]](e[93],60));this[e[87]][e[89]](6,Addons[e[51]][e[50]](e[94],60));this[e[87]][e[89]](7,Addons[e[51]][e[50]](e[95],60));this[e[87]][e[89]](8,Addons[e[51]][e[50]](e[96],60));this[e[87]][e[89]](9,Addons[e[51]][e[50]](e[97],30));this[e[87]][e[89]](10,Addons[e[51]][e[50]](e[98],30));this[e[87]][e[89]](11,Addons[e[51]][e[50]](e[99],50));this[e[87]][e[89]](12,Addons[e[51]][e[50]](e[100],50));this[e[87]][e[89]](13,Addons[e[51]][e[50]](e[101],30));this[e[87]][e[89]](14,Addons[e[51]][e[50]](e[102],60));this[e[87]][e[89]](15,Addons[e[51]][e[50]](e[103],60));this[e[87]][e[89]](16,Addons[e[51]][e[50]](e[104],60));this[e[87]][e[89]](17,Addons[e[51]][e[50]](e[105],50));this[e[87]][e[89]](18,Addons[e[51]][e[50]](e[106],50));this[e[87]][e[89]](19,Addons[e[51]][e[50]](e[107],40));var u=0;var t=this[e[87]][e[108]]();for(u=0;u<this[e[35]][e[109]]();u++){if(u==0||u==1||u==11||u==12){t[e[111]](u,Addons[e[51]][e[50]](e[110]+u,false));}else{t[e[111]](u,Addons[e[51]][e[50]](e[110]+u,true));}}t[e[111]](1,false);t[e[115]](9,new qx[e[6]][e[60]][e[114]].Icon(p[e[113]][MaelstromTools[e[112]][e[68]]]),e[71]);t[e[115]](10,new qx[e[6]][e[60]][e[114]].Icon(p[e[113]][MaelstromTools[e[112]][e[67]]],e[72]));t[e[119]](5,new qx[e[6]][e[60]][e[118]].Replace()[e[117]]({ReplaceFunction:this[e[116]]}));t[e[119]](6,new qx[e[6]][e[60]][e[118]].Replace()[e[117]]({ReplaceFunction:this[e[116]]}));t[e[119]](7,new qx[e[6]][e[60]][e[118]].Replace()[e[117]]({ReplaceFunction:this[e[116]]}));t[e[119]](8,new qx[e[6]][e[60]][e[118]].Replace()[e[117]]({ReplaceFunction:this[e[116]]}));t[e[119]](15,new qx[e[6]][e[60]][e[118]].Replace()[e[117]]({ReplaceFunction:this[e[116]]}));t[e[119]](16,new qx[e[6]][e[60]][e[118]].Replace()[e[117]]({ReplaceFunction:this[e[116]]}));t[e[119]](19,new qx[e[6]][e[60]][e[118]].Boolean());this[e[87]][e[122]](e[120],function(w){Addons[e[121]][e[11]]().FB(w);},this);t[e[122]](e[123],function(y){var x=y[e[125]]()[e[124]];var w=y[e[125]]()[e[126]];Addons[e[51]][e[128]](e[127]+x,w);},t);}catch(v){console[e[37]](e[129],v);}},FB:function(y){try{var A=this[e[31]][y[e[130]]()][0];var z=this[e[31]][y[e[130]]()][3];if(z!=null&&z[e[133]](e[132])[e[131]]==2){var x=parseInt(z[e[133]](e[132])[0]);var w=parseInt(z[e[133]](e[132])[1]);ClientLib[e[135]][e[134]].GetInstance().CenterGridPosition(x,w);}if(A&&!(this[e[137]][4][e[136]]())){var u=qx[e[140]][e[139]][e[138]]();u[e[142]]()[e[141]]();u[e[146]]()[e[145]](ClientLib[e[86]][e[144]][e[143]],A,0,0);}var t=ClientLib[e[86]][e[85]].GetInstance()[e[148]]()[e[147]]();if(t!=null){t[e[150]]()[e[149]](A);}}catch(v){console[e[37]](e[151],v);}},FN:function(t){this[e[154]][e[153]](this[e[10]][e[64]](e[152]));this[e[155]]=false;},CBChanged:function(t){this[e[155]]=false;},FA:function(t){var u=new qx[e[157]][e[156]].NumberFormat();u[e[158]](true);u[e[159]](3);if(!isNaN(t)){if(Math[e[160]](t)<100000){t=u[e[156]](Math[e[161]](t));}else{if(Math[e[160]](t)>=100000&&Math[e[160]](t)<1000000){t=u[e[156]](Math[e[161]](t/100)/10)+e[162];}else{if(Math[e[160]](t)>=1000000&&Math[e[160]](t)<10000000){t=u[e[156]](Math[e[161]](t/1000)/1000)+e[163];}else{if(Math[e[160]](t)>=10000000&&Math[e[160]](t)<100000000){t=u[e[156]](Math[e[161]](t/10000)/100)+e[163];}else{if(Math[e[160]](t)>=100000000&&Math[e[160]](t)<1000000000){t=u[e[156]](Math[e[161]](t/100000)/10)+e[163];}else{if(Math[e[160]](t)>=1000000000&&Math[e[160]](t)<10000000000){t=u[e[156]](Math[e[161]](t/1000000)/1000)+e[164];}else{if(Math[e[160]](t)>=10000000000&&Math[e[160]](t)<100000000000){t=u[e[156]](Math[e[161]](t/10000000)/100)+e[164];}else{if(Math[e[160]](t)>=100000000000&&Math[e[160]](t)<1000000000000){t=u[e[156]](Math[e[161]](t/100000000)/10)+e[164];}else{if(Math[e[160]](t)>=1000000000000&&Math[e[160]](t)<10000000000000){t=u[e[156]](Math[e[161]](t/1000000000)/1000)+e[10];}else{if(Math[e[160]](t)>=10000000000000&&Math[e[160]](t)<100000000000000){t=u[e[156]](Math[e[161]](t/10000000000)/100)+e[10];}else{if(Math[e[160]](t)>=100000000000000&&Math[e[160]](t)<1000000000000000){t=u[e[156]](Math[e[161]](t/100000000000)/10)+e[10];}else{if(Math[e[160]](t)>=1000000000000000){t=u[e[156]](Math[e[161]](t/1000000000000))+e[10];}}}}}}}}}}}}}return t.toString();},FH:function(){try{var D=new qx[e[6]][e[26]].Flow();var C=new qx[e[6]][e[165]].Composite(D);this[e[46]]=new qx[e[6]][e[48]].SelectBox();this[e[46]][e[14]](25);this[e[46]][e[166]](5);q[e[43]]();q=window[e[45]][e[44]][e[11]]();var G;for(G in q[e[47]]){var F=new qx[e[6]][e[48]].ListItem(G,null,q[e[47]][G].Object);this[e[46]][e[33]](F);if(Addons[e[51]][e[50]](e[49])==q[e[47]][G][e[53]][e[52]]()){this[e[46]][e[54]]([F]);}}this[e[46]][e[122]](e[167],function(H){this.FP(0,1,200);this[e[155]]=false;this[e[154]][e[153]](this[e[10]][e[64]](e[152]));},this);C[e[33]](this.ZC);var B=new qx[e[6]][e[170]].Label()[e[117]]({value:this[e[10]][e[64]](e[168]),textColor:e[169],margin:5});C[e[33]](B);this[e[171]]=new qx[e[6]][e[48]].SelectBox();this[e[171]][e[13]](50);this[e[171]][e[14]](25);this[e[171]][e[166]](5);var z=Addons[e[51]][e[50]](e[172],25);for(var x=11;x<41;x+=1){F=new qx[e[6]][e[48]].ListItem(e[173]+x,null,x);this[e[171]][e[33]](F);if(z==x){this[e[171]][e[54]]([F]);}}this[e[171]][e[122]](e[167],function(H){this[e[31]]=[];this.FP(0,1,200);this[e[155]]=false;this[e[154]][e[153]](this[e[10]][e[64]](e[152]));},this);C[e[33]](this.ZQ);var v=new qx[e[6]][e[170]].Label()[e[117]]({value:this[e[10]][e[64]](e[174]),textColor:e[169],margin:5});C[e[33]](v);var u=Addons[e[51]][e[50]](e[175],e[176]);this[e[177]]=new qx[e[6]][e[48]].TextField(u)[e[117]]({width:50});C[e[33]](this.ZY);this[e[137]]=[];this[e[137]][0]=new qx[e[6]][e[48]].CheckBox(this[e[10]][e[64]](e[178]));this[e[137]][0][e[166]](5);this[e[137]][0][e[179]](e[169]);this[e[137]][0][e[181]](Addons[e[51]][e[50]](e[180],false));this[e[137]][0][e[122]](e[182],function(H){this[e[31]]=[];this.FP(0,1,200);this[e[155]]=false;this[e[154]][e[153]](this[e[10]][e[64]](e[152]));},this);C[e[33]](this[e[137]][0]);this[e[137]][1]=new qx[e[6]][e[48]].CheckBox(this[e[10]][e[64]](e[183]));this[e[137]][1][e[166]](5);this[e[137]][1][e[179]](e[169]);this[e[137]][1][e[181]](Addons[e[51]][e[50]](e[184],false));this[e[137]][1][e[122]](e[182],function(H){this[e[31]]=[];this.FP(0,1,200);this[e[155]]=false;this[e[154]][e[153]](this[e[10]][e[64]](e[152]));},this);C[e[33]](this[e[137]][1]);this[e[137]][2]=new qx[e[6]][e[48]].CheckBox(this[e[10]][e[64]](e[185]));this[e[137]][2][e[166]](5);this[e[137]][2][e[179]](e[169]);this[e[137]][2][e[181]](Addons[e[51]][e[50]](e[186],false));this[e[137]][2][e[122]](e[182],function(H){this[e[31]]=[];this.FP(0,1,200);this[e[155]]=false;this[e[154]][e[153]](this[e[10]][e[64]](e[152]));},this);C[e[33]](this[e[137]][2]);this[e[137]][3]=new qx[e[6]][e[48]].CheckBox(this[e[10]][e[64]](e[187]));this[e[137]][3][e[166]](5);this[e[137]][3][e[179]](e[169]);this[e[137]][3][e[181]](Addons[e[51]][e[50]](e[188],true));this[e[137]][3][e[122]](e[182],function(H){this[e[31]]=[];this.FP(0,1,200);this[e[155]]=false;this[e[154]][e[153]](this[e[10]][e[64]](e[152]));},this);C[e[33]](this[e[137]][3],{lineBreak:true});this[e[154]]=new qx[e[6]][e[48]].Button(this[e[10]][e[64]](e[152]))[e[117]]({width:100,minWidth:100,maxWidth:100,height:25,margin:5});this[e[154]][e[122]](e[189],function(){this.FE();},this);C[e[33]](this.ZG);var t=new qx[e[6]][e[192]].Single(2,e[190],e[191]);this[e[193]]=new qx[e[6]][e[165]].Composite(new qx[e[6]][e[26]].Basic())[e[117]]({decorator:t,backgroundColor:e[194],allowGrowX:false,height:20,width:200});this[e[195]]=new qx[e[6]][e[140]].Widget()[e[117]]({decorator:null,backgroundColor:e[196],width:0});this[e[193]][e[33]](this.ZU);this[e[197]]=new qx[e[6]][e[170]].Label(e[173])[e[117]]({decorator:null,textAlign:e[198],width:200});this[e[193]][e[33]](this.ZX,{left:0,top:-3});C[e[33]](this.ZV);this[e[199]]=new qx[e[6]][e[48]].Button(this[e[10]][e[64]](e[200]))[e[117]]({minWidth:100,height:25,margin:5});this[e[199]][e[122]](e[189],function(){this[e[201]]=[];},this);C[e[33]](this.YZ);this[e[137]][4]=new qx[e[6]][e[48]].CheckBox(this[e[10]][e[64]](e[202]));this[e[137]][4][e[166]](5);this[e[137]][4][e[179]](e[169]);C[e[33]](this[e[137]][4],{lineBreak:true});this[e[203]]=new qx[e[6]][e[48]].SelectBox();this[e[203]][e[13]](150);this[e[203]][e[14]](25);this[e[203]][e[166]](5);var F=new qx[e[6]][e[48]].ListItem(e[204]+this[e[10]][e[64]](MaelstromTools[e[112]].Tiberium)+e[205]+this[e[10]][e[64]](MaelstromTools[e[112]].Crystal),null,7);this[e[203]][e[33]](F);F=new qx[e[6]][e[48]].ListItem(e[206]+this[e[10]][e[64]](MaelstromTools[e[112]].Tiberium)+e[207]+this[e[10]][e[64]](MaelstromTools[e[112]].Crystal),null,6);this[e[203]][e[33]](F);F=new qx[e[6]][e[48]].ListItem(e[208]+this[e[10]][e[64]](MaelstromTools[e[112]].Tiberium)+e[209]+this[e[10]][e[64]](MaelstromTools[e[112]].Crystal),null,5);this[e[203]][e[33]](F);C[e[33]](this.ZJ);this[e[210]]=new qx[e[6]][e[48]].Button(this[e[10]][e[64]](e[211]))[e[117]]({width:120,minWidth:120,maxWidth:120,height:25,margin:5});this[e[210]][e[122]](e[189],function(){var H=window[e[213]][e[212]][e[11]]();H[e[215]](this[e[10]][e[64]](e[214]));},this);this[e[210]][e[216]](false);C[e[33]](this.ZD);this[e[217]]=new qx[e[6]][e[165]].Composite();this[e[217]][e[27]](new qx[e[6]][e[26]].Flow());this[e[217]][e[13]](750);var A=webfrontend[e[219]][e[26]][e[218]][e[11]]();var y=2;for(y=2;y<this[e[35]][e[109]]();y++){var w=y-2;this[e[220]][w]=new qx[e[6]][e[48]].CheckBox(this[e[35]][e[221]](y));this[e[220]][w][e[181]](this[e[87]][e[108]]()[e[222]](y));this[e[220]][w][e[179]](e[169]);this[e[220]][w][e[223]]=y;this[e[220]][w][e[60]]=this[e[87]];this[e[220]][w][e[122]](e[182],function(H){var I=this[e[60]][e[108]]();I[e[111]](this[e[223]],H[e[125]]());Addons[e[51]][e[128]](e[110]+this[e[223]],H[e[125]]());});this[e[217]][e[33]](this[e[220]][w]);}this[e[224]]=new qx[e[6]][e[48]].Button(e[225])[e[117]]({margin:5});this[e[224]][e[122]](e[189],function(){if(this[e[226]]){C[e[227]](this.ZB,this.ZO);this[e[224]][e[153]](e[228]);}else{C[e[229]](this.ZB);this[e[224]][e[153]](e[225]);}this[e[226]]=!this[e[226]];},this);this[e[224]][e[231]](e[230]);C[e[33]](this.ZO,{lineBreak:true});this[e[232]]=C;}catch(E){console[e[37]](e[233],E);}},FD:function(){var v=ClientLib[e[86]][e[85]].GetInstance()[e[148]]();var t=v[e[147]]();var u=e[234];var w=new qx[e[6]][e[170]].Label()[e[117]]({value:u,rich:true,width:800});this[e[235]]=w;},FE:function(){var u=this[e[46]][e[237]]()[0][e[236]]();ClientLib[e[135]][e[134]].GetInstance().CenterGridPosition(u[e[238]](),u[e[239]]());ClientLib[e[135]][e[134]].GetInstance().Update();ClientLib[e[135]][e[134]].GetInstance().ViewUpdate();ClientLib[e[86]][e[85]].GetInstance()[e[148]]()[e[240]](u[e[52]]());if(this[e[241]]){var t=ClientLib[e[86]][e[244]][e[243]][e[242]];var y=g(t[e[245]],/this\.(.{6})=\(?\(?g>>8\)?\&.*d\+=f;this\.(.{6})=\(/,e[246],2);if(y!=null&&y[1][e[131]]==6){t[e[247]]=function(){return this[y[1]];};}else{console[e[249]](e[248]);}if(y!=null&&y[2][e[131]]==6){t[e[250]]=function(){return this[y[2]];};}else{console[e[249]](e[251]);}t=ClientLib[e[86]][e[244]][e[252]][e[242]];var x=g(t[e[245]],/100\){0,1};this\.(.{6})=Math.floor.*d\+=f;this\.(.{6})=\(/,e[253],2);if(x!=null&&x[1][e[131]]==6){t[e[247]]=function(){return this[x[1]];};}else{console[e[249]](e[254]);}if(x!=null&&x[2][e[131]]==6){t[e[250]]=function(){return this[x[2]];};}else{console[e[249]](e[255]);}t=ClientLib[e[86]][e[244]][e[256]][e[242]];var w=g(t[e[245]],/100\){0,1};this\.(.{6})=Math.floor.*this\.(.{6})=\(*g\>\>(22|0x16)\)*\&.*=-1;\}this\.(.{6})=\(/,e[257],4);if(w!=null&&w[1][e[131]]==6){t[e[247]]=function(){return this[w[1]];};}else{console[e[249]](e[258]);}if(w!=null&&w[2][e[131]]==6){t[e[259]]=function(){return this[w[2]];};}else{console[e[249]](e[260]);}if(w!=null&&w[4][e[131]]==6){t[e[250]]=function(){return this[w[4]];};}else{console[e[249]](e[261]);}this[e[241]]=false;}if(this[e[31]]==null){this[e[155]]=false;this[e[154]][e[153]](e[262]);this[e[210]][e[216]](false);window[e[264]](e[263],1000);return;}var v=0;for(i=0;i<this[e[31]][e[131]];i++){if(this[e[31]][i][1]==-1){v++;}}if(!this[e[155]]){this[e[154]][e[153]](e[262]);this[e[210]][e[216]](false);if(v>0){this[e[155]]=true;window[e[264]](e[265],1000);return;}else{this[e[155]]=false;window[e[264]](e[263],1000);}}else{this[e[155]]=false;this[e[154]][e[153]](this[e[10]][e[64]](e[152]));}},FP:function(v,u,t){if(this[e[195]]!=null&&this[e[197]]!=null){this[e[195]][e[13]](parseInt(v/u*t,10));this[e[197]][e[181]](v+e[266]+u);}},FJ:function(){try{this[e[267]]={};this[e[31]]=[];var N=this[e[46]][e[237]]()[0][e[236]]();Addons[e[51]][e[128]](e[49],N[e[52]]());var G=this[e[171]][e[237]]()[0][e[236]]();Addons[e[51]][e[128]](e[172],G);Addons[e[51]][e[128]](e[175],this[e[177]][e[136]]());var M=this[e[137]][0][e[136]]();var L=this[e[137]][1][e[136]]();var K=this[e[137]][2][e[136]]();var J=this[e[137]][3][e[136]]();var I=parseInt(this[e[177]][e[136]](),10);Addons[e[51]][e[128]](e[180],M);Addons[e[51]][e[128]](e[184],L);Addons[e[51]][e[128]](e[186],K);Addons[e[51]][e[128]](e[188],J);var F=N[e[238]]();var E=N[e[239]]();var H=0;var C=0;var B=ClientLib[e[86]][e[85]].GetInstance()[e[268]]();console[e[9]](e[269]+N[e[270]]());var A=true;var y=true;var w=true;var u=ClientLib[e[86]][e[85]].GetInstance()[e[272]]()[e[271]]();for(C=E-Math[e[161]](u+1);C<=E+Math[e[161]](u+1);C++){for(H=F-Math[e[161]](u+1);H<=F+Math[e[161]](u+1);H++){var t=Math[e[160]](F-H);var R=Math[e[160]](E-C);var Q=Math[e[273]]((t*t)+(R*R));if(Q<=u){var P=B.GetObjectFromPosition(H,C);var z={};if(P){if(P[e[274]]==1&&A){}if(P[e[274]]==2&&y){}if(P[e[274]]==3&&w){}if(P[e[274]]==3){if(I<=parseInt(P[e[247]](),10)){}}var x=N.CalculateAttackCommandPointCostToCoord(H,C);if(x<=G&&typeof P[e[247]]==e[275]){if(I<=parseInt(P[e[247]](),10)){var v=this.FL(P[e[250]](),0);var D=this.FL(P[e[250]](),1);if(D!=null){this[e[267]][P[e[250]]()]=D;}if(P[e[274]]==1&&M){if(v!=null){this[e[31]][e[276]](v);}else{this[e[31]][e[276]]([P[e[250]](),-1,this[e[10]][e[64]](e[178]),H+e[132]+C,P[e[247]](),0,0,0,0,0,0,0,0,x,0,0,0,0]);}}if(P[e[274]]==2&&L){if(v!=null){this[e[31]][e[276]](v);}else{this[e[31]][e[276]]([P[e[250]](),-1,this[e[10]][e[64]](e[183]),H+e[132]+C,P[e[247]](),0,0,0,0,0,0,0,0,x,0,0,0,0]);}}if(P[e[274]]==3&&(K||J)){if(v!=null){if(P[e[259]]()==2&&J){this[e[31]][e[276]](v);}if(P[e[259]]()==3&&K){this[e[31]][e[276]](v);}}else{if(P[e[259]]()==2&&J){this[e[31]][e[276]]([P[e[250]](),-1,this[e[10]][e[64]](e[187]),H+e[132]+C,P[e[247]](),0,0,0,0,0,0,0,0,x,0,0,0,0]);}if(P[e[259]]()==3&&K){this[e[31]][e[276]]([P[e[250]](),-1,this[e[10]][e[64]](e[185]),H+e[132]+C,P[e[247]](),0,0,0,0,0,0,0,0,x,0,0,0,0]);}}}}}}}}}this[e[155]]=true;this[e[35]][e[34]](this.ZE);this.FP(0,this[e[31]][e[131]],200);this[e[35]][e[277]](4,false);if(this[e[83]][e[278]]!=e[279]){window[e[264]](e[265],50);}}catch(O){console[e[37]](e[280],O);}},FG:function(){try{var u=false;var t=0;var X=10;var y=0;var R=150;while(!u){var Q=null;var O=0;var M=0;if(this[e[31]]==null){console[e[282]](e[281]);this[e[155]]=false;break;}for(y=0;y<this[e[31]][e[131]];y++){if(this[e[31]][y][1]==-1){break;}}if(y==this[e[31]][e[131]]){this[e[155]]=false;}this.FP(y,this[e[31]][e[131]],200);if(this[e[31]][y]==null){console[e[282]](e[283]);this[e[155]]=false;this[e[154]][e[153]](this[e[10]][e[64]](e[152]));this[e[210]][e[216]](true);break;}posData=this[e[31]][y][3];if(posData!=null&&posData[e[133]](e[132])[e[131]]==2){posX=parseInt(posData[e[133]](e[132])[0]);posY=parseInt(posData[e[133]](e[132])[1]);var K=ClientLib[e[86]][e[85]].GetInstance()[e[148]]()[e[147]]();var v=ClientLib[e[86]][e[85]].GetInstance()[e[268]]();var I=v.CheckFoundBase(posX,posY,K[e[284]](),K[e[285]]());this[e[31]][y][19]=(I==0)?true:false;M=this[e[31]][y][0];ClientLib[e[86]][e[85]].GetInstance()[e[148]]()[e[240]](M);Q=ClientLib[e[86]][e[85]].GetInstance()[e[148]]().GetCity(M);if(Q!=null){if(!Q[e[286]]()){var E=Q[e[287]]();if(E!=null){var T=this[e[46]][e[237]]()[0][e[236]]();var C=Q[e[289]]()[e[288]];var z=E[e[290]]()[e[288]];var w=T[e[287]]()[e[291]]()[e[288]];if(C!=null){var P=d(C);var L=d(z);this[e[31]][y][2]=Q[e[270]]();this[e[31]][y][5]=P[ClientLib[e[293]][e[292]][e[67]]]+L[ClientLib[e[293]][e[292]][e[67]]];this[e[31]][y][6]=P[ClientLib[e[293]][e[292]][e[68]]]+L[ClientLib[e[293]][e[292]][e[68]]];this[e[31]][y][7]=P[ClientLib[e[293]][e[292]][e[294]]]+L[ClientLib[e[293]][e[292]][e[294]]];this[e[31]][y][8]=P[ClientLib[e[293]][e[292]][e[295]]]+L[ClientLib[e[293]][e[292]][e[295]]];if(Q.GetBuildingsConditionInPercent()!=0){this[e[296]]=0;if(this[e[31]][y][5]!=0){var S=0;var J=0;var B=0;var H=0;var G=0;this[e[267]][M]=new Array(9);for(B=0;B<9;B++){this[e[267]][M][B]=new Array(8);}for(H=0;H<9;H++){for(G=0;G<8;G++){switch(Q.GetResourceType(H,G)){case 1:this[e[267]][M][H][G]=1;S++;break;case 2:this[e[267]][M][H][G]=2;J++;break;default:break;}}}this[e[31]][y][9]=S;this[e[31]][y][10]=J;this[e[31]][y][11]=Q.GetBuildingsConditionInPercent();this[e[31]][y][12]=Q.GetDefenseConditionInPercent();try{var F=w;var D=0;var A=0;for(var V in F){D+=F[V][e[297]]();}F=z;for(var V in F){A+=F[V][e[297]]();}F=C;for(var V in F){var U=F[V][e[298]]();if(U==158||U==131||U==195){this[e[31]][y][18]=8-F[V][e[299]]();}if(U==112||U==151||U==177){this[e[31]][y][17]=8-F[V][e[299]]();}}}catch(N){console[e[37]](e[300],N);}this[e[31]][y][14]=(A/D);this[e[31]][y][15]=this[e[31]][y][5]+this[e[31]][y][6]+this[e[31]][y][7];this[e[31]][y][16]=this[e[31]][y][15]/this[e[31]][y][13];this[e[31]][y][1]=0;u=true;console[e[9]](Q[e[270]](),e[301]);this[e[296]]=0;this[e[302]]=0;this.FK(this[e[31]][y],this[e[267]][M],M);this[e[35]][e[34]](this.ZE);}}else{if(this[e[296]]>250){console[e[9]](this[e[31]][y][2],e[303],posX,posY,e[304]);this[e[31]][e[305]](y,1);this[e[296]]=0;this[e[302]]=0;break;}this[e[296]]++;}}}}else{console[e[9]](this[e[31]][y][2],e[303],posX,posY,e[306]);this[e[31]][e[305]](y,1);break;}}}t++;if(t>=X){u=true;break;}}if(this[e[307]]!=y){this[e[307]]=y;this[e[302]]=0;this[e[296]]=0;}else{if(this[e[302]]>16){console[e[9]](this[e[31]][y][2],e[303],posX,posY,e[308]);this[e[31]][e[305]](y,1);this[e[302]]=0;}else{if(this[e[302]]>10){R=500;}else{if(this[e[302]]>4){R=250;}}}this[e[302]]++;}if(this[e[155]]&&Addons[e[121]][e[11]]()[e[41]]()){window[e[264]](e[265],R);}else{this[e[154]][e[153]](this[e[10]][e[64]](e[152]));this[e[155]]=false;}}catch(W){console[e[37]](e[309],W);}},FK:function(v,u,t){this[e[201]][e[276]](v);this[e[310]][t]=u;},FL:function(u,v){if(v==0){for(var t=0;t<this[e[201]][e[131]];t++){if(this[e[201]][t][0]==u){return this[e[201]][t];}}}else{if(this[e[310]][u]){return this[e[310]][u];}}return null;}}});qx[e[312]][e[311]](e[313],{type:e[3],extend:qx[e[6]][e[5]][e[4]],construct:function(){try{this[e[7]](arguments);console[e[9]](e[314]+window[e[0]]);this[e[13]](820);this[e[14]](400);this[e[15]](10);this[e[16]](false);this[e[17]](true);this[e[18]](true);this[e[19]](true);this[e[20]](true);this[e[21]](false);this[e[22]](true);this[e[23]](false);this[e[24]](null);this[e[25]](10);this[e[27]](new qx[e[6]][e[26]].Grow());this[e[315]]=[];this[e[32]]();this[e[201]]=new qx[e[6]][e[165]].Scroll();this[e[177]]=new qx[e[6]][e[165]].Composite(new qx[e[6]][e[26]].Flow());this[e[33]](this.ZZ,{flex:3});this[e[201]][e[33]](this.ZY);}catch(t){console[e[37]](e[316],t);}},members:{ZW:null,ZZ:null,ZY:null,ZX:null,openWindow:function(u){try{this[e[40]](u);if(this[e[41]]()){this[e[42]]();}else{this[e[55]]();this[e[56]](100,100);this.FO();}}catch(t){console[e[58]](e[317],t);}},FO:function(){var H=window[e[213]][e[121]][e[11]]()[e[267]];var F=window[e[213]][e[121]][e[11]]()[e[31]];this[e[197]]=[];var D=window[e[213]][e[121]][e[11]]()[e[203]][e[237]]()[0][e[236]]();var B=null;if(F==null){console[e[9]](e[318]);return;}this[e[315]]=[];var w;var u;var z;var y;var I;for(w in H){for(u=0;u<F[e[131]];u++){if(F[u][0]==w){B=F[u];}}if(B==null){continue;}if(D>4&&D<8){if(D!=B[10]){continue;}}else{continue;}posData=B[3];if(posData!=null&&posData[e[133]](e[132])[e[131]]==2){posX=parseInt(posData[e[133]](e[132])[0]);posY=parseInt(posData[e[133]](e[132])[1]);}var t=e[319];var G=B[2]+e[320]+B[3];t=t+e[321]+G+e[322];for(y=0;y<8;y++){t=t+e[323];for(z=0;z<9;z++){var E=e[173];var C=H[w][z][y];switch(C==undefined?0:C){case 2:E=e[324]+p[e[113]][MaelstromTools[e[112]][e[67]]]+e[325];break;case 1:E=e[324]+p[e[113]][MaelstromTools[e[112]][e[68]]]+e[325];break;default:E=e[324]+p[e[113]][e[326]]+e[325];break;}t=t+e[327]+E+e[328];}t=t+e[329];}t=t+e[330];var v=new qx[e[6]][e[170]].Label()[e[117]]({backgroundColor:e[331],value:t,rich:true});v[e[332]]=w;this[e[197]][e[276]](w);v[e[122]](e[333],function(L){var K=qx[e[140]][e[139]][e[138]]();K[e[142]]()[e[141]]();K[e[146]]()[e[145]](ClientLib[e[86]][e[144]][e[143]],this[e[332]],0,0);var J=ClientLib[e[86]][e[85]].GetInstance()[e[148]]()[e[147]]();if(J!=null){J[e[150]]()[e[149]](this[e[332]]);}});v[e[334]]=w;this[e[315]][e[276]](v);}this[e[177]][e[32]]();var A=0;var x=0;for(I=0;I<this[e[315]][e[131]];I++){this[e[177]][e[33]](this[e[315]][I],{row:A,column:x});x++;if(x>4){x=0;A++;}}}}});qx[e[312]][e[311]](e[335],{type:e[336],extend:qx[e[140]][e[53]],statics:{isSupported:function(){return typeof(localStorage)!==e[337];},isdefined:function(t){return(localStorage[t]!==e[337]&&localStorage[t]!=null);},isdefineddata:function(u,t){return(u[t]!==e[337]&&u[t]!=null);},setglobal:function(v,t){try{if(Addons[e[51]][e[338]]()){localStorage[v]=JSON[e[339]](t);}}catch(u){console[e[37]](e[340],u);}},getglobal:function(v,u){try{if(Addons[e[51]][e[338]]()){if(Addons[e[51]][e[341]](v)){return JSON[e[342]](localStorage[v]);}}}catch(t){console[e[58]](e[343],t);}return u;},setserver:function(w,t){try{if(Addons[e[51]][e[338]]()){var v=ClientLib[e[86]][e[85]].GetInstance()[e[272]]()[e[270]]();var x;if(Addons[e[51]][e[341]](v)){try{x=JSON[e[342]](localStorage[v]);if(!(typeof x===e[344])){x={};console[e[37]](e[345]);}}catch(u){console[e[37]](e[346],u);x={};}}else{x={};}x[w]=t;localStorage[v]=JSON[e[339]](x);}}catch(u){console[e[37]](e[347],u);}},getserver:function(w,v){try{if(Addons[e[51]][e[338]]()){var u=ClientLib[e[86]][e[85]].GetInstance()[e[272]]()[e[270]]();if(Addons[e[51]][e[341]](u)){var x=JSON[e[342]](localStorage[u]);if(Addons[e[51]][e[348]](x,w)){return x[w];}}}}catch(t){console[e[58]](e[349],t);}return v;}}});if(typeof Addons[e[12]]===e[337]){qx[e[312]][e[311]](e[350],{type:e[3],extend:qx[e[140]][e[53]],members:{d:{},debug:false,addtranslateobj:function(t){if(t[e[352]](e[351])){this[e[288]][t[e[351]].toString()]=t;if(this[e[37]]){console[e[58]](e[353],t[e[351]].toString());}delete t[e[351]];}else{console[e[37]](e[354]);}},get:function(v){var u=qx[e[357]][e[356]][e[11]]()[e[355]]();var t=u[e[133]](e[358])[0];if(this[e[288]][e[352]](v)){if(this[e[288]][v][e[352]](t)){return this[e[288]][v][t];}}if(this[e[37]]){console[e[37]](e[359],v,e[360],t);}return v;}}});}qx[e[312]][e[311]](e[361],{extend:qx[e[6]][e[60]][e[118]][e[362]],properties:{replaceMap:{check:e[53],nullable:true,init:null},replaceFunction:{check:e[363],nullable:true,init:null}},members:{_getContentHtml:function(w){var x=w[e[364]];var v=this[e[365]]();var u=this[e[366]]();var t;if(v){t=v[x];if(typeof t!=e[337]){w[e[364]]=t;return qx[e[369]][e[368]][e[367]](this._formatValue(w));}}if(u){w[e[364]]=u(x);}return qx[e[369]][e[368]][e[367]](this._formatValue(w));},addReversedReplaceMap:function(){var t=this[e[365]]();for(var v in t){var u=t[v];t[u]=v;}return true;}}});console[e[9]](e[370]);var s=Addons[e[12]][e[11]]();s[e[37]]=false;s[e[373]]({main:e[371],de:e[372],pt:e[372],fr:e[372]});s[e[373]]({main:e[374],de:e[375],pt:e[376],fr:e[377]});s[e[373]]({main:e[152],de:e[378],pt:e[379],fr:e[380]});s[e[373]]({main:e[65],de:e[381],pt:e[382],fr:e[383]});s[e[373]]({main:e[178],de:e[384],pt:e[385],fr:e[386]});s[e[373]]({main:e[183],de:e[183],pt:e[183],fr:e[183]});s[e[373]]({main:e[387],de:e[388],pt:e[389],fr:e[390]});s[e[373]]({main:e[187],de:e[391],pt:e[187],fr:e[187]});s[e[373]]({main:e[185],de:e[392],pt:e[393],fr:e[394]});s[e[373]]({main:e[214],de:e[214],pt:e[395],fr:e[396]});s[e[373]]({main:e[397],de:e[398],pt:e[399],fr:e[400]});s[e[373]]({main:e[73],de:e[401],pt:e[402],fr:e[403]});s[e[373]]({main:e[74],de:e[404],pt:e[405],fr:e[406]});s[e[373]]({main:e[75],de:e[407],pt:e[75],fr:e[75]});s[e[373]]({main:e[168],de:e[408],pt:e[409],fr:e[410]});s[e[373]]({main:e[174],de:e[411],pt:e[412],fr:e[413]});s[e[373]]({main:e[200],de:e[414],pt:e[415],fr:e[416]});s[e[373]]({main:e[202],de:e[417],pt:e[418],fr:e[419]});s[e[373]]({main:e[81],de:e[420],pt:e[421],fr:e[422]});s[e[373]]({main:e[423],de:e[424],pt:e[425],fr:e[424]});s[e[373]]({main:e[426],de:e[427],pt:e[428],fr:e[429]});s[e[373]]({main:e[430],de:e[431],pt:e[432],fr:e[433]});s[e[373]]({main:e[67],de:e[67],pt:e[434],fr:e[67]});s[e[373]]({main:e[68],de:e[435],pt:e[436],fr:e[436]});s[e[373]]({main:e[437],de:e[438],pt:e[439],fr:e[440]});s[e[373]]({main:e[69],de:e[441],pt:e[442],fr:e[443]});s[e[373]]({main:e[70],de:e[444],pt:e[445],fr:e[446]});s[e[373]]({main:e[447],de:e[448],pt:e[448],fr:e[448]});var r=null;var q=null;var p=null;var o=null;var n=0;var m=0;o=ClientLib[e[450]][e[449]].GetInstance();r=window[e[45]][e[12]][e[11]]();q=window[e[45]][e[44]][e[11]]();p=window[e[45]][e[293]][e[11]]();p[e[453]](e[451],e[452],o);p[e[453]](e[326],e[454],o);var l=p[e[457]](s[e[64]](e[374])+e[455]+window[e[0]],e[451],false,p[e[456]](2));l[e[122]](e[189],function(){Addons[e[121]][e[11]]()[e[215]](s[e[64]](e[374])+e[458]+window[e[0]]);},this);Addons[e[121]][e[11]]()[e[122]](e[42],Addons[e[121]][e[11]]().FN,Addons[e[121]][e[11]]());p[e[459]](e[451],l);if(typeof Addons[e[460]]!==e[337]){var k=Addons[e[460]][e[11]]();k.AddMainMenu(e[461],function(){Addons[e[121]][e[11]]()[e[215]](s[e[64]](e[374])+e[458]+window[e[0]]);},e[462]);}}function d(o){try{var q=[0,0,0,0,0,0,0,0];if(o==null){return q;}for(var l in o){var n=o[l];var m=MaelstromTools[e[463]].GetUnitLevelRequirements(n);for(var k=0;k<m[e[131]];k++){q[m[k][e[274]]]+=m[k][e[464]]*n[e[465]]();if(n[e[465]]()<1){}}}return q;}catch(p){console[e[37]](e[466],p);}}function f(k){var m;for(m in k){if(typeof(k[m])==e[275]){var l=k[m].toString();console[e[37]](m,l);}}}function g(k,r,q,m){var p=[];var o=k.toString();var n=o[e[467]](/\s/gim,e[173]);p=n[e[468]](r);var l;for(l=1;l<(m+1);l++){if(p!=null&&p[l][e[131]]==6){console[e[37]](q,l,p[l]);}else{if(p!=null&&p[l][e[131]]>0){console[e[282]](q,l,p[l]);}else{console[e[249]](e[469],q,l,e[470]);console[e[282]](q,n);}}}return p;}function h(){try{if(typeof qx!=e[337]&&typeof MaelstromTools!=e[337]){j();}else{window[e[264]](h,1000);}}catch(k){console[e[37]](e[471],k);}}if(/commandandconquer\.com/i[e[473]](document[e[472]])){window[e[264]](h,10000);}};try{var a=document.createElement("script");a.innerHTML="("+b.toString()+")();";a.type="text/javascript";if(/commandandconquer\.com/i.test(document.domain)){document.getElementsByTagName("head")[0].appendChild(a);}}catch(c){console.debug("MaelstromTools_Basescanner: init error: ",c);}}
)();



// ==UserScript==
// @version       1.7.6
// @updateURL     https://userscripts.org/scripts/source/131289.meta.js
// @downloadURL   https://userscripts.org/scripts/source/131289.user.js
// @name          C&C:TA CNCOpt Link Button
// @namespace     http://cncopt.com/
// @icon          http://cncopt.com/favicon.ico
// @description   Creates a "CNCOpt" button when selecting a base in Command & Conquer: Tiberium Alliances. The share button takes you to http://cncopt.com/ and fills in the selected base information so you can analyze or share the base.
// @include       http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @include       http*://*.cncopt.com/*
// @include       http*://cncopt.com/*
// @grant         GM_log
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_registerMenuCommand
// @grant         GM_xmlhttpRequest
// @grant         GM_updatingEnabled
// @grant         unsafeWindow
// @contributor   PythEch (http://http://userscripts.org/users/220246)
// @contributor   jerbri (http://userscripts.org/users/507954)
// ==/UserScript==
/* 

2013-03-03: Special thanks to jerbri for fixing this up so it worked again!
2012-11-25: Special thanks to PythEch for fixing this up so it worked again!

*/
var scity = null;
var tcity = null;
var tbase = null;
try {
  unsafeWindow.__cncopt_version = "1.7.6";
  (function () {
    var cncopt_main = function () {

      var defense_unit_map = {
        /* GDI Defense Units */"GDI_Wall": "w",
        "GDI_Cannon": "c",
        "GDI_Antitank Barrier": "t",
        "GDI_Barbwire": "b",
        "GDI_Turret": "m",
        "GDI_Flak": "f",
        "GDI_Art Inf": "r",
        "GDI_Art Air": "e",
        "GDI_Art Tank": "a",
        "GDI_Def_APC Guardian": "g",
        "GDI_Def_Missile Squad": "q",
        "GDI_Def_Pitbull": "p",
        "GDI_Def_Predator": "d",
        "GDI_Def_Sniper": "s",
        "GDI_Def_Zone Trooper": "z",
        /* Nod Defense Units */"NOD_Def_Antitank Barrier": "t",
        "NOD_Def_Art Air": "e",
        "NOD_Def_Art Inf": "r",
        "NOD_Def_Art Tank": "a",
        "NOD_Def_Attack Bike": "p",
        "NOD_Def_Barbwire": "b",
        "NOD_Def_Black Hand": "z",
        "NOD_Def_Cannon": "c",
        "NOD_Def_Confessor": "s",
        "NOD_Def_Flak": "f",
        "NOD_Def_MG Nest": "m",
        "NOD_Def_Militant Rocket Soldiers": "q",
        "NOD_Def_Reckoner": "g",
        "NOD_Def_Scorpion Tank": "d",
        "NOD_Def_Wall": "w",

        /* Forgotten Defense Units */"FOR_Wall": "w",
        "FOR_Barbwire_VS_Inf": "b",
        "FOR_Barrier_VS_Veh": "t",
        "FOR_Inf_VS_Inf": "g",
        "FOR_Inf_VS_Veh": "r",
        "FOR_Inf_VS_Air": "q",
        "FOR_Sniper": "n",
        "FOR_Mammoth": "y",
        "FOR_Veh_VS_Inf": "o",
        "FOR_Veh_VS_Veh": "s",
        "FOR_Veh_VS_Air": "u",
        "FOR_Turret_VS_Inf": "m",
        "FOR_Turret_VS_Inf_ranged": "a",
        "FOR_Turret_VS_Veh": "v",
        "FOR_Turret_VS_Veh_ranged": "d",
        "FOR_Turret_VS_Air": "f",
        "FOR_Turret_VS_Air_ranged": "e",
        "": ""
      };

      var offense_unit_map = {
        /* GDI Offense Units */"GDI_APC Guardian": "g",
        "GDI_Commando": "c",
        "GDI_Firehawk": "f",
        "GDI_Juggernaut": "j",
        "GDI_Kodiak": "k",
        "GDI_Mammoth": "m",
        "GDI_Missile Squad": "q",
        "GDI_Orca": "o",
        "GDI_Paladin": "a",
        "GDI_Pitbull": "p",
        "GDI_Predator": "d",
        "GDI_Riflemen": "r",
        "GDI_Sniper Team": "s",
        "GDI_Zone Trooper": "z",

        /* Nod Offense Units */"NOD_Attack Bike": "b",
        "NOD_Avatar": "a",
        "NOD_Black Hand": "z",
        "NOD_Cobra": "r",
        "NOD_Commando": "c",
        "NOD_Confessor": "s",
        "NOD_Militant Rocket Soldiers": "q",
        "NOD_Militants": "m",
        "NOD_Reckoner": "k",
        "NOD_Salamander": "l",
        "NOD_Scorpion Tank": "o",
        "NOD_Specter Artilery": "p",
        "NOD_Venom": "v",
        "NOD_Vertigo": "t",
        "": ""
      };


      function findTechLayout(city) {
        for (var k in city) {
          //console.log(typeof(city[k]), "1.city[", k, "]", city[k])
          if ((typeof (city[k]) == "object") && city[k] && 0 in city[k] && 8 in city[k]) {
            if ((typeof (city[k][0]) == "object") && city[k][0] && city[k][0] && 0 in city[k][0] && 15 in city[k][0]) {
              if ((typeof (city[k][0][0]) == "object") && city[k][0][0] && "BuildingIndex" in city[k][0][0]) {
                return city[k];
              }
            }
          }
        }
        return null;
      }

      function findBuildings(city) {
        var cityBuildings = city.get_CityBuildingsData();
        for (var k in cityBuildings) {
          if (PerforceChangelist >= 376877) {
            if ((typeof (cityBuildings[k]) === "object") && cityBuildings[k] && "d" in cityBuildings[k] && "c" in cityBuildings[k] && cityBuildings[k].c > 0) {
              return cityBuildings[k].d;
            }
          } else {
            if ((typeof (cityBuildings[k]) === "object") && cityBuildings[k] && "l" in cityBuildings[k]) {
              return cityBuildings[k].l;
            }
          }
        }
      }

      function isOffenseUnit(unit) {
        return (unit.get_UnitGameData_Obj().n in offense_unit_map);
      }

      function isDefenseUnit(unit) {
        return (unit.get_UnitGameData_Obj().n in defense_unit_map);
      }

      function getUnitArrays(city) {
        var ret = [];
        for (var k in city) {
          if ((typeof (city[k]) == "object") && city[k]) {
            for (var k2 in city[k]) {
              if (PerforceChangelist >= 376877) {
                if ((typeof (city[k][k2]) == "object") && city[k][k2] && "d" in city[k][k2]) {
                  var lst = city[k][k2].d;
                  if ((typeof (lst) == "object") && lst) {
                    for (var i in lst) {
                      if (typeof (lst[i]) == "object" && lst[i] && "get_CurrentLevel" in lst[i]) {
                        ret.push(lst);
                      }
                    }
                  }
                }
              } else {
                if ((typeof (city[k][k2]) == "object") && city[k][k2] && "l" in city[k][k2]) {
                  var lst = city[k][k2].l;
                  if ((typeof (lst) == "object") && lst) {
                    for (var i in lst) {
                      if (typeof (lst[i]) == "object" && lst[i] && "get_CurrentLevel" in lst[i]) {
                        ret.push(lst);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        return ret;
      }

      function getDefenseUnits(city) {
        var arr = getUnitArrays(city);
        for (var i = 0; i < arr.length; ++i) {
          for (var j in arr[i]) {
            if (isDefenseUnit(arr[i][j])) {
              return arr[i];
            }
          }
        }
        return [];
      }

      function getOffenseUnits(city) {
        var arr = getUnitArrays(city);
        for (var i = 0; i < arr.length; ++i) {
          for (var j in arr[i]) {
            if (isOffenseUnit(arr[i][j])) {
              return arr[i];
            }
          }
        }
        return [];
      }


      function cncopt_create() {
        console.log("CNCOpt Link Button v" + window.__cncopt_version + " loaded");
        var cncopt = {
          selected_base: null,
          keymap: {
            /* GDI Buildings */"GDI_Accumulator": "a",
            "GDI_Refinery": "r",
            "GDI_Trade Center": "u",
            "GDI_Silo": "s",
            "GDI_Power Plant": "p",
            "GDI_Construction Yard": "y",
            "GDI_Airport": "d",
            "GDI_Barracks": "b",
            "GDI_Factory": "f",
            "GDI_Defense HQ": "q",
            "GDI_Defense Facility": "w",
            "GDI_Command Center": "e",
            "GDI_Support_Art": "z",
            "GDI_Support_Air": "x",
            "GDI_Support_Ion": "i",
            /* Forgotten Buildings */"FOR_Silo": "s",
            "FOR_Refinery": "r",
            "FOR_Tiberium Booster": "b",
            "FOR_Crystal Booster": "v",
            "FOR_Trade Center": "u",
            "FOR_Defense Facility": "w",
            "FOR_Construction Yard": "y",
            "FOR_Harvester_Tiberium": "h",
            "FOR_Defense HQ": "q",
            "FOR_Harvester_Crystal": "n",
            /* Nod Buildings */"NOD_Refinery": "r",
            "NOD_Power Plant": "p",
            "NOD_Harvester": "h",
            "NOD_Construction Yard": "y",
            "NOD_Airport": "d",
            "NOD_Trade Center": "u",
            "NOD_Defense HQ": "q",
            "NOD_Barracks": "b",
            "NOD_Silo": "s",
            "NOD_Factory": "f",
            "NOD_Harvester_Crystal": "n",
            "NOD_Command Post": "e",
            "NOD_Support_Art": "z",
            "NOD_Support_Ion": "i",
            "NOD_Accumulator": "a",
            "NOD_Support_Air": "x",
            "NOD_Defense Facility": "w",
            //"NOD_Tech Lab": "",
            //"NOD_Recruitment Hub": "X",
            //"NOD_Temple of Nod": "X",

            /* GDI Defense Units */"GDI_Wall": "w",
            "GDI_Cannon": "c",
            "GDI_Antitank Barrier": "t",
            "GDI_Barbwire": "b",
            "GDI_Turret": "m",
            "GDI_Flak": "f",
            "GDI_Art Inf": "r",
            "GDI_Art Air": "e",
            "GDI_Art Tank": "a",
            "GDI_Def_APC Guardian": "g",
            "GDI_Def_Missile Squad": "q",
            "GDI_Def_Pitbull": "p",
            "GDI_Def_Predator": "d",
            "GDI_Def_Sniper": "s",
            "GDI_Def_Zone Trooper": "z",
            /* Nod Defense Units */"NOD_Def_Antitank Barrier": "t",
            "NOD_Def_Art Air": "e",
            "NOD_Def_Art Inf": "r",
            "NOD_Def_Art Tank": "a",
            "NOD_Def_Attack Bike": "p",
            "NOD_Def_Barbwire": "b",
            "NOD_Def_Black Hand": "z",
            "NOD_Def_Cannon": "c",
            "NOD_Def_Confessor": "s",
            "NOD_Def_Flak": "f",
            "NOD_Def_MG Nest": "m",
            "NOD_Def_Militant Rocket Soldiers": "q",
            "NOD_Def_Reckoner": "g",
            "NOD_Def_Scorpion Tank": "d",
            "NOD_Def_Wall": "w",

            /* Forgotten Defense Units */"FOR_Wall": "w",
            "FOR_Barbwire_VS_Inf": "b",
            "FOR_Barrier_VS_Veh": "t",
            "FOR_Inf_VS_Inf": "g",
            "FOR_Inf_VS_Veh": "r",
            "FOR_Inf_VS_Air": "q",
            "FOR_Sniper": "n",
            "FOR_Mammoth": "y",
            "FOR_Veh_VS_Inf": "o",
            "FOR_Veh_VS_Veh": "s",
            "FOR_Veh_VS_Air": "u",
            "FOR_Turret_VS_Inf": "m",
            "FOR_Turret_VS_Inf_ranged": "a",
            "FOR_Turret_VS_Veh": "v",
            "FOR_Turret_VS_Veh_ranged": "d",
            "FOR_Turret_VS_Air": "f",
            "FOR_Turret_VS_Air_ranged": "e",

            /* GDI Offense Units */"GDI_APC Guardian": "g",
            "GDI_Commando": "c",
            "GDI_Firehawk": "f",
            "GDI_Juggernaut": "j",
            "GDI_Kodiak": "k",
            "GDI_Mammoth": "m",
            "GDI_Missile Squad": "q",
            "GDI_Orca": "o",
            "GDI_Paladin": "a",
            "GDI_Pitbull": "p",
            "GDI_Predator": "d",
            "GDI_Riflemen": "r",
            "GDI_Sniper Team": "s",
            "GDI_Zone Trooper": "z",

            /* Nod Offense Units */"NOD_Attack Bike": "b",
            "NOD_Avatar": "a",
            "NOD_Black Hand": "z",
            "NOD_Cobra": "r",
            "NOD_Commando": "c",
            "NOD_Confessor": "s",
            "NOD_Militant Rocket Soldiers": "q",
            "NOD_Militants": "m",
            "NOD_Reckoner": "k",
            "NOD_Salamander": "l",
            "NOD_Scorpion Tank": "o",
            "NOD_Specter Artilery": "p",
            "NOD_Venom": "v",
            "NOD_Vertigo": "t",

            "<last>": "."
          },
          make_sharelink: function () {
            try {
              var selected_base = cncopt.selected_base;
              var city_id = selected_base.get_Id();
              var city = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(city_id);
              var own_city = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
              var alliance = ClientLib.Data.MainData.GetInstance().get_Alliance();
              var server = ClientLib.Data.MainData.GetInstance().get_Server();
              tbase = selected_base;
              tcity = city;
              scity = own_city;
		  city_fraktion = null;
              //console.log("Target City: ", city);
              //console.log("Own City: ", own_city);
              var link = "http://cncopt.com/?map=";
              link += "3|"; /* link version */
              switch (city.get_CityFaction()) {
                case 1:
                  /* GDI */
                  link += "G|";
			city_fraktion = "G|";
                  break;
                case 2:
                  /* NOD */
                  link += "N|";
			city_fraktion = "N|";
                  break;
                case 3:
                  /* FOR faction - unseen, but in GAMEDATA */
                case 4:
                  /* Forgotten Bases */
                case 5:
                  /* Forgotten Camps */
                case 6:
                  /* Forgotten Outposts */
                  link += "F|";
                  break;
                default:
                  console.log("cncopt: Unknown faction: " + city.get_CityFaction());
                  link += "E|";
                  break;
              }
              switch (own_city.get_CityFaction()) {
                case 1:
                  /* GDI */
                  if (city_fraktion) {
			link += city_fraktion;
		  }else{
			link += "G|";
		  }
                  break;
                case 2:
                  /* NOD */
                  if (city_fraktion) {
			link += city_fraktion;
		  }else{
			link += "N|";
		  }
                  break;
                case 3:
                  /* FOR faction - unseen, but in GAMEDATA */
                case 4:
                  /* Forgotten Bases */
                case 5:
                  /* Forgotten Camps */
                case 6:
                  /* Forgotten Outposts */
                  link += "F|";
                  break;
                default:
                  console.log("cncopt: Unknown faction: " + own_city.get_CityFaction());
                  link += "E|";
                  break;
              }
              link += city.get_Name() + "|";
              defense_units = []
              for (var i = 0; i < 20; ++i) {
                var col = [];
                for (var j = 0; j < 9; ++j) {
                  col.push(null);
                }
                defense_units.push(col)
              }
              var defense_unit_list = getDefenseUnits(city);
              if (PerforceChangelist >= 376877) {
                for (var i in defense_unit_list) {
                  var unit = defense_unit_list[i];
                  defense_units[unit.get_CoordX()][unit.get_CoordY() + 8] = unit;
                }
              } else {
                for (var i = 0; i < defense_unit_list.length; ++i) {
                  var unit = defense_unit_list[i];
                  defense_units[unit.get_CoordX()][unit.get_CoordY() + 8] = unit;
                }
              }

              offense_units = []
              for (var i = 0; i < 20; ++i) {
                var col = [];
                for (var j = 0; j < 9; ++j) {
                  col.push(null);
                }
                offense_units.push(col)
              }

             /* Gegnerische OFF anzeigen */
	     var offense_unit_list = null;
	      if (city_fraktion) {
			offense_unit_list = getOffenseUnits(city);
		  }else{
			offense_unit_list = getOffenseUnits(own_city);
		  }
//               var offense_unit_list = getOffenseUnits(own_city); 
//		var offense_unit_list = getOffenseUnits(city);
              if (PerforceChangelist >= 376877) {
                for (var i in offense_unit_list) {
                  var unit = offense_unit_list[i];
                  offense_units[unit.get_CoordX()][unit.get_CoordY() + 16] = unit;
                }
              } else {
                for (var i = 0; i < offense_unit_list.length; ++i) {
                  var unit = offense_unit_list[i];
                  offense_units[unit.get_CoordX()][unit.get_CoordY() + 16] = unit;
                }
              }

              var techLayout = findTechLayout(city);
              var buildings = findBuildings(city);
              for (var i = 0; i < 20; ++i) {
                row = [];
                for (var j = 0; j < 9; ++j) {
                  var spot = i > 16 ? null : techLayout[j][i];
                  var level = 0;
                  var building = null;
                  if (spot && spot.BuildingIndex >= 0) {
                    building = buildings[spot.BuildingIndex];
                    level = building.get_CurrentLevel();
                  }
                  var defense_unit = defense_units[j][i];
                  if (defense_unit) {
                    level = defense_unit.get_CurrentLevel();
                  }
                  var offense_unit = offense_units[j][i];
                  if (offense_unit) {
                    level = offense_unit.get_CurrentLevel();
                  }
                  if (level > 1) {
                    link += level;
                  }

                  switch (i > 16 ? 0 : city.GetResourceType(j, i)) {
                    case 0:
                      if (building) {
                        var techId = building.get_MdbBuildingId();
                        if (GAMEDATA.Tech[techId].n in cncopt.keymap) {
                          link += cncopt.keymap[GAMEDATA.Tech[techId].n];
                        } else {
                          console.log("cncopt [5]: Unhandled building: " + techId, building);
                          link += ".";
                        }
                      } else if (defense_unit) {
                        if (defense_unit.get_UnitGameData_Obj().n in cncopt.keymap) {
                          link += cncopt.keymap[defense_unit.get_UnitGameData_Obj().n];
                        } else {
                          console.log("cncopt [5]: Unhandled unit: " + defense_unit.get_UnitGameData_Obj().n);
                          link += ".";
                        }
                      } else if (offense_unit) {
                        if (offense_unit.get_UnitGameData_Obj().n in cncopt.keymap) {
                          link += cncopt.keymap[offense_unit.get_UnitGameData_Obj().n];
                        } else {
                          console.log("cncopt [5]: Unhandled unit: " + offense_unit.get_UnitGameData_Obj().n);
                          link += ".";
                        }
                      } else {
                        link += ".";
                      }
                      break;
                    case 1:
                      /* Crystal */
                      if (spot.BuildingIndex < 0) link += "c";
                      else link += "n";
                      break;
                    case 2:
                      /* Tiberium */
                      if (spot.BuildingIndex < 0) link += "t";
                      else link += "h";
                      break;
                    case 4:
                      /* Woods */
                      link += "j";
                      break;
                    case 5:
                      /* Scrub */
                      link += "h";
                      break;
                    case 6:
                      /* Oil */
                      link += "l";
                      break;
                    case 7:
                      /* Swamp */
                      link += "k";
                      break;
                    default:
                      console.log("cncopt [4]: Unhandled resource type: " + city.GetResourceType(j, i));
                      link += ".";
                      break;
                  }
                }
              }
              /* Tack on our alliance bonuses */
              if (alliance && scity.get_AllianceId() == tcity.get_AllianceId()) {
                link += "|" + alliance.get_POITiberiumBonus();
                link += "|" + alliance.get_POICrystalBonus();
                link += "|" + alliance.get_POIPowerBonus();
                link += "|" + alliance.get_POIInfantryBonus();
                link += "|" + alliance.get_POIVehicleBonus();
                link += "|" + alliance.get_POIAirBonus();
                link += "|" + alliance.get_POIDefenseBonus();
              }
              if (server.get_TechLevelUpgradeFactorBonusAmount() != 1.20) {
                  link += "|newEconomy";
              }

              //console.log(link);
              window.open(link, "_blank");
            } catch (e) {
              console.log("cncopt [1]: ", e);
            }
          }
        };
        if (!webfrontend.gui.region.RegionCityMenu.prototype.__cncopt_real_showMenu) {
          webfrontend.gui.region.RegionCityMenu.prototype.__cncopt_real_showMenu = webfrontend.gui.region.RegionCityMenu.prototype.showMenu;
        }

        var check_ct = 0;
        var check_timer = null;
        var button_enabled = 123456;
        /* Wrap showMenu so we can inject our Sharelink at the end of menus and
         * sync Base object to our cncopt.selected_base variable  */
        webfrontend.gui.region.RegionCityMenu.prototype.showMenu = function (selected_base) {
          try {
            var self = this;
            //console.log(selected_base);
            cncopt.selected_base = selected_base;
            if (this.__cncopt_initialized != 1) {
              this.__cncopt_initialized = 1;
              this.__cncopt_links = [];
              for (var i in this) {
                try {
                  if (this[i] && this[i].basename == "Composite") {
                    var link = new qx.ui.form.Button("CNCOpt", "http://cncopt.com/favicon.ico");
                    link.addListener("execute", function () {
                      var bt = qx.core.Init.getApplication();
                      bt.getBackgroundArea().closeCityInfo();
                      cncopt.make_sharelink();
                    });
                    this[i].add(link);
                    this.__cncopt_links.push(link)
                  }
                } catch (e) {
                  console.log("cncopt [2]: ", e);
                }
              }
            }
            var tf = false;
            switch (selected_base.get_VisObjectType()) {
              case ClientLib.Vis.VisObject.EObjectType.RegionCityType:
                switch (selected_base.get_Type()) {
                  case ClientLib.Vis.Region.RegionCity.ERegionCityType.Own:
                    tf = true;
                    break;
                  case ClientLib.Vis.Region.RegionCity.ERegionCityType.Alliance:
                  case ClientLib.Vis.Region.RegionCity.ERegionCityType.Enemy:
                    tf = true;
                    break;
                }
                break;
              case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:
                tf = false;
                console.log("cncopt: Ghost City selected.. ignoring because we don't know what to do here");
                break;
              case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:
                tf = true;
                break;
              case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:
                tf = true;
                break;
            }

            var orig_tf = tf;

            function check_if_button_should_be_enabled() {
              try {
                tf = orig_tf;
                var selected_base = cncopt.selected_base;
                var still_loading = false;
                if (check_timer != null) {
                  clearTimeout(check_timer);
                }

                /* When a city is selected, the data for the city is loaded in the background.. once the 
                 * data arrives, this method is called again with these fields set, but until it does
                 * we can't actually generate the link.. so this section of the code grays out the button
                 * until the data is ready, then it'll light up. */
                if (selected_base && selected_base.get_Id) {
                  var city_id = selected_base.get_Id();
                  var city = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(city_id);
                  //if (!city || !city.m_CityUnits || !city.m_CityUnits.m_DefenseUnits) {
                  //console.log("City", city);
                  //console.log("get_OwnerId", city.get_OwnerId());
                  if (!city || city.get_OwnerId() == 0) {
                    still_loading = true;
                    tf = false;
                  }
                } else {
                  tf = false;
                }
                if (tf != button_enabled) {
                  button_enabled = tf;
                  for (var i = 0; i < self.__cncopt_links.length; ++i) {
                    self.__cncopt_links[i].setEnabled(tf);
                  }
                }
                if (!still_loading) {
                  check_ct = 0;
                } else {
                  if (check_ct > 0) {
                    check_ct--;
                    check_timer = setTimeout(check_if_button_should_be_enabled, 100);
                  } else {
                    check_timer = null;
                  }
                }
              } catch (e) {
                console.log("cncopt [3]: ", e);
                tf = false;
              }
            }

            check_ct = 50;
            check_if_button_should_be_enabled();
          } catch (e) {
            console.log("cncopt [3]: ", e);
          }
          this.__cncopt_real_showMenu(selected_base);
        }
      }


      /* Nice load check (ripped from AmpliDude's LoU Tweak script) */
      function cnc_check_if_loaded() {
        try {
          if (typeof qx != 'undefined') {
            a = qx.core.Init.getApplication(); // application
            if (a) {
              cncopt_create();
            } else {
              window.setTimeout(cnc_check_if_loaded, 1000);
            }
          } else {
            window.setTimeout(cnc_check_if_loaded, 1000);
          }
        } catch (e) {
          if (typeof console != 'undefined') console.log(e);
          else if (window.opera) opera.postError(e);
          else GM_log(e);
        }
      }
      if (/commandandconquer\.com/i.test(document.domain)) window.setTimeout(cnc_check_if_loaded, 1000);
    }

    // injecting because we can't seem to hook into the game interface via unsafeWindow 
    //   (Ripped from AmpliDude's LoU Tweak script)
    var script_block = document.createElement("script");
    txt = cncopt_main.toString();
    script_block.innerHTML = "(" + txt + ")();";
    script_block.type = "text/javascript";
    if (/commandandconquer\.com/i.test(document.domain)) document.getElementsByTagName("head")[0].appendChild(script_block);
  })();
} catch (e) {
  GM_log(e);
}


// ==UserScript==
// @name        C&C:TA Compass Movable
// @namespace   http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @description Creates compass poiting to the currently selected base (compass points from itself).
// @version     1.1.0
// @author      Caine,BlinDManX
// @include     http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// ==/UserScript==
(function () {
    var CompassMain = function () {
        try {
            function createCompass() {
                console.log('Compass loaded');
                qx.Class.define("Compass", {
                    extend: qx.ui.window.Window,
                    construct: function () {
                        this.base(arguments);
                        this.setWidth(54);
                        this.setHeight(90);
                        this.setContentPadding(0);
                        this.setShowMinimize(false);
                        this.setShowMaximize(false);
                        this.setShowClose(false);
                        this.setResizable(false);
                        this.setAllowMaximize(false);
                        this.setAllowMinimize(false);
                        this.setAllowClose(false);
                        this.setShowStatusbar(false);
                        this.setDecorator(null);                        
                        var title = this.getChildControl("title");
                        title.setTextAlign("center");
                        title.setTextColor("#FFF");
                        title.setRich(true);
                        title.setDecorator("tabview-chat-pane");
                        var captionBar = this.getChildControl("captionbar");
                        captionBar.setDecorator(null);
                        captionBar.remove(this.getChildControl("icon"));
                        captionBar.remove(this.getChildControl("minimize-button"));
                        captionBar.remove(this.getChildControl("restore-button"));
                        captionBar.remove(this.getChildControl("maximize-button"));
                        captionBar.remove(this.getChildControl("close-button"));
                        captionBar.setLayout(new qx.ui.layout.Grow());
                       
                        var pane = this.getChildControl("pane");
                        pane.setDecorator(null);
                        pane.setLayout(new qx.ui.layout.Grow());
                        this.setLayout(new qx.ui.layout.Canvas());
                      
                        var st = '<canvas id="compass" style="border:1px solid;position: absolute; top: 0px; left: 0px;" height="50" width="50"></canvas>';
                        var l = new qx.ui.basic.Label().set({
                            value: st,
                            rich: true
                        });
                        this.add(l);  
                        if (PerforceChangelist >= 382917) {
                            phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance().get_Region(), "PositionChange", ClientLib.Vis.PositionChange, this, this.displayCompass);
                        } else {
                            webfrontend.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance().get_Region(), "PositionChange", ClientLib.Vis.PositionChange, this, this.displayCompass);
                        }
                        this.addListener("move", function (e) {
                            this.displayCompass();
                        });
                        this.displayCompass();
                        
                    },
                    members: {
                        needle: null,                        
                        ec: null,
                        ctx: null,
                        halfsize: 25,
                        displayCompass: function () {
                            try {                                                              
                                if (this.ctx != null) {   
                                        var currentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(); 
                                        var faction = currentCity.get_CityFaction();
                                        var winpos = this.getLayoutProperties();
                                        var ctx = this.ctx; 
                                        var cityCoordX = currentCity.get_PosX();
                                        var cityCoordY = currentCity.get_PosY();
                                        var region = ClientLib.Vis.VisMain.GetInstance().get_Region();
                                        var zoom = region.get_ZoomFactor();
                                        var targetCoordX = winpos.left + 34;
                                        var targetCoordY = winpos.top +  61;
                                        var gridW = region.get_GridWidth();
                                        var gridH = region.get_GridHeight();
                                        var viewCoordX = (region.get_PosX() + targetCoordX / zoom - zoom * gridW / 2) / gridW;
                                        var viewCoordY = (region.get_PosY() + targetCoordY / zoom - zoom * gridH / 2) / gridH;
                                        var dx = viewCoordX - cityCoordX;
                                        var dy = cityCoordY - viewCoordY;
                                        var distance = Math.sqrt(dx * dx + dy * dy);
                                        var dtext = Math.round(10 * distance) / 10;
                                        var t = qx.lang.String.pad(currentCity.get_Name(),7,"")+"<br>"+dtext;
                                        this.setCaption(t);
                                        
                                        
                                        ctx.clearRect(0, 0, 50, 50);
                                        ctx.save();
                                        ctx.globalAlpha = 0.5;
                                        ctx.fillStyle = '#000';
                                        ctx.fillRect(0, 0, 50, 50); // Mittelpunkt
                                        ctx.globalAlpha = 1.0;
                     
                                        ctx.translate(25, 25);
                                        ctx.rotate(dy > 0 ? Math.asin(dx / distance) : -Math.asin(dx / distance) + Math.PI); 
                                        ctx.beginPath();			
                                        ctx.moveTo(0, 20);			
                                        ctx.lineTo(17, -15);
                                        ctx.lineTo(-17, -15);
                                        ctx.closePath();
                                        ctx.moveTo(0, 0);			
                                        ctx.lineTo(10, -22);
                                        ctx.lineTo(-10, -22);
                                        ctx.closePath();            
                                        
                                        ctx.lineWidth =4.0;                                    
                                        ctx.fillStyle = faction == ClientLib.Base.EFactionType.GDIFaction ? "#00a" : "#a00"; 
                                        ctx.strokeStyle = "#000";
                                    
                                        ctx.fill();
                                        ctx.stroke();
                                        ctx.restore();
                                        //console.log(faction);
                                                                        
                                } else {                                    
                                    this.ec = document.getElementById("compass");
                                    if (this.ec != null){
                                        this.ctx = this.ec.getContext('2d');
                                        console.log("Compass ok");                                                                                                          
                                    } 
                                } 
                            } catch (e) {
                                console.log("displayCompass", e);
                            }
                        }
                    }
                });
                var win = new Compass();
                win.moveTo(140, 30);
                win.open();               
            }
        } catch (e) {
            console.log('createCompass: ', e);
        }
        function CompassCheckLoaded() {
            try {
                if (typeof qx != 'undefined' && qx.core.Init.getApplication() && qx.core.Init.getApplication().getUIItem(ClientLib.Data.Missions.PATH.BAR_NAVIGATION) && qx.core.Init.getApplication().getUIItem(ClientLib.Data.Missions.PATH.BAR_NAVIGATION).isVisible()) {
                    window.setTimeout(createCompass, 5000);
                    
                } else {
                    window.setTimeout(CompassCheckLoaded, 1000);
                }
            } catch (e) {
                console.log('CompassCheckLoaded: ', e);
            }
        }
        if (/commandandconquer\.com/i.test(document.domain)) {
            window.setTimeout(CompassCheckLoaded, 5000);
        }
    }
    try {
        var CompassScript = document.createElement('script');
        CompassScript.innerHTML = "(" + CompassMain.toString() + ')();';
        CompassScript.type = 'text/javascript';
        if (/commandandconquer\.com/i.test(document.domain)) {
            document.getElementsByTagName('head')[0].appendChild(CompassScript);
        }
    } catch (e) {
        console.log('Compass: init error: ', e);
    }
})();



// ==UserScript==
// @name           Tiberium Alliances Zoom
// @description    Allows you to zoom out further
// @namespace      https://prodgame*.alliances.commandandconquer.com/*/index.aspx* 
// @include        https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version        
// @author         Panavia, fix  SKY
// @require        
// ==/UserScript==

(function (){
  var tazoom_main = function() {
    function initialize() {
      console.log("Zoom Loaded");
      
      var zoomMin = 2.0;	// Larger number means able to zoom in closer.
      var zoomMax = 0.1;	// Smaller number means able to zoom out further.
      var zoomInc = 0.12;	// Larger number for faster zooming, Smaller number for slower zooming.
      
      webfrontend.gui.BackgroundArea.prototype.onHotKeyPress = function(be) {
        if(!this.active || be.getTarget() != this.mapContainer)
          return;
        var bh = be.getKeyIdentifier();
        var bf = ClientLib.Vis.VisMain.GetInstance();
        switch(bh) {
          case "+":
            var bg = bf.get_Region().get_ZoomFactor() + zoomInc;
            bf.get_Region().set_ZoomFactor(Math.min(zoomMin, Math.max(zoomMax, bg)));
            break;
          case "-":
            var bg = bf.get_Region().get_ZoomFactor() - zoomInc;
            bf.get_Region().set_ZoomFactor(Math.min(zoomMin, Math.max(zoomMax, bg)));
            break;
        }
        this.closeCityInfo();
        this.closeCityList();
      }

      var backgroundArea = qx.core.Init.getApplication().getBackgroundArea();
      qx.bom.Element.removeListener(backgroundArea.mapContainer, "mousewheel", backgroundArea._onMouseWheel, backgroundArea);
      qx.bom.Element.removeListener(backgroundArea.mapBlocker, "mousewheel", backgroundArea._onMouseWheel, backgroundArea);
      webfrontend.gui.BackgroundArea.prototype._onMouseWheel = function(e) {
        if(this.activeSceneView == null)
          return;
        var bz = e.getWheelDelta();
        var by = this.activeSceneView.get_ZoomFactor();
        by += bz > 0 ? -zoomInc : zoomInc;
        by = Math.min(zoomMin, Math.max(zoomMax, by));
        this.activeSceneView.set_ZoomFactor(by);
        e.stop();
      }
      qx.bom.Element.addListener(backgroundArea.mapContainer, "mousewheel", backgroundArea._onMouseWheel, backgroundArea);
      qx.bom.Element.addListener(backgroundArea.mapBlocker, "mousewheel", backgroundArea._onMouseWheel, backgroundArea); 
    }
 
    function tazoom_checkIfLoaded() {
      try {
        if (typeof qx != 'undefined') {
          a = qx.core.Init.getApplication(); // application
          mb = qx.core.Init.getApplication().getMenuBar();
          if (a && mb) {
            initialize();
          } else
            window.setTimeout(tazoom_checkIfLoaded, 1000);
        } else {
          window.setTimeout(tazoom_checkIfLoaded, 1000);
        }
      } catch (e) {
        if (typeof console != 'undefined') console.log(e);
        else if (window.opera) opera.postError(e);
        else GM_log(e);
      }
    }
    
    if (/commandandconquer\.com/i.test(document.domain)) {
      window.setTimeout(tazoom_checkIfLoaded, 1000);
    }
  }

  // injecting, because there seem to be problems when creating game interface with unsafeWindow
  var tazoomScript = document.createElement("script");
  tazoomScript.innerHTML = "(" + tazoom_main.toString() + ")();";
  tazoomScript.type = "text/javascript";
  if (/commandandconquer\.com/i.test(document.domain)) {
    document.getElementsByTagName("head")[0].appendChild(tazoomScript);
  }
})();



// ==UserScript==
// @name            WarChiefs - Tiberium Alliances Upgrade Base/Defense/Army
// @description     Upgrade your Base,Defense Army to a specific Level.
// @author          Eistee
// @version         13.07.20
// @namespace       http*://*.alliances.commandandconquer.com/*
// @include         http*://*.alliances.commandandconquer.com/*
// @require         http://usocheckup.redirectme.net/167564.js
// @icon            http://s3.amazonaws.com/uso_ss/icon/167564/large.png
// @updateURL       https://userscripts.org/scripts/source/167564.meta.js
// @downloadURL     https://userscripts.org/scripts/source/167564.user.js
// @grant           GM_getValue
// @grant           GM_log
// @grant           GM_openInTab
// @grant           GM_registerMenuCommand
// @grant           GM_setValue
// @grant           GM_xmlhttpRequest
// ==/UserScript==
(function () {
    var injectFunction = function () {
        function createClasses() {
            qx.Class.define("Upgrade", {
                type: "singleton",
                extend: qx.core.Object,
                construct: function () {
                    try {
                        var qxApp = qx.core.Init.getApplication();

                        var btnUpgrade = new qx.ui.form.Button(qxApp.tr("tnf:toggle upgrade mode"), "FactionUI/icons/icon_building_detail_upgrade.png").set({
                            toolTipText: qxApp.tr("tnf:toggle upgrade mode"),
                            alignY: "middle",
                            show: "icon",
                            width : 60,
                            allowGrowX : false,
                            allowGrowY : false,
                            appearance : "button"
                        });
                        btnUpgrade.addListener("click", this.toggleWindow, this);

                        var btnTrade = qx.core.Init.getApplication().getPlayArea().getHUD().getUIItem(ClientLib.Data.Missions.PATH.WDG_TRADE);
                        btnTrade.getLayoutParent().addAfter(btnUpgrade, btnTrade);
                    } catch (e) {
                        console.log("Error setting up Upgrade Constructor: ");
                        console.log(e.toString());
                    }
                },
                destruct: function () {},
                members: {
                    toggleWindow: function () {
                        if (Upgrade.Window.getInstance().isVisible()) Upgrade.Window.getInstance().close();
                        else Upgrade.Window.getInstance().open();
                    }
                }
            });
            qx.Class.define("Upgrade.Window", {
                type: "singleton",
                extend: qx.ui.window.Window,
                construct: function () {
                    try {
                        var qxApp = qx.core.Init.getApplication();
                        this.base(arguments);
                        this.set({
                            layout: new qx.ui.layout.VBox().set({ spacing: 0 }),
                            contentPadding: 5,
                            contentPaddingTop: 0,
                            allowMaximize: false,
                            showMaximize: false,
                            allowMinimize: false,
                            showMinimize: false,
                            resizable: false
                        });
                        this.moveTo(124, 31);
                        this.getChildControl("icon").set({ width : 18, height : 18, scale : true, alignY : "middle" });

                        var cntCurrent = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({ padding: 5, decorator: "pane-light-opaque" });
                        cntCurrent.add(this.titCurrent = new qx.ui.basic.Label("").set({ alignX: "center", font: "font_size_14_bold" }));
                        cntCurrent.add(this.selCurrent = new qx.ui.basic.Label("").set({ alignX: "center" }));
                        var cntCurrentHBox = new qx.ui.container.Composite(new qx.ui.layout.HBox(5))
                        cntCurrentHBox.add(new qx.ui.basic.Label(qxApp.tr("tnf:level:")).set({ alignY: "middle" }));
                        cntCurrentHBox.add(this.txtCurrent = new qx.ui.form.Spinner(1).set({ maximum: 150, minimum: 1 }));
                        cntCurrentHBox.add(this.btnCurrent = new qx.ui.form.Button(qxApp.tr("tnf:toggle upgrade mode"), "FactionUI/icons/icon_building_detail_upgrade.png"));
                        this.txtCurrent.addListener("changeValue", this.onInputCurrent, this);
                        this.btnCurrent.addListener("execute", this.onUpgradeCurrent, this);
                        cntCurrent.add(cntCurrentHBox);
                        var cntCurrentRes = new qx.ui.container.Composite(new qx.ui.layout.HBox(5))
                        cntCurrentRes.add(new qx.ui.basic.Label(qxApp.tr("tnf:requires:")));
                        cntCurrentRes.add(this.tibCurrent = new qx.ui.basic.Atom("-", "webfrontend/ui/common/icn_res_tiberium.png"));
                        cntCurrentRes.add(this.cryCurrent = new qx.ui.basic.Atom("-", "webfrontend/ui/common/icn_res_chrystal.png"));
                        cntCurrentRes.add(this.powCurrent = new qx.ui.basic.Atom("-", "webfrontend/ui/common/icn_res_power.png"));
                        this.tibCurrent.setToolTipIcon("webfrontend/ui/common/icn_res_tiberium.png");
                        this.cryCurrent.setToolTipIcon("webfrontend/ui/common/icn_res_chrystal.png");
                        this.powCurrent.setToolTipIcon("webfrontend/ui/common/icn_res_power.png");
                        this.tibCurrent.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                        this.cryCurrent.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                        this.powCurrent.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                        cntCurrent.add(cntCurrentRes);
                        this.add(cntCurrent);

                        var cntAll = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({ padding: 5, decorator: "pane-light-opaque" });
                        cntAll.add(this.titAll = new qx.ui.basic.Label("").set({ alignX: "center", font: "font_size_14_bold" }));
                        var cntAllHBox = new qx.ui.container.Composite(new qx.ui.layout.HBox(5))
                        cntAllHBox.add(new qx.ui.basic.Label(qxApp.tr("tnf:level:")).set({ alignY: "middle" }));
                        cntAllHBox.add(this.txtAll = new qx.ui.form.Spinner(1).set({ maximum: 150, minimum: 1 }));
                        cntAllHBox.add(this.btnAll = new qx.ui.form.Button(qxApp.tr("tnf:toggle upgrade mode"), "FactionUI/icons/icon_building_detail_upgrade.png"));
                        this.txtAll.addListener("changeValue", this.onInputAll, this);
                        this.btnAll.addListener("execute", this.onUpgradeAll, this);
                        cntAll.add(cntAllHBox);
                        var cntAllRes = new qx.ui.container.Composite(new qx.ui.layout.HBox(5))
                        cntAllRes.add(new qx.ui.basic.Label(qxApp.tr("tnf:requires:")));
                        cntAllRes.add(this.tibAll = new qx.ui.basic.Atom("-", "webfrontend/ui/common/icn_res_tiberium.png"));
                        cntAllRes.add(this.cryAll = new qx.ui.basic.Atom("-", "webfrontend/ui/common/icn_res_chrystal.png"));
                        cntAllRes.add(this.powAll = new qx.ui.basic.Atom("-", "webfrontend/ui/common/icn_res_power.png"));
                        this.tibAll.setToolTipIcon("webfrontend/ui/common/icn_res_tiberium.png");
                        this.cryAll.setToolTipIcon("webfrontend/ui/common/icn_res_chrystal.png");
                        this.powAll.setToolTipIcon("webfrontend/ui/common/icn_res_power.png");
                        this.tibAll.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                        this.cryAll.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                        this.powAll.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
                        cntAll.add(cntAllRes);
                        this.add(cntAll);

                        this.addListener("appear", this.onOpen, this);
                        this.addListener("close", this.onClose, this);
                    } catch (e) {
                        console.log("Error setting up Upgrade.Window Constructor: ");
                        console.log(e.toString());
                    }
                },
                destruct: function () {},
                members: {
                    Current: null,
                    titCurrent: null,
                    selCurrent: null,
                    txtCurrent: null,
                    btnCurrent: null,
                    tibCurrent: null,
                    cryCurrent: null,
                    powCurrent: null,
                    titAll: null,
                    txtAll: null,
                    btnAll: null,
                    tibAll: null,
                    cryAll: null,
                    powAll: null,
                    onOpen: function () {
                        phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this.onViewModeChanged);
                        phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "SelectionChange", ClientLib.Vis.SelectionChange, this, this.onSelectionChange);
                        phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.onCurrentCityChange);
                        phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.onCurrentCityChange);
                        this.onViewModeChanged(null, ClientLib.Vis.VisMain.GetInstance().get_Mode());
                    },
                    onClose: function () {
                        phe.cnc.Util.detachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this.onViewModeChanged);
                        phe.cnc.Util.detachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "SelectionChange", ClientLib.Vis.SelectionChange, this, this.onSelectionChange);
                        phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.onCurrentCityChange);
                        phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.onCurrentCityChange);
                    },
                    onViewModeChanged: function (oldMode, newMode) {
                        if (oldMode !== newMode) {
                            var qxApp = qx.core.Init.getApplication();
                            switch (newMode) {
                            case ClientLib.Vis.Mode.City:
                                this.setCaption(qxApp.tr("tnf:toggle upgrade mode") + ": " + qxApp.tr("tnf:base"));
                                this.setIcon("FactionUI/icons/icon_arsnl_base_buildings.png");
                                this.titCurrent.setValue(qxApp.tr("Selected building"));
                                this.titAll.setValue(qxApp.tr("All buildings"));
                                this.resetAll();
                                this.resetCurrent();
                                break;
                            case ClientLib.Vis.Mode.DefenseSetup:
                                this.setCaption(qxApp.tr("tnf:toggle upgrade mode") + ": " + qxApp.tr("tnf:defense"));
                                this.setIcon("FactionUI/icons/icon_def_army_points.png");
                                this.titCurrent.setValue(qxApp.tr("Selected defense unit"));
                                this.titAll.setValue(qxApp.tr("All defense units"));
                                this.resetAll();
                                this.resetCurrent();
                                break;
                            case ClientLib.Vis.Mode.ArmySetup:
                                this.setCaption(qxApp.tr("tnf:toggle upgrade mode") + ": " + qxApp.tr("tnf:offense"));
                                this.setIcon("FactionUI/icons/icon_army_points.png");
                                this.titCurrent.setValue(qxApp.tr("Selected army unit"));
                                this.titAll.setValue(qxApp.tr("All army units"));
                                this.resetAll();
                                this.resetCurrent();
                                break;
                            default:
                                this.close();
                                break;
                            }
                        }
                    },
                    onSelectionChange: function (oldObj, newObj) {
                        if (newObj != null) {
                            switch (newObj.get_VisObjectType()) {
                            case ClientLib.Vis.VisObject.EObjectType.CityBuildingType:
                                this.Current = newObj;
                                var name = newObj.get_BuildingName();
                                var level = newObj.get_BuildingLevel();
                                this.selCurrent.setValue(name + " (" + level + ")");
                                this.txtCurrent.setMinimum(level + 1);
                                this.txtCurrent.setMaximum(level + 51);
                                this.txtCurrent.setValue(level + 1);
                                this.txtCurrent.setEnabled(true);
                                this.btnCurrent.setEnabled(true);
                                this.onInputCurrent();
                                break;
                            case ClientLib.Vis.VisObject.EObjectType.DefenseUnitType:
                            case ClientLib.Vis.VisObject.EObjectType.ArmyUnitType:
                                this.Current = newObj;
                                var name = newObj.get_UnitName();
                                var level = newObj.get_UnitLevel();
                                this.selCurrent.setValue(name + " (" + level + ")");
                                this.txtCurrent.setMinimum(level + 1);
                                this.txtCurrent.setMaximum(level + 51);
                                this.txtCurrent.setValue(level + 1);
                                this.txtCurrent.setEnabled(true);
                                this.btnCurrent.setEnabled(true);
                                this.onInputCurrent();
                                break;
                            }
                        }
                    },
                    onCurrentCityChange: function (oldObj, newObj) {
                        if (oldObj !== newObj) {
                            this.resetAll();
                            this.resetCurrent();
                        }
                    },
                    GetCurrentUpgradeCostsToLevel: function (Current, newLevel) {
                        var costs = null;
                        if (Current !== null && newLevel > 0) {
                            switch (Current.get_VisObjectType()) {
                            case ClientLib.Vis.VisObject.EObjectType.CityBuildingType:
                                if (newLevel > Current.get_BuildingLevel())
                                    costs = ClientLib.API.City.GetInstance().GetUpgradeCostsForBuildingToLevel(Current.get_BuildingDetails(), newLevel);
                                break;
                            case ClientLib.Vis.VisObject.EObjectType.DefenseUnitType:
                                if (newLevel > Current.get_UnitLevel())
                                    costs = ClientLib.API.Defense.GetInstance().GetUpgradeCostsForUnitToLevel(Current.get_UnitDetails(), newLevel);
                                break;
                            case ClientLib.Vis.VisObject.EObjectType.ArmyUnitType:
                                if (newLevel > Current.get_UnitLevel())
                                    costs = ClientLib.API.Army.GetInstance().GetUpgradeCostsForUnitToLevel(Current.get_UnitDetails(), newLevel);
                                break;
                            }
                        }
                        return costs;
                    },
                    resetCurrent: function () {
                        this.Current = null;
                        this.selCurrent.setValue("-");
                        this.txtCurrent.setMinimum(0);
                        this.txtCurrent.setMaximum(0);
                        this.txtCurrent.resetValue();
                        this.txtCurrent.setEnabled(false);
                        this.btnCurrent.setEnabled(false);
                        this.onInputCurrent();
                    },
                    onInputCurrent: function () {
                        var costs = this.GetCurrentUpgradeCostsToLevel(this.Current, parseInt(this.txtCurrent.getValue(), 10));
                        if (costs !== null) {
                            for (var i = 0, Tib = 0, Cry = 0, Pow = 0; i < costs.length; i++) {
                                var uCosts = costs[i];
                                var cType = parseInt(uCosts.Type, 10);
                                switch (cType) {
                                case ClientLib.Base.EResourceType.Tiberium:
                                    Tib += uCosts.Count;
                                    break;
                                case ClientLib.Base.EResourceType.Crystal:
                                    Cry += uCosts.Count;
                                    break;
                                case ClientLib.Base.EResourceType.Power:
                                    Pow += uCosts.Count;
                                    break;
                                }
                            }
                            this.tibCurrent.setLabel(phe.cnc.gui.util.Numbers.formatNumbersCompact(Tib));
                            this.tibCurrent.setToolTipText(phe.cnc.gui.util.Numbers.formatNumbers(Tib));
                            if (Tib === 0) this.tibCurrent.exclude();
                            else this.tibCurrent.show();
                            this.cryCurrent.setLabel(phe.cnc.gui.util.Numbers.formatNumbersCompact(Cry));
                            this.cryCurrent.setToolTipText(phe.cnc.gui.util.Numbers.formatNumbers(Cry));
                            if (Cry === 0) this.cryCurrent.exclude();
                            else this.cryCurrent.show();
                            this.powCurrent.setLabel(phe.cnc.gui.util.Numbers.formatNumbersCompact(Pow));
                            this.powCurrent.setToolTipText(phe.cnc.gui.util.Numbers.formatNumbers(Pow));
                            if (Pow === 0) this.powCurrent.exclude();
                            else this.powCurrent.show();
                        } else {
                            this.tibCurrent.setLabel("-");
                            this.tibCurrent.resetToolTipText();
                            this.tibCurrent.show();
                            this.cryCurrent.setLabel("-");
                            this.cryCurrent.resetToolTipText();
                            this.cryCurrent.show();
                            this.powCurrent.setLabel("-");
                            this.powCurrent.resetToolTipText();
                            this.powCurrent.show();
                        }
                    },
                    onUpgradeCurrent: function() {
                        var newLevel = parseInt(this.txtCurrent.getValue(), 10);
                        if (newLevel > 0 && this.Current !== null) {
                            switch (this.Current.get_VisObjectType()) {
                            case ClientLib.Vis.VisObject.EObjectType.CityBuildingType:
                                if (newLevel > this.Current.get_BuildingLevel()) {
                                    ClientLib.API.City.GetInstance().UpgradeBuildingToLevel(this.Current.get_BuildingDetails(), newLevel);
                                    this.onSelectionChange(null, this.Current);
                                }
                                break;
                            case ClientLib.Vis.VisObject.EObjectType.DefenseUnitType:
                                if (newLevel > this.Current.get_UnitLevel()) {
                                    ClientLib.API.Defense.GetInstance().UpgradeUnitToLevel(this.Current.get_UnitDetails(), newLevel);
                                    this.onSelectionChange(null, this.Current);
                                }
                                break;
                            case ClientLib.Vis.VisObject.EObjectType.ArmyUnitType:
                                if (newLevel > this.Current.get_UnitLevel()) {
                                    ClientLib.API.Army.GetInstance().UpgradeUnitToLevel(this.Current.get_UnitDetails(), newLevel);
                                    this.onSelectionChange(null, this.Current);
                                }
                                break;
                            }
                        }
                    },
                    GetAllUpgradeCostsToLevel: function (newLevel) {
                        if (newLevel > 0) {
                            switch (ClientLib.Vis.VisMain.GetInstance().get_Mode()) {
                            case ClientLib.Vis.Mode.City:
                                return ClientLib.API.City.GetInstance().GetUpgradeCostsForAllBuildingsToLevel(newLevel);
                            case ClientLib.Vis.Mode.DefenseSetup:
                                return ClientLib.API.Defense.GetInstance().GetUpgradeCostsForAllUnitsToLevel(newLevel);
                            case ClientLib.Vis.Mode.ArmySetup:
                                return ClientLib.API.Army.GetInstance().GetUpgradeCostsForAllUnitsToLevel(newLevel);
                            }
                        }
                        return null;
                    },
                    calcAllLowLevel: function () {
                        for (var newLevel = 1, Tib = 0, Cry = 0, Pow = 0; Tib === 0 && Cry === 0 && Pow === 0 && newLevel < 1000; newLevel++) {
                            var costs = this.GetAllUpgradeCostsToLevel(newLevel);
                            if (costs !== null) {
                                for (var i = 0; i < costs.length; i++) {
                                    var uCosts = costs[i];
                                    var cType = parseInt(uCosts.Type, 10);
                                    switch (cType) {
                                    case ClientLib.Base.EResourceType.Tiberium:
                                        Tib += uCosts.Count;
                                        break;
                                    case ClientLib.Base.EResourceType.Crystal:
                                        Cry += uCosts.Count;
                                        break;
                                    case ClientLib.Base.EResourceType.Power:
                                        Pow += uCosts.Count;
                                        break;
                                    }
                                }
                            }
                        }
                        return (newLevel === 1000?0:(newLevel - 1));
                    },
                    resetAll: function () {
                        var allLowLevel = this.calcAllLowLevel();
                        if (allLowLevel > 0) {
                            this.txtAll.setMinimum(allLowLevel);
                            this.txtAll.setMaximum(allLowLevel + 50);
                            this.txtAll.setValue(allLowLevel);
                            this.txtAll.setEnabled(true);
                            this.btnAll.setEnabled(true);
                        } else {
                            this.txtAll.setMinimum(0);
                            this.txtAll.setMaximum(0);
                            this.txtAll.resetValue();
                            this.txtAll.setEnabled(false);
                            this.btnAll.setEnabled(false);
                        }
                        this.onInputAll();
                    },
                    onInputAll: function () {
                        var newLevel = parseInt(this.txtAll.getValue(), 10);
                        var costs = this.GetAllUpgradeCostsToLevel(newLevel);
                        if (newLevel > 0 && costs !== null) {
                            for (var i = 0, Tib = 0, Cry = 0, Pow = 0; i < costs.length; i++) {
                                var uCosts = costs[i];
                                switch (parseInt(uCosts.Type, 10)) {
                                case ClientLib.Base.EResourceType.Tiberium:
                                    Tib += uCosts.Count;
                                    break;
                                case ClientLib.Base.EResourceType.Crystal:
                                    Cry += uCosts.Count;
                                    break;
                                case ClientLib.Base.EResourceType.Power:
                                    Pow += uCosts.Count;
                                    break;
                                }
                            }
                            this.tibAll.setLabel(phe.cnc.gui.util.Numbers.formatNumbersCompact(Tib));
                            this.tibAll.setToolTipText(phe.cnc.gui.util.Numbers.formatNumbers(Tib));
                            if (Tib === 0) this.tibAll.exclude();
                            else this.tibAll.show();
                            this.cryAll.setLabel(phe.cnc.gui.util.Numbers.formatNumbersCompact(Cry));
                            this.cryAll.setToolTipText(phe.cnc.gui.util.Numbers.formatNumbers(Cry));
                            if (Cry === 0) this.cryAll.exclude();
                            else this.cryAll.show();
                            this.powAll.setLabel(phe.cnc.gui.util.Numbers.formatNumbersCompact(Pow));
                            this.powAll.setToolTipText(phe.cnc.gui.util.Numbers.formatNumbers(Pow));
                            if (Pow === 0) this.powAll.exclude();
                            else this.powAll.show();
                        } else {
                            this.tibAll.setLabel("-");
                            this.tibAll.resetToolTipText();
                            this.tibAll.show();
                            this.cryAll.setLabel("-");
                            this.cryAll.resetToolTipText();
                            this.cryAll.show();
                            this.powAll.setLabel("-");
                            this.powAll.resetToolTipText();
                            this.powAll.show();
                        }
                    },
                    onUpgradeAll: function () {
                        var newLevel = parseInt(this.txtAll.getValue(), 10);
                        if (newLevel > 0) {
                            switch (ClientLib.Vis.VisMain.GetInstance().get_Mode()) {
                            case ClientLib.Vis.Mode.City:
                                ClientLib.API.City.GetInstance().UpgradeAllBuildingsToLevel(newLevel);
                                this.resetAll()
                                break;
                            case ClientLib.Vis.Mode.DefenseSetup:
                                ClientLib.API.Defense.GetInstance().UpgradeAllUnitsToLevel(newLevel);
                                this.resetAll()
                                break;
                            case ClientLib.Vis.Mode.ArmySetup:
                                ClientLib.API.Army.GetInstance().UpgradeAllUnitsToLevel(newLevel);
                                this.resetAll()
                                break;
                            }
                        }
                    }
                }
            });
        }
        function translation() {
            var localeManager = qx.locale.Manager.getInstance();

            // Default language is english (en)
            // Available Languages are: ar,ce,cs,da,de,en,es,fi,fr,hu,id,it,nb,nl,pl,pt,ro,ru,sk,sv,ta,tr,uk
            // You can send me translations so i can include them in the Script.

            // German
            localeManager.addTranslation("de", {
                "Selected building": "Markiertes Gebäude",
                "All buildings": "Alle Gebäude",
                "Selected defense unit": "Markierte Abwehrstellung",
                "All defense units": "Alle Abwehrstellungen",
                "Selected army unit": "Markierte Armee-Einheit",
                "All army units": "Alle Armee-Einheiten"
            });
        }
        function waitForGame() {
            try {
                if (typeof qx != 'undefined' && typeof qx.core != 'undfined' && typeof qx.core.Init != 'undefined') {
                    var app = qx.core.Init.getApplication();
                    if (app.initDone == true) {
                        try {
                            console.log("WarChiefs - Tiberium Alliances Upgrade Base/Defense/Army: Loading");
                            translation();
                            createClasses();
                            Upgrade.getInstance();
                            Upgrade.Base.getInstance();
                            Upgrade.Defense.getInstance();
                            Upgrade.Army.getInstance();
                            console.log("WarChiefs - Tiberium Alliances Upgrade Base/Defense/Army: Loaded");
                        } catch (e) {
                            console.log(e);
                        }
                    } else {
                        window.setTimeout(waitForGame, 1000);
                    }
                } else {
                    window.setTimeout(waitForGame, 1000);
                }
            } catch (e) {
                console.log(e);
            }
        }
        window.setTimeout(waitForGame, 1000);
    };

    var script = document.createElement("script");
    var txt = injectFunction.toString();
    script.innerHTML = "(" + txt + ")();";
    script.type = "text/javascript";

    document.getElementsByTagName("head")[0].appendChild(script);
})();



// ==UserScript==
// @name        C&C: Tiberium Alliances Chat Helper Enhanced
// @namespace   https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @description Automates the use of chat and message BB-Codes: [coords][url][player][alliance][b][i][s][u] - Contact list for whispering - Type /chelp <enter> in chat for help.
// @include     https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version     3.1.6
// @updateURL   https://userscripts.org/scripts/source/152177.meta.js
// @downloadURL https://userscripts.org/scripts/source/152177.user.js
// @icon        https://sites.google.com/site/titlemod/home/favicon.png
// @grant       none
// ==/UserScript==

// type: /chelp in any text box and hit <enter> for a list of commands

// Please report urls that are not tagged properly

// window.chatHelper_suppressBrowserAltKeys suppresses normal browser menu keys [Alt+(a,p,b,i,u,s)] when you are in a textarea so that the menus don't open.

(function () {
	var chatHelper_main = function () {
		window.chatHelper_debug = 0; //initial debug level, top level for easy console access
		var chlog = function chlog(str,lvl){
			if (lvl > 0) { //lvl 1+
				if (window.chatHelper_debug == 1) { // lvl 1
					console.log("ChatHelper_debug: "+str+"\n");
				}
				if (window.chatHelper_debug == 2) { // lvl 2
					console.log("ChatHelper_debug: "+str+"\n");
				}
				
			} else { //lvl 0 or no arg passed to lvl
				console.log("ChatHelper_log: "+str+"\n");
			}
		};
		try {
			function createchatHelper() {
				var onkeyupDelay = 50; //ms to wait after a keyupevent before searching contacts list. Lower for faster searching. Higher for better performance.
				window.chatHelper_suppressBrowserAltKeys = true;
				window.chatHelper_version = "3.1.6";
				window.chatHelper_name = "C&C: Tiberium Alliances Chat Helper Enhanced";
				chlog(window.chatHelper_name + ' v' + window.chatHelper_version + ': loading.',0);
				var saveObj = {
					saveObjVer : "3.1.6",
					contacts : []
				}
				
				var validCharPatt = /[-\w\.]/;
				var isWhisp = false;
				var contacts = [];
				var timer;
				var _sub;

				
				function getCaretPos(obj) {
					// getCaretPos from: http://userscripts.org/scripts/show/151099
					obj.focus();
					
					if (obj.selectionStart) {
						return obj.selectionStart; //Gecko
					} else if (document.selection) //IE
					{
						var sel = document.selection.createRange();
						var clone = sel.duplicate();
						sel.collapse(true);
						clone.moveToElementText(obj);
						clone.setEndPoint('EndToEnd', sel);
						return clone.text.length;
					}
					
					return 0;
				}
				
				function moveCaret(inputObject, pos) {
					// moveCaretPos from: http://userscripts.org/scripts/show/151099
					if (inputObject.selectionStart) {
						inputObject.setSelectionRange(pos, pos);
						inputObject.focus();
					}
				}
				
				function getCursorWordPos(inputField) {
					var pos = getCaretPos(inputField);
					var inText = inputField.value;
					var lc = inText.charAt(pos - 1);
					if (lc.match(validCharPatt) != null) {
						var sPos = pos;
						var ePos = pos;
						var t = inputField.value;
						while (sPos >= 0 && t.charAt(sPos - 1).match(validCharPatt) != null) {
							sPos--;
						}
						while (ePos <= t.length && t.charAt(ePos).match(validCharPatt) != null) {
							ePos++;
						}
						//inputField.setSelectionRange(sPos,ePos);
						return [sPos, ePos];
					}
				}
				
				function tagWith(tag, inputField) {
					var eTag = tag.replace('[', '[/'); //closing tag
					var tagLen = tag.length;
					var eTagLen = eTag.length;
					if (inputField != null) {
						var pos = getCaretPos(inputField);
						var inText = inputField.value;
						//save scroll position
						if (inputField.type === 'textarea')
							var st = inputField.scrollTop;
						//if there is selected text
						if (inputField.selectionStart !== inputField.selectionEnd) {
							var a = inText.slice(0, inputField.selectionStart);
							var b = inText.slice(inputField.selectionStart, inputField.selectionEnd);
							var c = inText.slice(inputField.selectionEnd, inText.length);
							inputField.value = a + tag + b + eTag + c;
							moveCaret(inputField, pos + tagLen + eTagLen + b.length);
							//if ((input IS empty) OR (the last char was a space)) AND next char ISNOT a left sqbracket
						} else if ((inText === "" || inText.charAt(pos - 1) === " ") && (inText.charAt(pos) !== '[')) {
							inputField.value = inText.substr(0, pos) + tag + eTag + inText.substr(pos, inText.length);
							moveCaret(inputField, pos + tagLen);
							//if last character is a valid playername character
						} else if (inText.charAt(pos - 1).match(validCharPatt) != null) {
							var arr = getCursorWordPos(inputField); //
							var s = arr[0];
							var e = arr[1];
							inputField.value = inText.slice(0, s) + tag + inText.slice(s, e) + eTag + inText.slice(e, inText.length);
							moveCaret(inputField, e + tagLen + eTagLen);
						}
						//restore scroll position
						if (inputField.type === 'textarea')
							inputField.scrollTop = st;
					}
				}
				
				function showHelp() {
					alert("Type /chelp in any text box to show this message.\n\nEnter key in chat:\tsearches your chat string for Urls and Coords and wraps them before submission.\n\nAlt + 1\t:\tsearches for Urls and Coords in a message or forum post and tags accordingly. Cursor is moved to the beginning.\nAlt + 2\t:\tManual URL insertion popup window\nAlt + 0\t:\tclears all tags\n\nWord wraps: tags a selected word -or- tags the word where the cursor is (if chat is empty or you hit <space> empty tags are inserted).\nAttempts to preserve cursor and scroll position.\n|\tAlt + p or Alt + 3\t:\tplayer tags\n|\tAlt + a or Alt + 4\t:\talliance tags\n|\tAlt + b\t\t\t:\tbold tags\n|\tAlt + i\t\t\t:\titalic tags\n|\tAlt + u\t\t\t:\tunderline tags\n|__\tAlt + s\t\t\t:\tstrikethrough tags\n\nContact list commands:\n/list -or- /contacts\n/add\n/del\n/del all - wipes your whole contact list");
				}
				
				function saveData() {
					saveObj.contacts = contacts;
					var jString = JSON.stringify(saveObj);
					chlog("saveJSON: "+jString, 1);
					localStorage.setItem('chatHelper', jString);
				}

				function loadData() {
					try{
						if (localStorage.getItem('myContacts')) { //should be removed eventually
							var dat = localStorage.getItem('myContacts');
							dat = dat.split(',');
							saveObj.contacts = dat;
							
							//unset old storage 
							localStorage.removeItem('myContacts');
						} else if (localStorage.getItem('chatHelper')) {
							var saveObjTmp = JSON.parse(localStorage.getItem('chatHelper'));
							if (saveObjTmp.saveObjVer != window.chatHelper_version){
								//version changed
								var va = saveObjTmp.saveObjVer.split('.');
								var vb = window.chatHelper_version.split('.');
								
								if (va[0] != vb[0]){ //major version change
									chlog("ChatHelper: Major version change from v"+va[0]+"."+va[1]+"."+va[2]+" to v"+vb[0]+"."+vb[1]+"."+vb[2]);
								} else {
									if (va[1] != vb[1]){ //minor version change
										chlog("ChatHelper: Minor version change from v"+va[0]+"."+va[1]+"."+va[2]+" to v"+vb[0]+"."+vb[1]+"."+vb[2]);
									} else {
										if (va[2] != vb[2]){ //patch release
											chlog("ChatHelper: Version Patched from v"+va[0]+"."+va[1]+"."+va[2]+" to v"+vb[0]+"."+vb[1]+"."+vb[2]);
										}
									}
								}
							} else {
								//no version change
								localStorage.getItem('chatHelper');
							}
							saveObj = saveObjTmp;
						}
						contacts = saveObj.contacts;
						saveData();
					}catch(err){
						chlog(err);
					}
				}
				
				if (!localStorage.myContacts) {
					chlog("Deprecated contacts variable does not exist.",1);
					loadData();
				} else {
					//contacts = loadData();
					loadData();
					chlog("Contacts: " + contacts, 1);
				}
				
				function saveContact(fr) {
					chlog("Number of contacts == "+contacts.length,1);
					contacts.push(fr);
					chlog(fr + " added to contacts list.",1);
					saveData();
				}
				
				function caseInsensitiveSort(a, b) {
					a = a.toLowerCase();
					b = b.toLowerCase();
					if (a > b)
						return 1;
					if (a < b)
						return -1;
					return 0;
				}
				
				function listContacts() {
					var len = contacts.length;
					var a = contacts.sort(caseInsensitiveSort);
					if (len == 1) {
						alert(len + " Contact:\n\n" + a.join("\n") + "\n");
					} else if (len > 1) {
						alert(len + " Contacts:\n\n" + a.join("\n") + "\n");
					} else {
						var p = prompt("Your contacts list is empty.\n\nType a name here to add a contact:\n", "");
						if (p) {
							saveContact(p);
						}
					}
				}
				
				function deleteContact(fr) {
					if (fr === "all") {
						contacts = [];
						chlog("All contacts deleted",1);
						saveData();
					} else {
						var ind = contacts.indexOf(fr);
						if (ind > -1) {
							saveObj.contacts = contacts.splice(ind, 1);
							saveData();
							chlog(contacts,1);
							chlog(fr + " deleted from contacts list.");
						}
					}
				}
				function keyUpTimer(kEv) {
					kEv = kEv || window.event;
					if (kEv.target.type === "text" && kEv.target.value != '') {
						var inputField = kEv.target;
						var inText = inputField.value;
						var len = inText.length;
						var sub;
						var kc = kEv.keyCode;
						if (len >= 10 && inText.match(/^(\/whisper)/) != null) {
							isWhisp = true;
						}
						if (isWhisp && len >= 10 && !kEv.altGraphKey && !kEv.ctrlKey && !kEv.altKey && kc > 47 && kc < 91) {
							chlog("keyUpTimer keyCode =="+kEv.keyCode,1);
							sub = inText.substr(9);
							if (!sub.match(/\s/)) {
								for (var i = 0; i < contacts.length; i++) {
									var slen = sub.length;
									if (contacts[i][slen - 1] === sub[slen - 1] && contacts[i].substr(0, slen) == sub) {
										inputField.value = "/whisper " + contacts[i] + " ";
										inputField.setSelectionRange(10 + slen - 1, 10 + contacts[i].length, "forward");
									}
								}
							} else {
								isWhisp = false;
							}
						} else {
							isWhisp = false;
						}
					}
				}
				
				document.onkeyup = function (kEv) {
					clearTimeout(timer);
					timer = setTimeout(function () {
							keyUpTimer(kEv);
						}, onkeyupDelay);
				}
				
				function delayedConfirm() {
					if (confirm("Add " + _sub + " to your contacts list?\n\nYou can see a list of your contacts by typing /list")) {
						saveContact(_sub);
					}
				}
				
				function autoTag(inputField, inText) {
					var isUrl = false;
					var lookBack;
					//the code here is mostly from Bruce Doan: http://userscripts.org/scripts/show/151965
					////auto url
					inText = inText.replace(/(\[url\])*(https?:\/\/)([\da-z\.-]+)(\.[a-z]{2,6})([\/\w\.\-\=\?\&\%\+\|#:;,~\*\(\)\$]*)*\/?(\[\/url\])*/gi, function () {
							var result = new Array();
							var protocol = arguments[2].match(/https?:\/\//);
							for (var i in arguments){
								chlog("autoTag url reg arg "+i + "= " + arguments[i],1);
							}
							result.push('[url]');
							result.push(arguments[2]); // http[s]://
							result.push(arguments[3]); // domain
							result.push(arguments[4]); // ext
							result.push(arguments[5]); // query string
							result.push('[/url]');
							if (protocol === null){
								chlog("autotag url - no protocol",2);
							} else {
								isUrl = true;
								chlog("bypassing coords tagging\n detected protocol = " + protocol,2);
								
							}
							return result.join('');
						});
					////auto coords
					if (!isUrl) {
						chlog("checking for coords",1);
						lookBack = inText.replace(/(\[coords\])?([#])?([0-9]{3,4})[:.]([0-9]{3,4})([:.]\w+)?(\[\/coords\])?/gi, function () {
								for (var i in arguments){
									chlog("autoTag coords reg arg " + i + " = " + arguments[i],1);
								}
								var hashBefore = arguments[2];
								chlog("hashBefore "+hashBefore,1);
								if (!hashBefore) {
									chlog("no hash returning");
									var result = new Array();
									result.push('[coords]');
									result.push(arguments[3]);
									result.push(':');
									result.push(arguments[4]);
									if (arguments[5] != undefined) {
										result.push(arguments[5].replace('.', ':'));
									}
									result.push('[/coords]');
									return result.join('');
								} else {
									return arguments[0];
								}
							});
						inText = lookBack;
						chlog("lookedback",1);
						chlog("LB string: "+lookBack,1);
					}
					// shorthand for player
					inText = inText.replace(/\[p\]([a-z0-9_\-\s]+)\[\/p\]/gi, '[player]$1[/player]');
					// shorthand for alliance
					inText = inText.replace(/\[a\]([a-z0-9_\-\s]+)\[\/a\]/gi, '[alliance]$1[/alliance]');
					
					return inText;
				}
				
				document.onkeydown = function (kEv) {
					kEv = kEv || window.event;
					
					/* Tab key
					if (kEv.keyCode == 9){
						chlog("Tab key pressed",1)
						var input = qx.core.Init.getApplication().getChat().getChatWidget().getEditable(); // Input
						kEv.preventDefault();
						kEv.stopPropagation();
					}
					 */
					if (!kEv.shiftKey && kEv.keyCode === 13 && (kEv.target.type === "text" || kEv.target.type === "textarea")) {
						var inputField = kEv.target;
						var inText = inputField.value;
						var add = inText.match(/^(\/add)/);
						var del = inText.match(/^(\/del)/);
						var showContacts = inText.match(/^((\/contacts)|(\/list))/);
						var sub;
						var cf;
						if (inText.match(/^(\/whisper)/) != null || add != null) {
							if (add != null) {
								sub = inText.substr(5);
							} else {
								sub = inText.substr(9);
							}
							if (sub.match(/^(\w*)\s/)) {
								//if space after player name (is a whisper or a typo)
								var arr = sub.match(/^(\w*)/);
								sub = arr[0].replace(/\s$/, "");
								if (contacts.indexOf(sub) == -1) {
									//not in contacts list
									_sub = sub;
									setTimeout(delayedConfirm, 500);
								}
							} else if (contacts.indexOf(sub) == -1) {
								//no message to send, not in contacts, promt to add, clear input
								chlog("clearing input field",1);
								inputField.focus(); //?necessary?
								inputField.value = "";
								var cf = confirm("Add " + sub + " to your contacts list?\n\nYou can see a list of your contacts by typing /list");
								if (cf) {
									saveContact(sub);
									return false;
								} else {
									return false;
								}
							} else if (sub && contacts.indexOf(sub) > -1) {
								//not a whisper, reject duplicate contact
								alert(sub + " is already in your contacts list.");
							}
						}
						//remove contact(s)
						if (del) {
							sub = inText.substr(5);
							chlog("clearing input field",1);
							inputField.value = "";
							if ((contacts.indexOf(sub) > -1 || sub == "all") && confirm("Really delete " + sub + " from your contacts?")) {
								deleteContact(sub);
							} else {
								alert(sub + " is not in your contacts list.");
							}
							return false;
						}
						// show contacts list
						if (showContacts) {
							chlog("clearing input field",1);
							inputField.value = "";
							listContacts();
							return false;
							
						}
						// /chelp dialog
						if (inText.length === 6 && inText.match(/^(\/chelp)/) != null) {
							chlog("clearing input field",1);
							inputField.value = "";
							showHelp();
							return false;
						}
						
						if (inputField != null && inputField.type === "text" && inText !== "") {
							chlog("onEnter auto-tagging",1);
							
							inText = autoTag(inputField, inText); //auto-tag
							
							if (inText !== inputField.value) {
								inputField.value = inText;
							}
						}
					}
					
					if (kEv.altKey && !kEv.shiftKey && !kEv.altGraphKey && !kEv.ctrlKey && kEv.target != null && (kEv.target.type === "textarea" || kEv.target.type === "text")) {
						var inputField = kEv.target;
						var inText = inputField.value;
						// Alt key, not Ctrl or AltGr
						if (kEv.altKey && !kEv.altGraphKey && !kEv.ctrlKey) {
							var cc = kEv.charCode;
							var kc = kEv.keyCode;
							chlog("charCode == "+cc,1);
							chlog("keyCode == "+kc,1);

							/* Alt+1 for auto Coordinates/Urls in message body */
							if (inputField.type === "textarea" && (cc === 49 || kc === 49)) {
								var pos = getCaretPos(inputField);
								chlog("attempting Alt+1 message auto-tag",1);
								if (inputField != null) {
									var st = inputField.scrollTop;
									
									inText = autoTag(inputField, inText); //auto-tag
									
									if (inText !== "" || inText !== inputField.value) {
										inputField.value = inText;
										inputField.scrollTop = st;
										moveCaret(inputField, 0);
									}
								}
							}
							/* Alt+2 for URLs fallback */
							if (cc === 50 || kc === 50) {
								if (inputField != null) {
									var url = prompt("Website (Syntax: google.com or www.google.com)", "");
									if (url != null) {
										inputField.value += '[url]' + url + '[/url]';
									}
								}
							}
							/* Alt+3 or Alt+p for players */
							if ((cc === 112 || kc === 80) || (cc === 51 || kc === 51)) {
								tagWith('[player]', inputField);
								if (window.chatHelper_suppressBrowserAltKeys)
									return false;
							}
							/* Alt+4 or Alt+a for alliances */
							if ((cc === 97 || kc === 65) || (cc === 52 || kc === 52)) {
								tagWith('[alliance]', inputField);
								if (window.chatHelper_suppressBrowserAltKeys)
									return false;
							}
							/* Alt+0 to clear tags */
							if (cc === 48 || kc === 48) {
								if (inputField.type === 'textarea')
									var st = inputField.scrollTop;
								if (inputField != null) {
									inText = inText.replace(/\[\/?coords\]/gi, '');
									inText = inText.replace(/\[\/?url\]/gi, '');
									inText = inText.replace(/\[\/?player\]/gi, '');
									inText = inText.replace(/\[\/?alliance\]/gi, '');
									inText = inText.replace(/\[\/?b\]/gi, '');
									inText = inText.replace(/\[\/?i\]/gi, '');
									inText = inText.replace(/\[\/?u\]/gi, '');
									inText = inText.replace(/\[\/?s\]/gi, '');
									inputField.value = inText;
								}
								if (inputField.type === 'textarea')
									inputField.scrollTop = st;
							}
							/* Alt+b for bold */
							if (cc === 98 || kc === 66) {
								tagWith('[b]', inputField);
								if (window.chatHelper_suppressBrowserAltKeys)
									return false;
							}
							/* Alt+i for italics */
							if (cc === 105 || kc === 73) {
								tagWith('[i]', inputField);
								if (window.chatHelper_suppressBrowserAltKeys)
									return false;
							}
							/* Alt+u for underline */
							if (cc === 117 || kc === 85) {
								tagWith('[u]', inputField);
								if (window.chatHelper_suppressBrowserAltKeys)
									return false;
							}
							/* Alt+s for strikethrough */
							if (cc === 115 || kc === 83) {
								tagWith('[s]', inputField);
								if (window.chatHelper_suppressBrowserAltKeys)
									return false;
							}
						}
					}
				}
			}
		} catch (err) {
			chlog("createchatHelper: "+ err,1);
			console.error(err);
		}
		
		function chatHelper_checkIfLoaded() {
			try {
				if (typeof qx !== 'undefined') {
					createchatHelper();
				} else {
					window.setTimeout(chatHelper_checkIfLoaded, 1333);
				}
			} catch (err) {
				console.log("chatHelper_checkIfLoaded: ", err);
			}
		}
		window.setTimeout(chatHelper_checkIfLoaded, 1333);
	};
	try {
		var chatHelper = document.createElement("script");
		chatHelper.innerHTML = "(" + chatHelper_main.toString() + ")();";
		chatHelper.type = "text/javascript";
		document.getElementsByTagName("head")[0].appendChild(chatHelper);
	} catch (err) {
		console.log("chatHelper: init error: ", err);
	}
})();



// ==UserScript==
// @name           CnC: Tiberium Alliances COORDS 500:500
// @author         MrHIDE known as PEEU
// @description    Get and place coordinates into a message with three useful keyboard shortcuts
// @description    Alt+Q - popup window, Alt+S - insert [coords][/coords], 
// @description    Alt+Y - magically insert [coords]x:y[/coords]. Earlier you must move  
// @description    your mouse cursor OVER the map "Coordinates"
// @include        http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version        1.2
// ==/UserScript==


function Ini() {
	m = "CnC: Tiberium Alliances COORDS has been loaded";
	if (typeof console != 'undefined') console.log(m);
	else if (window.opera) opera.postError(m);
	else GM_log(m);
};

(function () {
	var TACoordsMain = function () {
			var IsDEBUG = false;
			function log(m) {
				if (IsDEBUG) {
					if (typeof console != 'undefined') console.log(m);
					else if (window.opera) opera.postError(m);
					else GM_log(m);
				}
			};
			log("IsDEBUG = true");
			function createInstance() {
				var MrHIDE = {};
				qx.Class.define("MrHIDE.main", {
					type: "singleton",
					extend: qx.core.Object,
					members: {
						Coords: "First, just move mouse cursor over some map coordinates numbers ex. 0:0",
						initialize: function () {
							window.addEventListener("keyup", this.onKey, false);
							window.addEventListener("mouseover", this.onMouseOver, false);
						},
						GetCaretPosition: function (ctrl) {
							var CaretPos = 0; // IE Support
							if (document.selection) {
								ctrl.focus();
								var Sel = document.selection.createRange();
								Sel.moveStart('character', -ctrl.value.length);
								CaretPos = Sel.text.length;
							}
							// Firefox support
							else if (ctrl.selectionStart || ctrl.selectionStart == '0') CaretPos = ctrl.selectionStart;
							return (CaretPos);
						},
						SetCaretPosition: function (ctrl, pos) {
							if (ctrl.setSelectionRange) {
								ctrl.focus();
								ctrl.setSelectionRange(pos, pos);
							} else if (ctrl.createTextRange) {
								var range = ctrl.createTextRange();
								range.collapse(true);
								range.moveEnd('character', pos);
								range.moveStart('character', pos);
								range.select();
							}
						},
						onKey: function (ev) {
							var s = String.fromCharCode(ev.keyCode);
							var MRH = window.MrHIDE.main.getInstance();

							// ALT+
							if (ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.shiftKey) {
								// log("Alt+" + s);

								switch (s) {
								case "Q":
									// coords by popup window
									var inputField = document.querySelector('input:focus, textarea:focus');
									if (inputField != null) {
										this.Coords = prompt("Place coordinates. Ex. 800:800", "");
										if (Coords != null) {
											var position = MRH.GetCaretPosition(inputField);
											var txt = inputField.value;
											var insert = "[coords]" + this.Coords + "[/coords]";
											inputField.value = txt.substring(0, position) + insert + txt.substring(position, txt.length);
											MRH.SetCaretPosition(inputField, position + insert.length);
										}
									}
									break;
								case "Y":
									// coords by moving mouse OVER map coordinates
									var inputField = document.querySelector('input:focus, textarea:focus');
									if (inputField != null) {
										if (this.Coords != null) {
											var position = MRH.GetCaretPosition(inputField);
											var txt = inputField.value;
											var insert = "[coords]" + this.Coords + "[/coords]";
											inputField.value = txt.substring(0, position) + insert + txt.substring(position, txt.length);
											MRH.SetCaretPosition(inputField, position + insert.length);
										}
									}
									break;
								case "V":
									// coords by inserting [coords][/coords]
									var inputField = document.querySelector('input:focus, textarea:focus');
									if (inputField != null) {
										var position = MRH.GetCaretPosition(inputField);
										var txt = inputField.value;
										var insert = "[coords][/coords]";
										inputField.value = txt.substring(0, position) + insert + txt.substring(position, txt.length);
										MRH.SetCaretPosition(inputField, position + ("[coords]").length);
									}
									break;
								default:
									// Other letters
									log("Other letter (" + s + ")");
								}
							}
						},
						onMouseOver: function (ev) {					
							var tag = ev.target.tagName;
							if (tag == "B" || tag == "DIV" || tag == "A") {
								var s = ev.target.textContent;
								var semicolon = s.indexOf(":");
								if (semicolon > 0) {
									var n1 = s.substring(0, semicolon);
									var n2 = s.substring(semicolon + 1, s.lenght);
									if (isFinite(n1) && isFinite(n2)) {
                                                                                if(s.length==5 && s[0]=="0") return;
										Coords = s;
										ClientLib.Vis.VisMain.GetInstance().PlayUISound('sounds/CollectTiberium');
									}
								}
							}
						},
					} // members
				});
			}

			// Loading
			function TACoords_checkIfLoaded() {
				try {
					if (typeof qx != 'undefined') {
						ap = qx.core.Init.getApplication();
						mb = qx.core.Init.getApplication().getMenuBar();
						if (ap && mb) {
							createInstance();
							window.MrHIDE.main.getInstance().initialize();
						} else window.setTimeout(TACoords_checkIfLoaded, 1000);
					} else {
						window.setTimeout(TACoords_checkIfLoaded, 1000);
					}
				} catch (e) {
					if (typeof console != 'undefined') console.log(e);
					else if (window.opera) opera.postError(e);
					else GM_log(e);
				}
			}
			if (/commandandconquer\.com/i.test(document.domain)) {
				window.setTimeout(TACoords_checkIfLoaded, 1000);
			}
		}
		// Injecting
	if (window.location.pathname != ("/login/auth")) {
		var TACScript = document.createElement("script");
		TACScript.innerHTML = "(" + TACoordsMain.toString() + ")();";
		TACScript.type = "text/javascript";
		if (/commandandconquer\.com/i.test(document.domain)) {
			document.getElementsByTagName("head")[0].appendChild(TACScript);
		}
	}
})();

Ini();




// ==UserScript==
// @name Tiberium Alliances - New Resource Trade Window
// @description Implements a new TradeOverlay class, allowing you to select individual, multiple or all bases to transfer resources from
// @namespace NewTradeOverlay
// @include https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version 1.4.7
// @author Chiantii
// @updateURL https://userscripts.org/scripts/source/168297.meta.js
// @downloadURL https://userscripts.org/scripts/source/168297.user.js
// ==/UserScript==
(function () {
	var NewTradeOverlay_main = function () {
		console.log('NewTradeOverlay loaded');
		function CreateNewTradeOverlay() {
			qx.Class.undefine("webfrontend.gui.trade.TradeOverlay");
			qx.Class.define("webfrontend.gui.trade.TradeOverlay", {
				type : "singleton",
				extend : webfrontend.gui.OverlayWindow,
				construct : function () {
					webfrontend.gui.OverlayWindow.call(this);
					this.set({
						autoHide : false
					});
					this.clientArea.setLayout(new qx.ui.layout.HBox());
					this.clientArea.setMargin(0);
					this.clientArea.setWidth(464);
					this.setTitle(qx.locale.Manager.tr("tnf:trade window title"));
					this.clientArea.add(new qx.ui.core.Spacer(), {
						flex : 1
					});
					this.clientArea.add(this.tradeWindow());
					this.clientArea.add(new qx.ui.core.Spacer(), {
						flex : 1
					});
					this.tradeConfirmationWidget = new webfrontend.gui.widgets.confirmationWidgets.TradeConfirmationWidget();
				},
				members : {
					activated : false,
					transferWindowTableSelectedRows : null,
					modifier : null,
					tradeWindowTable : null,
					tableColumnModel : null,
					resourceTransferType : null,
					transferAmountTextField : null,
					largeTiberiumImage : null,
					costToTradeLabel : null,
					transferFromBaseLabel : null,
					totalResourceAmount : null,
					selectedRowData : null,
					selectedRow : null,
					tradeButton : null,
					tenPercentButton : null,
					twentyFivePercentButton : null,
					fiftyPercentButton : null,
					seventyFivePercentButton : null,
					oneHundredPercentButton : null,
					resourceSelectionRadioButtons : null,
					selectAllNoneButton : null,
					userDefinedMinimumAmount : -1,
					userDefinedMaxDistance : -1,
					tradeConfirmationWidget : null,
					activate : function () {
						if (!this.activated) {
							ClientLib.Vis.VisMain.GetInstance().PlayUISound("audio/ui/OpenWindow");
							phe.cnc.base.Timer.getInstance().addListener("uiTick", this._onTick, this);
							this.selectedRowData = null;
							this.selectedRow = null;
							this.transferWindowTableSelectedRows = [];
							this.transferAmountTextField.setValue("");
							this.costToTradeLabel.setValue("0");
							this.userDefinedMinimumAmount = -1;
							this.userDefinedMaxDistance = -1;
							this.resourceTransferType = ClientLib.Base.EResourceType.Tiberium;
							this.tradeWindowTable.resetCellFocus();
							this.tradeWindowTable.resetSelection();
							this.transferFromBaseLabel.setValue(qx.locale.Manager.tr("tnf:select base for transfer"));
							this.resourceSelectionRadioButtons.resetSelection();
							this.largeTiberiumImage.setSource("webfrontend/ui/common/icon_res_large_tiberium.png");
							this.TableRowFilter();
							this.tableColumnModel.sortByColumn(2, true);
							qx.locale.Manager.getInstance().addTranslation("en_US", {
								"tnf:select all" : "Select All"
							});
							qx.locale.Manager.getInstance().addTranslation("en_US", {
								"tnf:select none" : "Select None"
							});
							qx.locale.Manager.getInstance().addTranslation("en_US", {
								"tnf:cannot manually modify" : "Cannot be modified with multiple rows selected"
							});
							qx.locale.Manager.getInstance().addTranslation("en_US", {
								"tnf:trading with multiple bases" : "Trading with multiple bases"
							});
							qx.locale.Manager.getInstance().addTranslation("en_US", {
								"tnf:percent buttons" : "Please use one of the Percent buttons"
							});
							this.activated = true;
						}
					},
					deactivate : function () {
						if (this.activated) {
							phe.cnc.base.Timer.getInstance().removeListener("uiTick", this._onTick, this);
							this.tradeWindowTable.resetSelection();
							this.tradeWindowTable.resetCellFocus();
							this.transferAmountTextField.setValue("");
							this.transferWindowTableSelectedRows = [];
							this.costToTradeLabel.setValue("");
							this.selectedRow = null;
							this.selectedRowData = null;
							this.modifier = 1;
							this.activated = false;
						}
					},
					getFilterMinimimAmount : function () {
						return this.userDefinedMinimumAmount;
					},
					getFilterDistanceLimit : function () {
						return this.userDefinedMaxDistance;
					},
					tradeWindow : function () {
						var tradeWindowContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(2)).set({
							marginTop : 10,
							marginBottom : 10,
							marginLeft : 4
						});

						tradeWindowContainer.add(new qx.ui.core.Spacer(), {
							flex : 1
						});

						var selectResourcesLabel = new qx.ui.basic.Label(qx.locale.Manager.tr("tnf:select resources:")).set({
							textColor : "text-label",
							alignY : "middle",
							font : "font_size_13"
						});
						var resourceSelectionContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox(5)).set({
							height : 26
						});
						var tiberiumToggleButton = new qx.ui.form.ToggleButton(null, "webfrontend/ui/common/icon_res_large_tiberium.png").set({
							appearance : "button-toggle",
							width : 84
						});
						tiberiumToggleButton.setUserData("key", ClientLib.Base.EResourceType.Tiberium);
						var tiberiumImage = new qx.ui.basic.Image("webfrontend/ui/common/icn_res_tiberium.png").set({
							width : 24,
							height : 24,
							scale : true
						});
						var crystalToggleButton = new qx.ui.form.ToggleButton(null, "webfrontend/ui/common/icon_res_large_crystal.png").set({
							appearance : "button-toggle",
							width : 84
						});
						crystalToggleButton.setUserData("key", ClientLib.Base.EResourceType.Crystal);
						var crystalImage = new qx.ui.basic.Image("webfrontend/ui/common/icn_res_chrystal.png").set({
							width : 24,
							height : 24,
							scale : true
						});
						resourceSelectionContainer.add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						resourceSelectionContainer.add(selectResourcesLabel);
						resourceSelectionContainer.add(tiberiumToggleButton);
						resourceSelectionContainer.add(new qx.ui.core.Spacer().set({
							width : 2
						}));
						resourceSelectionContainer.add(crystalToggleButton);
						resourceSelectionContainer.add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						this.resourceSelectionRadioButtons = new qx.ui.form.RadioGroup(tiberiumToggleButton, crystalToggleButton);
						this.resourceSelectionRadioButtons.addListener("changeSelection", this.ChangeResourceType, this);

						tradeWindowContainer.add(resourceSelectionContainer);

						var currentServer = ClientLib.Data.MainData.GetInstance().get_Server();
						var tradeCostToolTip = qx.locale.Manager.tr("tnf:trade costs %1 (+%2 per field)", currentServer.get_TradeCostMinimum(), currentServer.get_TradeCostPerField());
						var searchContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
						var searchBox = new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
						var minimumAmountLabel = new qx.ui.basic.Label(qx.locale.Manager.tr("tnf:minimum amount:")).set({
							textColor : "text-label",
							alignY : "middle",
							font : "font_size_13"
						});
						this.minimumAmountTextField = new qx.ui.form.TextField("").set({
							toolTipText : qx.locale.Manager.tr("tnf:only numbers allowed")
						});
						this.minimumAmountTextField.setFilter(/[0-9]/);
						this.minimumAmountTextField.setMaxLength(12);
						var maxDistanceLabel = new qx.ui.basic.Label(qx.locale.Manager.tr("tnf:distance limit:")).set({
							textColor : "text-label",
							alignY : "middle",
							font : "font_size_13",
							toolTipText : tradeCostToolTip
						});
						this.maxDistanceTextField = new qx.ui.form.TextField("").set({
							toolTipText : qx.locale.Manager.tr("tnf:only numbers allowed")
						});
						this.maxDistanceTextField.setFilter(/[0-9]/);
						this.maxDistanceTextField.setMaxLength(3);
						searchBox.add(minimumAmountLabel);
						searchBox.add(this.minimumAmountTextField);
						searchBox.add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						searchBox.add(maxDistanceLabel);
						searchBox.add(this.maxDistanceTextField);
						searchBox.add(new qx.ui.core.Spacer(), {
							flex : 2
						});

						searchContainer.add(searchBox);

						var searchButton = new webfrontend.ui.SoundButton(qx.locale.Manager.tr("tnf:search")).set({
							width : 300,
							maxWidth : 300,
							marginBottom : 8,
							marginTop : 4,
							alignX : "center"
						});
						searchButton.addListener("execute", this.TableRowFilter, this);
						searchContainer.add(searchButton);

						//tradeWindowContainer.add(searchContainer);

						this.selectAllNoneButton = new webfrontend.ui.SoundButton(qx.locale.Manager.tr("tnf:select all")).set({
							enabled : true,
							//appearance: "button-forum-light",
							//textColor: "text-label",
							width : 160
						});

						this.selectAllNoneButton.addListener("click", this.SelectAllRows, this);

						tradeWindowContainer.add(this.selectAllNoneButton);

						this.tableColumnModel = new webfrontend.data.SimpleColFormattingDataModel();
						this.tableColumnModel.setColumns([qx.locale.Manager.tr("tnf:base"), qx.locale.Manager.tr("tnf:distance"), qx.locale.Manager.tr("tnf:$ / 1000"), qx.locale.Manager.tr("tnf:amount"), "Amount", "Max", "ID"], ["Base", "Distance", "Credits", "AmountDesc", "Amount", "Max", "ID"]);
						this.tableColumnModel.setColumnSortable(0, true);
						this.tableColumnModel.setColumnSortable(1, true);
						this.tableColumnModel.setColumnSortable(2, true);
						this.tableColumnModel.setColumnSortable(3, true);
						this.tableColumnModel.setSortMethods(3, this.AmountSort);
						this.tradeWindowTable = new webfrontend.gui.trade.TradeBaseTable(this.tableColumnModel).set({
							statusBarVisible : false,
							columnVisibilityButtonVisible : false,
							maxHeight : 300
						});
						this.tradeWindowTable.addListener("cellClick", this.TradeWindowTableCellClick, this);
						this.tradeWindowTable.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
						this.tradeWindowTable.setDataRowRenderer(new webfrontend.gui.trade.TradeBaseTableRowRenderer(this.tradeWindowTable));
						this.tradeWindowTable.showCellToolTip = true;
						var tradeWindowTableColumnModel = this.tradeWindowTable.getTableColumnModel();
						tradeWindowTableColumnModel.setDataCellRenderer(0, new qx.ui.table.cellrenderer.String());
						tradeWindowTableColumnModel.setDataCellRenderer(1, new qx.ui.table.cellrenderer.Number());
						tradeWindowTableColumnModel.setDataCellRenderer(2, new qx.ui.table.cellrenderer.Number());
						tradeWindowTableColumnModel.setHeaderCellRenderer(2, new qx.ui.table.headerrenderer.Default());
						tradeWindowTableColumnModel.getHeaderCellRenderer(2).setToolTip(tradeCostToolTip);
						tradeWindowTableColumnModel.setDataCellRenderer(3, new webfrontend.gui.trade.TradeBaseTableCellRenderer());
						tradeWindowTableColumnModel.setColumnWidth(0, 160);
						tradeWindowTableColumnModel.setColumnWidth(1, 60);
						tradeWindowTableColumnModel.setColumnWidth(2, 100);
						tradeWindowTableColumnModel.setColumnVisible(4, false);
						tradeWindowTableColumnModel.setColumnVisible(5, false);
						tradeWindowTableColumnModel.setColumnVisible(6, false);
						tradeWindowContainer.add(this.tradeWindowTable);

						var transferAmountContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());
						var transferAmountBox = new qx.ui.container.Composite(new qx.ui.layout.HBox(2)).set({
							minHeight : 36
						});
						this.largeTiberiumImage = new qx.ui.basic.Image("webfrontend/ui/common/icon_res_large_tiberium.png").set({
							alignY : "middle",
							width : 22,
							height : 20,
							scale : true
						});
						this.transferFromBaseLabel = new qx.ui.basic.Label(qx.locale.Manager.tr("tnf:select base for transfer")).set({
							rich : true,
							textColor : "text-label",
							marginBottom : 2,
							alignY : "middle",
							maxWidth : 182
						});
						this.transferAmountTextField = new qx.ui.form.TextField("").set({
							toolTipText : qx.locale.Manager.tr("tnf:only numbers allowed"),
							enabled : false,
							width : 208,
							marginRight : 1
						});
						this.transferAmountTextField.setFilter(/[0-9]/);
						this.transferAmountTextField.setMaxLength(20);
						this.transferAmountTextField.addListener("input", this.ResourceAmountChanged, this);
						transferAmountBox.add(this.largeTiberiumImage);
						transferAmountBox.add(this.transferFromBaseLabel);
						var percentButtonsBox = new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({
							marginTop : 2
						});
						this.tenPercentButton = new webfrontend.ui.SoundButton("10%").set({
							enabled : false,
							appearance : "button-forum-light",
							textColor : "text-label",
							width : 42
						});
						this.tenPercentButton.addListener("execute", this.TenPercent, this);
						this.twentyFivePercentButton = new webfrontend.ui.SoundButton("25%").set({
							enabled : false,
							appearance : "button-forum-light",
							textColor : "text-label",
							width : 42
						});
						this.twentyFivePercentButton.addListener("execute", this.TwentyFivePercent, this);
						this.fiftyPercentButton = new webfrontend.ui.SoundButton("50%").set({
							enabled : false,
							appearance : "button-forum-light",
							textColor : "text-label",
							width : 42
						});
						this.fiftyPercentButton.addListener("execute", this.FiftyPercent, this);
						this.seventyFivePercentButton = new webfrontend.ui.SoundButton("75%").set({
							enabled : false,
							appearance : "button-forum-light",
							textColor : "text-label",
							width : 42
						});
						this.seventyFivePercentButton.addListener("execute", this.SeventyFivePercent, this);
						this.oneHundredPercentButton = new webfrontend.ui.SoundButton("100%").set({
							enabled : false,
							appearance : "button-forum-light",
							textColor : "text-label",
							width : 42
						});
						this.oneHundredPercentButton.addListener("execute", this.OneHundredPercent, this);
						percentButtonsBox.add(this.tenPercentButton);
						percentButtonsBox.add(this.twentyFivePercentButton);
						percentButtonsBox.add(this.fiftyPercentButton);
						percentButtonsBox.add(this.seventyFivePercentButton);
						percentButtonsBox.add(this.oneHundredPercentButton);
						transferAmountContainer.add(transferAmountBox);
						transferAmountContainer.add(this.transferAmountTextField);
						transferAmountContainer.add(percentButtonsBox);
						var tradeCostContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
							alignX : "center",
							maxWidth : 148
						});
						var tradeCostLabel = new qx.ui.basic.Label(qx.locale.Manager.tr("tnf:costs:")).set({
							textColor : "text-label",
							marginBottom : 2,
							font : "font_size_13_bold",
							width : 148,
							textAlign : "center"
						});
						var tradeCostBox = new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({
							alignX : "center",
							allowGrowX : true,
							marginTop : 10
						});
						this.costToTradeLabel = new qx.ui.basic.Label().set({
							textColor : "text-value",
							alignY : "middle",
							font : "font_size_14_bold",
							marginLeft : 3
						});
						var dollarImage = new qx.ui.basic.Image("webfrontend/ui/common/icon_res_large_credits.png").set({
							width : 18,
							height : 20,
							scale : true,
							AutoFlipH : false
						});
						tradeCostBox.add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						tradeCostBox.add(dollarImage);
						tradeCostBox.add(this.costToTradeLabel);
						tradeCostBox.add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						this.tradeButton = new webfrontend.ui.SoundButton(qx.locale.Manager.tr("tnf:trade")).set({
							width : 196,
							enabled : false
						});
						this.tradeButton.addListener("execute", this.TradeWithBases, this);
						tradeCostContainer.add(tradeCostLabel);
						tradeCostContainer.add(tradeCostBox);
						tradeCostContainer.add(this.tradeButton);
						var tradeWindowCanvas = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({
							decorator : new qx.ui.decoration.Background().set({
								backgroundRepeat : 'no-repeat',
								backgroundImage : "webfrontend/ui/menues/resource_transfer/bgr_restransfer_summary.png"
							})
						});
						tradeWindowCanvas.add(transferAmountContainer, {
							left : 50,
							top : 5
						});
						tradeWindowCanvas.add(tradeCostContainer, {
							left : 285,
							top : 18
						});
						tradeWindowCanvas.add(this.tradeButton, {
							left : 134,
							top : 100
						});
						tradeWindowContainer.add(tradeWindowCanvas);
						return tradeWindowContainer;
					},
					TableRowFilter : function () {
						var tableArray = [];
						var currentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
						if (currentCity != null) {
							this.userDefinedMaxDistance = this.maxDistanceTextField.getValue() == "" ? -1 : parseInt(this.maxDistanceTextField.getValue(), 10);
							this.userDefinedMinimumAmount = this.minimumAmountTextField.getValue() == "" ? -1 : parseInt(this.minimumAmountTextField.getValue(), 10);
							var allCities = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities();
							for (var currentBase in allCities.d) {
								if (currentCity.get_Id() != currentBase && allCities.d[currentBase].IsOwnBase()) {
									var otherCity = allCities.d[currentBase];
									var currentBaseID = currentBase;
									var otherCityName = otherCity.get_Name();
									var distance = ClientLib.Base.Util.CalculateDistance(currentCity.get_X(), currentCity.get_Y(), otherCity.get_X(), otherCity.get_Y());
									var costToTrade = currentCity.CalculateTradeCostToCoord(otherCity.get_X(), otherCity.get_Y(), 1000);
									var resourceAmount = Math.floor(otherCity.GetResourceCount(this.resourceTransferType));
									var maxResources = Math.floor(otherCity.GetResourceMaxStorage(this.resourceTransferType));
									var disqualifyDistance = false;
									var disqualifyAmount = false;
									if (this.userDefinedMaxDistance != -1 && this.userDefinedMaxDistance < distance)
										disqualifyDistance = true;
									if (this.userDefinedMinimumAmount != -1 && this.userDefinedMinimumAmount > resourceAmount)
										disqualifyAmount = true;
									if (!disqualifyDistance && !disqualifyAmount) {
										var formattedAmount = phe.cnc.gui.util.Numbers.formatNumbers(resourceAmount);
										tableArray.push({
											Base : otherCityName,
											Distance : distance,
											Credits : costToTrade,
											AmountDesc : formattedAmount,
											Amount : resourceAmount,
											Max : maxResources.toString(),
											ID : currentBaseID
										});
									}
								}
							}
							this.tableColumnModel.setDataAsMapArray(tableArray, true);
							this.selectedRow = null;
							this.selectedRowData = null;
							this.tradeWindowTable.resetCellFocus();
							this.MaintainTradeWindow();
						}
					},
					SelectAllRows : function () {
						if (this.tradeWindowTable.getSelectionModel().getSelectedCount() != this.tableColumnModel.getRowCount()) {
							this.tradeWindowTable.getSelectionModel().setSelectionInterval(0, this.tableColumnModel.getRowCount() - 1);
							this.transferAmountTextField.setValue("");
							this.totalResourceAmount = 0;
							this.costToTradeLabel.setValue("0");
							this.selectAllNoneButton.setLabel(qx.locale.Manager.tr("tnf:select none"));
							this.transferFromBaseLabel.setValue(qx.locale.Manager.tr("tnf:trading with multiple bases"));
							this.UpdateSelectedRows(this.tableColumnModel.getRowData(0));
							this.selectedRowData = this.tableColumnModel.getRowData(0);
						} else {
							this.tradeWindowTable.resetSelection();
							this.tradeWindowTable.resetCellFocus();
							this.transferAmountTextField.setValue("");
							this.transferWindowTableSelectedRows = [];
							this.SetCostLabel();
							this.transferAmountTextField.setToolTipText(qx.locale.Manager.tr("tnf:only numbers allowed"));
							this.transferFromBaseLabel.setValue(qx.locale.Manager.tr("tnf:select base for transfer"));
							this.selectAllNoneButton.setLabel(qx.locale.Manager.tr("tnf:select all"));
						}
					},
					AmountSort : function (bI, bJ) {
						if (bI[4] < bJ[4])
							return -1;
						if (bI[4] > bJ[4])
							return 1;
						return 0;
					},
					UpdateSelectedRows : function (rowData) {
						this.transferWindowTableSelectedRows = [];

						var localRows = [];
						var colModel = this.tableColumnModel;

						this.tradeWindowTable.getSelectionModel().iterateSelection(function (index) {
							var city = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(colModel.getRowData(index).ID);
							if (city != null && city.CanTrade() == ClientLib.Data.ETradeError.None)
								localRows.push(colModel.getRowData(index));
						});
						this.transferWindowTableSelectedRows = localRows;

					},
					TradeWindowTableCellClick : function (e) {

						var rowData = this.tableColumnModel.getRowData(e.getRow());
						var city = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(rowData.ID);

						this.modifier = 0;
						this.transferAmountTextField.setValue("");
						this.SetCostLabel();

						if (city != null && city.CanTrade() == ClientLib.Data.ETradeError.None) {
							this.selectedRow = e.getRow();
							this.selectedRowData = rowData;

							this.UpdateSelectedRows();

							if (this.transferWindowTableSelectedRows.length == 1)
								this.transferFromBaseLabel.setValue(qx.locale.Manager.tr("tnf:trade with %1", "<b>" + rowData.Base + "</b>"));
							if (this.transferWindowTableSelectedRows.length > 1)
								this.transferFromBaseLabel.setValue(qx.locale.Manager.tr("tnf:trading with multiple bases"));

						}

						this.MaintainTradeWindow();

					},
					ChangeResourceType : function (e) {
						var userObject = e.getData()[0];
						this.transferAmountTextField.setValue("");
						this.transferWindowTableSelectedRows = [];
						this.SetCostLabel();
						this.tradeWindowTable.resetSelection();
						this.tradeWindowTable.resetCellFocus();
						this.resourceTransferType = userObject.getUserData("key");
						if (this.resourceTransferType == ClientLib.Base.EResourceType.Tiberium) {
							this.largeTiberiumImage.setSource("webfrontend/ui/common/icon_res_large_tiberium.png");
						} else {
							this.largeTiberiumImage.setSource("webfrontend/ui/common/icon_res_large_crystal.png");
						}
						this.selectAllNoneButton.setLabel(qx.locale.Manager.tr("tnf:select all"));
						this.MaintainTradeWindow();
					},
					ResourceAmountChanged : function () {
						this.modifier = 1;
						this.SetCostLabel();
					},
					CalculateTradeCost : function () {
						this.totalTransferAmount = 0;

						if (this.transferWindowTableSelectedRows.length > 0) {

							var cities = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d;
							var selectedCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();

							if (this.transferWindowTableSelectedRows.length > 1) {
								for (var base in this.transferWindowTableSelectedRows) {
									this.totalTransferAmount += cities[this.transferWindowTableSelectedRows[base].ID].CalculateTradeCostToCoord(selectedCity.get_PosX(), selectedCity.get_PosY(), this.transferWindowTableSelectedRows[base].Amount * this.modifier);
								}
							} else {
								this.totalTransferAmount += cities[this.selectedRowData.ID].CalculateTradeCostToCoord(selectedCity.get_PosX(), selectedCity.get_PosY(), parseInt(this.transferAmountTextField.getValue().replace(/[^0-9]/g, '')));
							}
							return this.totalTransferAmount;
						}
						return 0;
					},
					ModifyResourceAmount : function (modifier) {
						this.totalResourceAmount = 0;

						this.UpdateSelectedRows(this.selectedRowData);

						if (this.transferWindowTableSelectedRows.length > 0) {
							for (var base in this.transferWindowTableSelectedRows) {
								this.totalResourceAmount += Math.floor(this.transferWindowTableSelectedRows[base].Amount * modifier);
							}
							return this.totalResourceAmount;
						}
						return 0;
					},
					SetCostLabel : function () {
						var tradeCost = this.CalculateTradeCost();
						if (this.transferAmountTextField.getValue() == "")
							tradeCost = 0;
						this.costToTradeLabel.setValue(phe.cnc.gui.util.Numbers.formatNumbersCompactAfterMillion(tradeCost).toString());
						this.costToTradeLabel.setToolTipText(phe.cnc.gui.util.Numbers.formatNumbers(tradeCost).toString());
						//this.MaintainTradeWindow();
					},
					TenPercent : function () {
						this.modifier = 0.1;
						var resourceAmount = this.ModifyResourceAmount(0.1);
						this.transferAmountTextField.setValue(phe.cnc.gui.util.Numbers.formatNumbers(resourceAmount));
						this.SetCostLabel();
					},
					TwentyFivePercent : function () {
						this.modifier = 0.25;
						var resourceAmount = this.ModifyResourceAmount(0.25);
						this.transferAmountTextField.setValue(phe.cnc.gui.util.Numbers.formatNumbers(resourceAmount));
						this.SetCostLabel();
					},
					FiftyPercent : function () {
						this.modifier = 0.5;
						var resourceAmount = this.ModifyResourceAmount(0.5);
						this.transferAmountTextField.setValue(phe.cnc.gui.util.Numbers.formatNumbers(resourceAmount));
						this.SetCostLabel();
					},
					SeventyFivePercent : function () {
						this.modifier = 0.75;
						var resourceAmount = this.ModifyResourceAmount(0.75);
						this.transferAmountTextField.setValue(phe.cnc.gui.util.Numbers.formatNumbers(resourceAmount));
						this.SetCostLabel();
					},
					OneHundredPercent : function () {
						this.modifier = 1;
						var resourceAmount = this.ModifyResourceAmount(1);
						this.transferAmountTextField.setValue(phe.cnc.gui.util.Numbers.formatNumbers(resourceAmount));
						this.SetCostLabel();
					},
					TradeWithBases : function () {
						var transferAmount = 0;
						var currentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
						if (this.transferWindowTableSelectedRows.length > 0) {
							if (currentCity != null && this.transferAmountTextField.getValue() != "") {
								for (var base in this.transferWindowTableSelectedRows) {
									var currentBase = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.transferWindowTableSelectedRows[base].ID);
									if (currentBase != null && currentBase.CanTrade() == ClientLib.Data.ETradeError.None && currentCity.CanTrade() == ClientLib.Data.ETradeError.None) {
										this.tradeButton.setEnabled(false);
										if (this.transferWindowTableSelectedRows.length == 1) {
											transferAmount = parseInt(this.transferAmountTextField.getValue().replace(/[^0-9]/g, ''));
										} else {
											transferAmount = parseInt(this.transferWindowTableSelectedRows[base].Amount * this.modifier, 10);
										}
										ClientLib.Data.MainData.GetInstance().get_Player().AddCredits(-currentCity.CalculateTradeCostToCoord(currentBase.get_X(), currentBase.get_Y(), transferAmount));
										currentCity.AddResources(this.resourceTransferType, transferAmount);
										currentBase.AddResources(this.resourceTransferType, -transferAmount);
										ClientLib.Net.CommunicationManager.GetInstance().SendCommand("SelfTrade", {
											targetCityId : currentCity.get_Id(),
											sourceCityId : currentBase.get_Id(),
											resourceType : this.resourceTransferType,
											amount : transferAmount
										}, phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.TradeResult), null);
									}
								}

								this.tradeWindowTable.resetSelection();
								this.tradeWindowTable.resetCellFocus();
								this.transferWindowTableSelectedRows = [];
								this.transferAmountTextField.setValue("");
								this.selectAllNoneButton.setLabel(qx.locale.Manager.tr("tnf:select all"));
								this.SetCostLabel();
							}
						}
					},
					TradeResult : function (ce, result) {
						if (result != ClientLib.Base.EErrorCode.Success) {
							var city = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.selectedRowData.ID);
							this.tradeConfirmationWidget.showTradeError(this, null, city.get_Name());
						} else {
							this.SetCostLabel();
						}
						this.tradeButton.setEnabled(true);
					},
					UpdateTradeTableData : function () {
						var updatedResourceCount = [];
						var otherCity = null;
						var currentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
						if (currentCity != null) {
							var transferWindowsTableData = this.tableColumnModel.getDataAsMapArray();
							for (var row in transferWindowsTableData) {
								otherCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(transferWindowsTableData[row].ID);
								if (otherCity != null && currentCity.get_Id() != otherCity.get_Id() && otherCity.IsOwnBase()) {
									var otherCityID = otherCity.get_Id();
									var otherCityName = otherCity.get_Name();
									var otherCityDistance = ClientLib.Base.Util.CalculateDistance(currentCity.get_X(), currentCity.get_Y(), otherCity.get_X(), otherCity.get_Y());
									var otherCityTradeCost = currentCity.CalculateTradeCostToCoord(otherCity.get_X(), otherCity.get_Y(), 1000);
									var otherCityResourceCount = Math.floor(otherCity.GetResourceCount(this.resourceTransferType));
									var otherCityMaxStorage = Math.floor(otherCity.GetResourceMaxStorage(this.resourceTransferType));
									var otherCityResourceCountFormatted = phe.cnc.gui.util.Numbers.formatNumbers(otherCityResourceCount);
									updatedResourceCount.push({
										Base : otherCityName,
										Distance : otherCityDistance,
										Credits : otherCityTradeCost,
										AmountDesc : otherCityResourceCountFormatted,
										Amount : otherCityResourceCount,
										Max : otherCityMaxStorage.toString(),
										ID : otherCityID
									});
								} else {
									updatedResourceCount.push(transferWindowsTableData[row]);
								}
							}
							this.tableColumnModel.setDataAsMapArray(updatedResourceCount, true, false);
							if (this.selectedRow != null) {
								var selectedRowData = this.tableColumnModel.getRowData(this.selectedRow);
								otherCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(selectedRowData.ID);
								if (otherCity != null && currentCity.get_Id() != otherCity.get_Id() && otherCity.IsOwnBase() && otherCity.CanTrade() != ClientLib.Data.ETradeError.None) {
									this.selectedRowData = null;
									this.selectedRow = null;
									this.tradeWindowTable.resetCellFocus();
								} else {
									this.selectedRowData = selectedRowData;
								}
							}
						}
					},
					MaintainTradeWindow : function () {

						var hasEnoughtCredits = false;
						var validResourceAmount = true;

						if (this.transferWindowTableSelectedRows.length > 0) {

							var resourcesInTextField = parseInt(this.transferAmountTextField.getValue().replace(/[^0-9]/g, ''));
							var tradeCost = this.CalculateTradeCost();
							var playerCreditCount = ClientLib.Data.MainData.GetInstance().get_Player().GetCreditsCount();

							if (playerCreditCount < tradeCost) {
								this.costToTradeLabel.setTextColor("text-error");
							} else {
								this.costToTradeLabel.resetTextColor();
							}

							var selectedBaseResourceAmount = parseInt(this.selectedRowData.Amount, 10);

							if (this.transferAmountTextField.getValue() != "" && this.transferWindowTableSelectedRows.length > 1) {
								//Automatically update the text field with the new resource amount each tick
								var resourceAmount = this.ModifyResourceAmount(this.modifier);
								this.transferAmountTextField.setValue(phe.cnc.gui.util.Numbers.formatNumbers(resourceAmount));
								this.SetCostLabel();
							}

							if (this.transferWindowTableSelectedRows.length == 1) {
								if (resourcesInTextField == 0 || selectedBaseResourceAmount < resourcesInTextField) {
									this.transferAmountTextField.setTextColor("text-error");
								} else {
									this.transferAmountTextField.resetTextColor();
								}
								validResourceAmount = resourcesInTextField > 0 && resourcesInTextField <= selectedBaseResourceAmount;
							}

							hasEnoughtCredits = playerCreditCount >= tradeCost;

						}

						this.tradeButton.setEnabled(this.transferWindowTableSelectedRows.length > 0 && hasEnoughtCredits && validResourceAmount && this.transferAmountTextField.getValue() != "");
						this.transferAmountTextField.setEnabled(this.transferWindowTableSelectedRows.length > 0);
						this.tenPercentButton.setEnabled(this.transferWindowTableSelectedRows.length > 0);
						this.twentyFivePercentButton.setEnabled(this.transferWindowTableSelectedRows.length > 0);
						this.fiftyPercentButton.setEnabled(this.transferWindowTableSelectedRows.length > 0);
						this.seventyFivePercentButton.setEnabled(this.transferWindowTableSelectedRows.length > 0);
						this.oneHundredPercentButton.setEnabled(this.transferWindowTableSelectedRows.length > 0);

						this.transferAmountTextField.setReadOnly(this.transferWindowTableSelectedRows.length > 1);

						if (this.tradeWindowTable.getSelectionModel().getSelectedCount() > 1) {
							this.transferAmountTextField.setToolTipText(qx.locale.Manager.tr("tnf:percent buttons"));
						} else {
							this.transferAmountTextField.setToolTipText(qx.locale.Manager.tr("tnf:only numbers allowed"));
						}

					},
					_onTick : function () {
						var currentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();
						if (currentCity != null && currentCity.get_HasIncommingAttack()) {
							this.onBtnClose();
						}
						this.UpdateTradeTableData();
						this.MaintainTradeWindow();
					}
				}
			});
		}

		function NewTradeOverlay_checkIfLoaded() {
			try {
				if (typeof qx !== 'undefined' && typeof qx.locale !== 'undefined' && typeof qx.locale.Manager !== 'undefined' && typeof webfrontend.gui.trade.TradeOverlay !== 'undefined') {
					qx.Class.undefine("webfrontend.gui.trade.TradeOverlay");
					CreateNewTradeOverlay();
				} else {
					window.setTimeout(NewTradeOverlay_checkIfLoaded, 1000);
				}
			} catch (e) {
				console.log("NewTradeOverlay_checkIfLoaded: ", e);
			}
		}

		if (/commandandconquer\.com/i.test(document.domain)) {
			window.setTimeout(NewTradeOverlay_checkIfLoaded, 1000);
		}
	};

	try {
		var NewTradeOverlay = document.createElement("script");
		NewTradeOverlay.innerHTML = "(" + NewTradeOverlay_main.toString() + ")();";
		NewTradeOverlay.type = "text/javascript";
		if (/commandandconquer\.com/i.test(document.domain)) {
			document.getElementsByTagName("head")[0].appendChild(NewTradeOverlay);
		}
	} catch (e) {
		console.log("NewTradeOverlay: init error: ", e);
	}

})();


// ==UserScript==
// @name Tiberium Alliances BaseNavBar Reorderer
// @description Allows you to set a custom order for your bases in the Base Navigation Bar.
// @namespace basenav_reorder
// @include https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version 1.0
// @author KRS_L
// ==/UserScript==
(function () {
	var BaseNavReorder_main = function () {
		var reorderWindow = null;
		var baseList = null;
		var bases = null;
		var myOrder = null;
		var reorderInterval = 500;
		function createBaseNavReorder() {
			try {
				console.log('Base Navigation Bar Reorderer loaded');
				var baseTimerBar = qx.core.Init.getApplication().getGlobalBaseTimerBar().getChildren()[1];
				var btnToggleWindow=new qx.ui.form.Button("").set({toolTipText:"Reorder Bases"});
				baseTimerBar.add(btnToggleWindow);
				reorderWindow = new qx.ui.window.Window("BaseNavBar Reorderer", "").set({
					contentPaddingTop: 0,
					contentPaddingBottom: 7,
					contentPaddingRight: 7,
					contentPaddingLeft: 7,
					width: 200,
					showMaximize: false,
					showMinimize: false,
					allowMaximize: false,
					allowMinimize: false,
					resizable: false
				});
				reorderWindow.setLayout(new qx.ui.layout.Canvas());

				baseList = new qx.ui.form.List;
				baseList.set({ height: 300, width: 150, selectionMode : "single" });
				var btnMoveUp=new qx.ui.form.Button("↑").set({height:40,toolTipText:"Move Up"});
				var btnMoveDown=new qx.ui.form.Button("↓").set({height:40,toolTipText:"Move Down"});

				reorderWindow.add(btnMoveUp, {
					top: 105,
					right: 3
				});
				reorderWindow.add(btnMoveDown, {
					bottom: 110,
					right: 3
				});

				reorderWindow.add(baseList);
				myOrder = localStorage.ta_basenavbar_baseorder;
				if (!myOrder) {
					myOrder = getAllBases();
					localStorage.ta_basenavbar_baseorder = JSON.stringify(myOrder);
				}
				btnToggleWindow.addListener("click", toggleReorderWindow, this);
				btnMoveUp.addListener("click", moveUp, this);	
				btnMoveDown.addListener("click", moveDown, this);
				reorder();
			} catch (e) {
				console.log("createBaseNavReorder: ", e);
			}
		}

		function moveUp() {
			try {
				if (baseList.getSelection()[0] !== null) {
					var curIndex = baseList.indexOf(baseList.getSelection()[0]);
					if (curIndex > 0) baseList.addAt(baseList.getSelection()[0],curIndex-1);
					saveOrder();
				}
			} catch (e) {
				console.log(e);
			}
		}

		function moveDown() {
			try {
				if (baseList.getSelection()[0] !== null) {
					var curIndex = baseList.indexOf(baseList.getSelection()[0]);
					if (curIndex < baseList.getChildren().length) baseList.addAt(baseList.getSelection()[0],curIndex+1);
					saveOrder();
				}
			} catch (e) {
				console.log(e);
			}
		}
	
		function saveOrder() {
			try {
				myOrder = [];
				for (var y in baseList.getChildren()) {
					myOrder.push(translateNameToId(baseList.getChildren()[y].getLabel()));
				}
				localStorage.ta_basenavbar_baseorder = JSON.stringify(myOrder);
			} catch (e) {
				console.log(e);
			}
		}

		function toggleReorderWindow() {
			try {
				if (reorderWindow.isVisible()) {
					reorderWindow.close();
					baseList.removeAll();
				} else {
					var reorderWindowLeft = qx.bom.Viewport.getWidth(window) - window.qx.core.Init.getApplication().getGlobalBaseTimerBar().getWidth() - reorderWindow.getWidth();
					var reorderWindowTop = window.qx.core.Init.getApplication().getGlobalBaseTimerBar().getHeight();
					reorderWindow.moveTo(reorderWindowLeft, reorderWindowTop);
					var item;
					myOrder = JSON.parse(localStorage.ta_basenavbar_baseorder);
					var newBases = getAllBases(); 
					for (var j in myOrder) {
						for (var i in newBases) {
							if (myOrder[j] === newBases[i]) {
								newBases.splice(i, 1);
								continue;
							}
						}
					}
					myOrder = myOrder.concat(newBases);
					reorderWindow.open();
					for (var x in myOrder) {
						item = new qx.ui.form.ListItem(translateIdToName(myOrder[x]));
						baseList.add(item);
					}
				}
			} catch (e) {
				console.log(e);
			}
		}

		function reorder() {
			try {
				var baseNavigationBar = qx.core.Init.getApplication().getBaseNavigationBar().getChildren()[0].getChildren()[0];
				var baseButtons = baseNavigationBar.getChildren();
				myOrder = JSON.parse(localStorage.ta_basenavbar_baseorder);

				for (var i = myOrder.length; i > -1 ; i--) {
					for (var x in baseButtons) {
						if (typeof baseButtons[x].getChildren()[1].getChildren === 'function') {
							var navigationButton = baseButtons[x].getChildren()[1].getChildren()[0].getChildren()[2];
							if (navigationButton.getValue() === translateIdToName(myOrder[i])) {
								baseNavigationBar.addAt(baseButtons[x],0);
							}
						}
					}
				}
				window.setTimeout(reorder, reorderInterval);
			} catch (e) {
				console.log(e);
			}
		}

		function getAllBases() {
			try {
				bases = [];
				var cities = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d;
				for (var cityId in cities) {
					bases.push(cityId);
				}
				return bases;
			} catch (e) {
				console.log(e);
			}
		}

		function translateIdToName(id) {
			try {
				var cities = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d;
				for (var cityId in cities) {
					if (cityId === id) {
						return cities[cityId].get_Name();
					}
				}
			} catch (e) {
				console.log(e);
			}
		}

		function translateNameToId(name) {
			try {
				var cities = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d;
				for (var city in cities) {
					if (cities[city].get_Name() === name) {
						return city;
					}
				}
			} catch (e) {
				console.log(e);
			}
		}
	
		function BaseNavReorder_checkIfLoaded() {
			try {
				if (typeof qx !== 'undefined' && qx.core.Init.getApplication() && qx.core.Init.getApplication().getGlobalBaseTimerBar() && qx.core.Init.getApplication().getBaseNavigationBar()) {
					createBaseNavReorder();
				} else {
					window.setTimeout(BaseNavReorder_checkIfLoaded, 1000);
				}
			} catch (e) {
				console.log("BaseNavReorder_checkIfLoaded: ", e);
			}
		}

		if (/commandandconquer\.com/i.test(document.domain)) {
			window.setTimeout(BaseNavReorder_checkIfLoaded, 1000);
		}
	}

	try {
		var BaseNavReorder = document.createElement("script");
		BaseNavReorder.innerHTML = "(" + BaseNavReorder_main.toString() + ")();";
		BaseNavReorder.type = "text/javascript";
		if (/commandandconquer\.com/i.test(document.domain)) {
			document.getElementsByTagName("head")[0].appendChild(BaseNavReorder);
		}
	} catch (e) {
		console.log("BaseNavReorder: init error: ", e);
	}
})();



// ==UserScript==
// @name Tiberium Alliances PvP/PvE Player Info Mod
// @description Separates the number of bases destroyed into PvP and PvE in the Player Info window. Now also includes a tab showing all the POI the player is holding.
// @namespace player_info_mod
// @include https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version 1.2
// @author KRS_L
// ==/UserScript==
(function () {
	var PlayerInfoMod_main = function () {
		var playerInfoWindow = null;
		var general = null;
		var pvpScoreLabel = null;
		var pveScoreLabel = null;
		var playerName = null;
		var tabView = null;
		var tableModel = null;
		var baseCoords = null;
		var rowData = null;

		function createPlayerInfoMod() {
			try {
				console.log('Player Info Mod loaded');
				var tr = qx.locale.Manager.tr;
				playerInfoWindow = webfrontend.gui.info.PlayerInfoWindow.getInstance();
				general = playerInfoWindow.getChildren()[0].getChildren()[0].getChildren()[0].getChildren()[0].getChildren()[0].getChildren()[1].getChildren()[0];
				tabView = playerInfoWindow.getChildren()[0];
				playerName = general.getChildren()[1];

				var pvpLabel = new qx.ui.basic.Label("- PvP:");
				pvpScoreLabel = new qx.ui.basic.Label("").set({
					textColor: "text-value",
					font: "font_size_13_bold"
				});
				general.add(pvpLabel, {
					row: 3,
					column: 3
				});
				general.add(pvpScoreLabel, {
					row: 3,
					column: 4
				});

				var pveLabel = new qx.ui.basic.Label("- PvE:");
				pveScoreLabel = new qx.ui.basic.Label("").set({
					textColor: "text-value",
					font: "font_size_13_bold"
				});
				general.add(pveLabel, {
					row: 4,
					column: 3
				});
				general.add(pveScoreLabel, {
					row: 4,
					column: 4
				});

				var poiTab = new qx.ui.tabview.Page("POI");
				poiTab.setLayout(new qx.ui.layout.Canvas());
				poiTab.setPaddingTop(6);
				poiTab.setPaddingLeft(8);
				poiTab.setPaddingRight(10);
				poiTab.setPaddingBottom(8);

				tableModel = new webfrontend.data.SimpleColFormattingDataModel().set({
					caseSensitiveSorting: false
				});

				tableModel.setColumns([tr("tnf:name"), tr("tnf:lvl"), tr("tnf:points"), tr("tnf:coordinates")], ["t", "l", "s", "c"]);
				tableModel.setColFormat(3, "<div style=\"cursor:pointer;color:" + webfrontend.gui.util.BBCode.clrLink + "\">", "</div>");
				var poiTable = new webfrontend.gui.widgets.CustomTable(tableModel);
				poiTable.addListener("cellClick", centerCoords, this);

				var columnModel = poiTable.getTableColumnModel();
				columnModel.setColumnWidth(0, 250);
				columnModel.setColumnWidth(1, 80);
				columnModel.setColumnWidth(2, 120);
				columnModel.setColumnWidth(3, 120);
				columnModel.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Html());
				columnModel.getDataCellRenderer(2).setUseAutoAlign(false);
				poiTable.setStatusBarVisible(false);
				poiTable.setColumnVisibilityButtonVisible(false);
				poiTab.add(poiTable, {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				});
				tabView.add(poiTab);

				playerInfoWindow.addListener("close", onPlayerInfoWindowClose, this);
				playerName.addListener("changeValue", onPlayerChanged, this);

			} catch (e) {
				console.log("createPlayerInfoMod: ", e);
			}
		}

		function centerCoords(e) {
			try {
				var poiCoord = tableModel.getRowData(e.getRow())[3].split(":");
				if (e.getColumn() == 3) webfrontend.gui.UtilView.centerCoordinatesOnRegionViewWindow(Number(poiCoord[0]), Number(poiCoord[1]));
			} catch (e) {
				console.log("centerCoords: ", e);
			}
		}

		function onPlayerInfo(context, data) {
			try {
				pvpScoreLabel.setValue((data.bd - data.bde).toString());
				pveScoreLabel.setValue(data.bde.toString());
				var bases = data.c;
				baseCoords = new Object;
				for (var i in bases) {
					var base = bases[i];
					baseCoords[i] = new Object();
					baseCoords[i]["x"] = base.x;
					baseCoords[i]["y"] = base.y;
				}
				ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetPublicAllianceInfo", {
					id: data.a
				}, phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, onAllianceInfo), null);
			} catch (e) {
				console.log("onPlayerInfo: ", e);
			}
		}

		function onAllianceInfo(context, data) {
			try {
				rowData = [];
				var pois = data.opois;
				for (var i in pois) {
					var poi = pois[i];
					for (var j in baseCoords) {
						var distanceX = Math.abs(baseCoords[j].x - poi.x);
						var distanceY = Math.abs(baseCoords[j].y - poi.y);
						if (distanceX > 2 || distanceY > 2) continue;
						if (distanceX == 2 && distanceY == 2) continue;
						var name = phe.cnc.gui.util.Text.getPoiInfosByType(poi.t).name;
						var level = poi.l;
						var score = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(poi.l);
						var coords = phe.cnc.gui.util.Numbers.formatCoordinates(poi.x, poi.y);
						rowData.push([name, level, score, coords]);
						break;
					}
				}
				tableModel.setData(rowData);
				tableModel.sortByColumn(0, true);
			} catch (e) {
				console.log("onAllianceInfo: ", e);
			}
		}

		function onPlayerChanged() {
			try {
				if (playerName.getValue().length > 0) {
					ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("GetPublicPlayerInfoByName", {
						name: playerName.getValue()
					}, phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, onPlayerInfo), null);
				}
			} catch (e) {
				console.log("onPlayerChanged: ", e);
			}
		}

		function onPlayerInfoWindowClose() {
			try {
				pvpScoreLabel.setValue("");
				pveScoreLabel.setValue("");
				tableModel.setData([]);
			} catch (e) {
				console.log("onPlayerInfoWindowClose: ", e);
			}
		}

		function PlayerInfoMod_checkIfLoaded() {
			try {
				if (typeof qx !== 'undefined' && typeof qx.locale !== 'undefined' && typeof qx.locale.Manager !== 'undefined') {
					if (ClientLib.Data.MainData.GetInstance().get_Alliance().get_FirstLeaders() !== null && ClientLib.Data.MainData.GetInstance().get_Alliance().get_FirstLeaders().l.length != 0) {
						createPlayerInfoMod();
					} else {
						window.setTimeout(PlayerInfoMod_checkIfLoaded, 1000);
					}
				} else {
					window.setTimeout(PlayerInfoMod_checkIfLoaded, 1000);
				}
			} catch (e) {
				console.log("PlayerInfoMod_checkIfLoaded: ", e);
			}
		}

		if (/commandandconquer\.com/i.test(document.domain)) {
			window.setTimeout(PlayerInfoMod_checkIfLoaded, 1000);
		}
	}

	try {
		var PlayerInfoMod = document.createElement("script");
		PlayerInfoMod.innerHTML = "(" + PlayerInfoMod_main.toString() + ")();";
		PlayerInfoMod.type = "text/javascript";
		if (/commandandconquer\.com/i.test(document.domain)) {
			document.getElementsByTagName("head")[0].appendChild(PlayerInfoMod);
		}
	} catch (e) {
		console.log("PlayerInfoMod: init error: ", e);
	}
})();




// ==UserScript==
// @name        C&C Tiberium Alliances Title Mod
// @namespace   http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @description Displays your player name in the browser title bar. Also shows the number of whispers you've received when in another tab or window.
// @include     https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @icon        https://sites.google.com/site/titlemod/home/favicon.png
// @version     0.7.0
// @author      null
// @copyleft    eternity
// @grant       none
// ==/UserScript==

(function () {
	var titleMod_main = function () {
		try {
			window.titleMod_Version = "0.7.0";
			console.log("C&C: Tiberium Alliances Title Mod v" + window.titleMod_Version + " loading...");
			var titleMod_init = function () {
				
				// Set this to false if you don't want any sound
				var playNotificationSounds = true;
				var checkPageFocusDelay = 2000;

				var SND_loud = new Audio("data:video/ogg;base64,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");
				var SND_twoTone = new Audio("data:video/ogg;base64,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");
				var SND_quiet = new Audio("data:video/ogg;base64,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DI5iWZ4niqIoiqapqjRN0zxPFEXRNFXVVWmapnmeKIqiaaqq6vI8TRNF0xRF01RV14WmiaJpmqJpqqrrwvNE0TRNU1VV1XXheaJomqapqq7ruhBFUTRN01RV13VdIIqmaZqq6rqyDETRNFVVVV1XloEomqaqqqrryjIwTdNUVdeVXVkGmKaquq4syzJAVV3XdWVZtgGq6rquK8uyDXBd15VlWbZtAK4ry7Js2wIAAA4cAAACjKCTjCqLsNGECw9AoSErAoAoAADAGKYUU8owJiGkEBrGJIQSQiYllZRKqiCkUlIpFYRUUiolo5JSailVEFIpKZUKQiqllVQAANiBAwDYgYVQaMhKACAPAIAgRinGGGMMMqYUY845B5VSijHnnJOMMcaYc85JKRljzDnnpJSMOeecc1JK5pxzzjkppXPOOeeclFJK55xzTkopJYTOOSellNI555wTAABU4AAAEGCjyOYEI0GFhqwEAFIBAAyOY1mapmmeJ4qWJGma53meKJqmZkma5nmeJ4qmyfM8TxRF0TRVled5niiKommqKtcVRdM0TVVVVbIsiqZpmqrqujBN01RV13VlmKZpqqrrui5s21RV1XVlGbatmqoqu7IMXFd1Zde2geu6ruzatgAA8AQHAKACG1ZHOCkaCyw0ZCUAkAEAQBiDjEIIIYUQQgohhJRSCAkAABhwAAAIMKEMFBqyEgBIBQAAkLHWWmuttdZARymllFJKqXCMUkoppZRSSimllFJKKaWUSkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKBQAuVTgA6D7YsDrCSdFYYKEhKwGAVAAAwBilmHJOQikVQow5JiGlFiuEGHNOSkoxFs85B6GU1losnnMOQimtxVhU6pyUlFqKragUMikppdZiEMKUlFprpbUghCqpxJZaa0EIXVNqKZbYghC2tpJSjDEG4YOPsZVYagw++CBbKzHVWgAAZoMDAESCDasjnBSNBRYashIACAkAIIxRijHGGHPOOeckY4wx5pxzEEIIoWSMMeeccw5CCCGUzjnnnHMQQgghhFJKx5xzDkIIIYRQUuqccxBCCKGEEEoqnXMOQgghhFJKSaVzEEIIoYRQQkklpdQ5CCGEEEIpKaWUQgghhBJC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");
				// Volume - valid range 0.0 to 1.0
				SND_loud.volume = 1.0;
				SND_twoTone.volume = 1.0;
				SND_quiet.volume = 1.0;
				
				var debug = false;
				var msg_alliance = 1;
				var msg_whisper = 1;
				var msg_officer = 1;
				function setFavIcon(o) {
					try {
						var canvas = document.createElement('canvas');
						var ctx = canvas.getContext('2d');
						var canvasCopy = document.createElement('canvas');
						var ctxCopy = canvasCopy.getContext("2d");
						var children = document.head.childNodes;
						var iconDom;
						var img = document.createElement('img');
						
						//get favicon by rel
						if (!document.getElementById("Favicon")) {
							for (i in children) {
								if (children[i].rel) {
									children[i].id = "Favicon";
									iconDom = children[i];
									//children[i].parentNode.removeChild(children[i]);
									break;
								}
							}
						} else {
							iconDom = document.getElementById("Favicon");
						}
						//on
						if (o === 1) {
							if (debug)
								console.log("o === 1");
							img.src = 'favicon.ico';
							img.onload = function () {
								if (canvas.getContext) {
									canvas.height = canvas.width = 16; // set the size
									//Chrome fix for 64px favicon
									if (img.width > 16) {
										canvasCopy.width = img.width;
										canvasCopy.height = img.height;
										ctxCopy.drawImage(img, 0, 0);
										ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);
									} else if (img.width == 16) {
										ctx.drawImage(img, 0, 0);
									}
									ctx.shadowOffsetX = 1;
									ctx.shadowOffsetY = 1;
									ctx.shadowBlur = 1;
									ctx.shadowColor = "#000000";
									ctx.font = 'bold 18px "helvetica", sans-serif';
									if (msg_alliance > 0 || debug) {
										ctx.fillStyle = '#a5f25b'; //alliance
										ctx.fillText("!", 1, 15);
									}
									if (msg_whisper > 0 || debug) {
										ctx.fillStyle = '#ff95b3'; //outgoing whisper
										//ctx.fillStyle = '#c59eff'; //incoming whisper
										ctx.fillText("!", 5, 15);
									}
									if (msg_officer > 0 || debug) {
										ctx.fillStyle = '#fdf05f'; //officer
										ctx.fillText("!", 9, 15);
									}
									iconDom.href = canvas.toDataURL('image/x-icon');
									document.head.appendChild(iconDom);
								}
							};
						}
						//off
						if (!o) {
							if (debug)
								console.log("o is false or 0");
							//var el = document.getElementById("Favicon");
							iconDom.href = 'favicon.ico';
							document.head.appendChild(iconDom);
						}
					} catch (err) {
						console.log("CNCTAtitleMod: Problem swapping favicon " + err);
					}
				}
				
				function init() {
					try {
						var mainData = ClientLib.Data.MainData.GetInstance();
						var player_cities = mainData.get_Cities();
						if (player_cities.get_CurrentOwnCity() != null) {
							if (debug)
								setFavIcon(1);
							var current_city = player_cities.get_CurrentOwnCity();
							var playerName = current_city.get_PlayerName();
							var PNRegex = new RegExp(">" + playerName + "<", "i");
							var inBackground = false;
							var title0 = window.document.title = playerName + " - C&C: Tiberium Alliances";
							console.log("Changing Window title from: " + window.document.title);
							window.document.title = playerName + " - C&C: Tiberium Alliances";
							if (typeof webfrontend.gui.chat.ChatWidget.prototype.titleMod_showMessage === 'undefined') {
								webfrontend.gui.chat.ChatWidget.prototype.titleMod_showMessage = webfrontend.gui.chat.ChatWidget.prototype.showMessage;
								webfrontend.gui.chat.ChatWidget.prototype.showMessage = function (message, sender, channel) {
									//console.log("\nmessage: "+message+"\nchannel: "+channel);
									// 1 system white
									// 3 alliance
									if (channel == 3 && inBackground) {
										if (playNotificationSounds){
											SND_quiet.play();
											//SND_twoTone.play();
											//SND_loud.play();
										}
										msg_alliance++;
										setFavIcon(1);
									}
									// 5 officer
									if (channel == 5 && inBackground) {
										if (playNotificationSounds){
											//SND_quiet.play();
											SND_twoTone.play();
											//SND_loud.play();
										}
										msg_officer++;
										setFavIcon(1);
									}
									// 9 whisper
									if (channel == 9 && inBackground && !PNRegex.test(sender)) {
										if (playNotificationSounds){
											//SND_quiet.play();
											//SND_twoTone.play();
											SND_loud.play();
										}
										msg_whisper++;
										title1 = window.document.title = "(" + msg_whisper + ")" + playerName + " - C&C: Tiberium Alliances";
										setFavIcon(1);
									}
									// 15 AFK blue
									this.titleMod_showMessage(message, sender, channel);
								};
							}
							var CheckPageFocus = function () {
								if (document.hasFocus() && inBackground) {
									msg_alliance = 0;
									msg_whisper = 0;
									msg_officer = 0;
									inBackground = false;
									window.document.title = playerName + " - C&C: Tiberium Alliances";
									if (!debug)
										setFavIcon(0);
								} else if (document.hasFocus() == false) {
									inBackground = true;
								}
							}
							setInterval(CheckPageFocus, checkPageFocusDelay);
						} else {
							window.setTimeout(init, 1000);
						}
					} catch (e) {
						console.log("CNCTAtitleMod: problem loading player name:\n" + e);
					}
				}
				init();
				
			}
		} catch (e) {
			console.log("titleMod_init: ", e);
		}
		
		function CNCTAtitleMod_checkIfLoaded() {
			try {
				if (typeof qx != 'undefined') {
					titleMod_init();
				} else {
					window.setTimeout(CNCTAtitleMod_checkIfLoaded, 1000);
				}
			} catch (e) {
				console.log("CNCTAtitleMod_checkIfLoaded: ", e);
			}
		}
		window.setTimeout(CNCTAtitleMod_checkIfLoaded, 2000);
	};
	
	try {
		var CNCTAtitleMod = document.createElement("script");
		CNCTAtitleMod.innerHTML = "(" + titleMod_main.toString() + ")();";
		CNCTAtitleMod.type = "text/javascript";
		document.getElementsByTagName("head")[0].appendChild(CNCTAtitleMod);
	} catch (e) {
		console.log("CNCTAtitleMod: init error: ", e);
	}
})();


// ==UserScript==
// @name Tiberium Alliances Tunnel Info
// @description Tunnel info
// @namespace TATI
// @include http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version 2.2
// @updateURL https://userscripts.org/scripts/source/293295.meta.js
// @downloadURL https://userscripts.org/scripts/source/293295.user.js
// @author KRS_L
// ==/UserScript==
(function () {
	var TATI_main = function () {
		console.log('Tunnel Info loaded');
		function CreateTATI() {
			qx.Class.define("TATI", {
				type : "singleton",
				extend : qx.core.Object,
				construct : function () {},
				members : {
					_App : null,
					_MainData : null,
					_VisMain : null,
					regionCityMoveInfoAddon : {
						grid : null,
						blockedTunnelImage : null,
						offenseLevelLabel : null,
						offenseLevelValue : null,
						requiredOffenseLevelLabel : null,
						requiredOffenseLevelValue : null,
					},
					regionCityMoveInfoAddonExists : null,
					currentCityOffenseLevel : null,
					requiredOffenseLevel : null,
					gridWidth : null,
					gridHeight : null,
					tunnelMarkerWidth : null,
					tunnelMarkerHeight : null,
					regionZoomFactor : null,
					tunnelMarkerList : null,
					tunnelInfluenceRange : null,
					initialize : function () {
						try {
							this._App = qx.core.Init.getApplication();
							this._MainData = ClientLib.Data.MainData.GetInstance();
							this._VisMain = ClientLib.Vis.VisMain.GetInstance();

							this.tunnelMarkerList = [];

							phe.cnc.Util.attachNetEvent(this._VisMain.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.MoveBase), "OnCellChange", ClientLib.Vis.MouseTool.OnCellChange, this, this.baseMoveToolCellChange);
							phe.cnc.Util.attachNetEvent(this._VisMain.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.MoveBase), "OnActivate", ClientLib.Vis.MouseTool.OnActivate, this, this.baseMoveToolActivate);
							phe.cnc.Util.attachNetEvent(this._VisMain.GetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.MoveBase), "OnDeactivate", ClientLib.Vis.MouseTool.OnDeactivate, this, this.baseMoveToolDeactivate);

							this.regionCityMoveInfoAddon.grid = new qx.ui.container.Composite();
							var layout = new qx.ui.layout.Grid(5, 5);
							this.regionCityMoveInfoAddon.grid.setLayout(layout);
							this.regionCityMoveInfoAddon.blockedTunnelImage = new qx.ui.basic.Image("data:image/png;base64,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");

							this.regionCityMoveInfoAddon.offenseLevelLabel = new qx.ui.basic.Label("Offense Level:");
							this.regionCityMoveInfoAddon.offenseLevelLabel.setTextColor("#FFF")
							this.regionCityMoveInfoAddon.offenseLevelLabel.setAlignY("bottom");
							this.regionCityMoveInfoAddon.offenseLevelLabel.setAlignX("right");

							this.regionCityMoveInfoAddon.offenseLevelValue = new qx.ui.basic.Label("");
							this.regionCityMoveInfoAddon.offenseLevelValue.setFont("bold");
							this.regionCityMoveInfoAddon.offenseLevelValue.setTextColor("#FFF")
							this.regionCityMoveInfoAddon.offenseLevelValue.setAlignY("bottom");
							this.regionCityMoveInfoAddon.offenseLevelValue.setAlignX("right");

							this.regionCityMoveInfoAddon.requiredOffenseLevelLabel = new qx.ui.basic.Label("Required Level:");
							this.regionCityMoveInfoAddon.requiredOffenseLevelLabel.setTextColor("#FFF")
							this.regionCityMoveInfoAddon.requiredOffenseLevelLabel.setAlignY("top");
							this.regionCityMoveInfoAddon.requiredOffenseLevelLabel.setAlignX("right");

							this.regionCityMoveInfoAddon.requiredOffenseLevelValue = new qx.ui.basic.Label("");
							this.regionCityMoveInfoAddon.requiredOffenseLevelValue.setFont("bold");
							this.regionCityMoveInfoAddon.requiredOffenseLevelValue.setTextColor("#FFF")
							this.regionCityMoveInfoAddon.requiredOffenseLevelValue.setAlignY("top");
							this.regionCityMoveInfoAddon.requiredOffenseLevelValue.setAlignX("right");

							this.regionCityMoveInfoAddon.grid.add(this.regionCityMoveInfoAddon.blockedTunnelImage, {
								row : 0,
								column : 0,
								rowSpan : 2
							});
							this.regionCityMoveInfoAddon.grid.add(this.regionCityMoveInfoAddon.offenseLevelLabel, {
								row : 0,
								column : 1
							});
							this.regionCityMoveInfoAddon.grid.add(this.regionCityMoveInfoAddon.offenseLevelValue, {
								row : 0,
								column : 2
							});
							this.regionCityMoveInfoAddon.grid.add(this.regionCityMoveInfoAddon.requiredOffenseLevelLabel, {
								row : 1,
								column : 1
							});
							this.regionCityMoveInfoAddon.grid.add(this.regionCityMoveInfoAddon.requiredOffenseLevelValue, {
								row : 1,
								column : 2
							});

						} catch (e) {
							console.log(e);
						}
					},

					baseMoveToolActivate : function () {
						try {
							var announcement = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Announcement();
							var re = /\[tir\][0-9]\[\/tir\]/;
							var tir = announcement.match(re);
							if (tir != null) {
								tir = tir.toString();
								this.tunnelInfluenceRange = parseInt(tir.substring(tir.indexOf("]") + 1, tir.lastIndexOf("[")));
							} else {
								this.tunnelInfluenceRange = 6;
							}
							this.getRegionZoomFactorAndSetMarkerSize();
							this.currentCityOffenseLevel = this._MainData.get_Cities().get_CurrentOwnCity().get_LvlOffense();
							this.regionCityMoveInfoAddon.offenseLevelValue.setValue((this.currentCityOffenseLevel).toFixed(2));
							phe.cnc.Util.attachNetEvent(this._VisMain.get_Region(), "PositionChange", ClientLib.Vis.PositionChange, this, this.repositionMarkers);
							phe.cnc.Util.attachNetEvent(this._VisMain.get_Region(), "ZoomFactorChange", ClientLib.Vis.ZoomFactorChange, this, this.resizeMarkers);
						} catch (e) {
							console.log(e);
						}
					},

					baseMoveToolDeactivate : function () {
						try {
							phe.cnc.Util.detachNetEvent(this._VisMain.get_Region(), "PositionChange", ClientLib.Vis.PositionChange, this, this.repositionMarkers);
							phe.cnc.Util.detachNetEvent(this._VisMain.get_Region(), "ZoomFactorChange", ClientLib.Vis.ZoomFactorChange, this, this.resizeMarkers);
							this.removeTunnelMarkers()
						} catch (e) {
							console.log(e);
						}
					},

					baseMoveToolCellChange : function (startX, startY) {
						try {
							if (this.regionCityMoveInfoAddonExists == true) {
								webfrontend.gui.region.RegionCityMoveInfo.getInstance().remove(this.regionCityMoveInfoAddon.grid);
								this.regionCityMoveInfoAddonExists = false;
							}

							this.removeTunnelMarkers();

							if (this.currentCityOffenseLevel > 0)
								this.findTunnels(startX, startY);
						} catch (e) {
							console.log(e);
						}
					},

					findTunnels : function (startX, startY) {
						try {
							this.requiredOffenseLevel = 0;
							var region = this._VisMain.get_Region();
							var scanDistance = 7;
							for (var x = startX - (scanDistance); x < (startX + scanDistance); x++) {
								for (var y = startY - scanDistance; y < (startY + scanDistance); y++) {
									var visObject = region.GetObjectFromPosition(x * region.get_GridWidth(), y * region.get_GridHeight());
									if (visObject != null) {
										if (visObject.get_VisObjectType() == ClientLib.Vis.VisObject.EObjectType.RegionPointOfInterest) {
											var poiType = visObject.get_Type();
											if (poiType == 0) {
												var tunnelX = visObject.get_RawX();
												var tunnelY = visObject.get_RawY();
												var tunnelLevel = visObject.get_Level();
												var distanceToTunnel = ClientLib.Base.Util.CalculateDistance(startX, startY, tunnelX, tunnelY);
												if (distanceToTunnel <= this.tunnelInfluenceRange) {
													if (this.currentCityOffenseLevel < tunnelLevel - 6) { // Blocking Tunnel
														this.regionCityMoveInfoAddonExists = true;
														if (this.requiredOffenseLevel < tunnelLevel - 6)
															this.requiredOffenseLevel = tunnelLevel - 6;
														this.addTunnelMarker(tunnelX, tunnelY, "#ff3600");
													} else { // Activating Tunnel
														this.addTunnelMarker(tunnelX, tunnelY, "#06ff00");
													}
												}
											}
										}
									}
								}
							}
							if (this.regionCityMoveInfoAddonExists == true) {
								this.regionCityMoveInfoAddon.requiredOffenseLevelValue.setValue(this.requiredOffenseLevel);
								webfrontend.gui.region.RegionCityMoveInfo.getInstance().add(this.regionCityMoveInfoAddon.grid);
							}
						} catch (e) {
							console.log(e);
						}
					},

					screenPosFromWorldPosX : function (x) {
						try {
							return this._VisMain.ScreenPosFromWorldPosX(x * this.gridWidth);
						} catch (e) {
							console.log(e);
						}
					},

					screenPosFromWorldPosY : function (y) {
						try {
							return this._VisMain.ScreenPosFromWorldPosY(y * this.gridHeight);
						} catch (e) {
							console.log(e);
						}
					},

					addTunnelMarker : function (tunnelX, tunnelY, color) {
						try {
							var tunnelMarker = new qx.ui.container.Composite(new qx.ui.layout.HBox(5)).set({
									decorator : new qx.ui.decoration.Single(1, "solid", "#000000").set({
										backgroundColor : color
									}),
									width : this.tunnelMarkerWidth,
									height : this.tunnelMarkerHeight,
									opacity : 0.5
								});

							this._App.getDesktop().addAfter(tunnelMarker, this._App.getBackgroundArea(), {
								left : this.screenPosFromWorldPosX(tunnelX),
								top : this.screenPosFromWorldPosY(tunnelY)
							});
							this.tunnelMarkerList.push({
								element : tunnelMarker,
								x : tunnelX,
								y : tunnelY
							});
						} catch (e) {
							console.log(e);
						}
					},

					removeTunnelMarkers : function () {
						try {
							if (this.tunnelMarkerList.length > 0) {
								for (var i = 0; i < this.tunnelMarkerList.length; i++) {
									this._App.getDesktop().remove(this.tunnelMarkerList[i].element);
								}
								this.tunnelMarkerList = [];
							}
						} catch (e) {
							console.log(e);
						}
					},

					getRegionZoomFactorAndSetMarkerSize : function () {
						try {
							this.gridWidth = this._VisMain.get_Region().get_GridWidth();
							this.gridHeight = this._VisMain.get_Region().get_GridHeight();
							this.regionZoomFactor = this._VisMain.get_Region().get_ZoomFactor();
							this.tunnelMarkerWidth = this.regionZoomFactor * this.gridWidth;
							this.tunnelMarkerHeight = this.tunnelMarkerWidth * 0.59;
						} catch (e) {
							console.log(e);
						}
					},

					repositionMarkers : function () {
						try {
							for (var i = 0; i < this.tunnelMarkerList.length; i++) {
								this.tunnelMarkerList[i].element.setDomLeft(this.screenPosFromWorldPosX(this.tunnelMarkerList[i].x));
								this.tunnelMarkerList[i].element.setDomTop(this.screenPosFromWorldPosY(this.tunnelMarkerList[i].y));
							}
						} catch (e) {
							console.log(e);
						}
					},

					resizeMarkers : function () {
						try {
							this.getRegionZoomFactorAndSetMarkerSize();
							for (var i = 0; i < this.tunnelMarkerList.length; i++) {
								this.tunnelMarkerList[i].element.setWidth(this.tunnelMarkerWidth);
								this.tunnelMarkerList[i].element.setHeight(this.tunnelMarkerHeight);
							}
						} catch (e) {
							console.log(e);
						}
					}
				}
			});
		};

		function TATI_checkIfLoaded() {
			try {
				if (typeof qx !== 'undefined' && typeof qx.locale !== 'undefined' && typeof qx.locale.Manager !== 'undefined' && qx.core.Init.getApplication() && ClientLib.Data.MainData.GetInstance().get_Player().get_Faction() !== null) {
					CreateTATI();
					window.TATI.getInstance().initialize();
				} else {
					window.setTimeout(TATI_checkIfLoaded, 1000);
				}
			} catch (e) {
				console.log("TATI_checkIfLoaded: ", e);
			}
		}

		if (/commandandconquer\.com/i.test(document.domain)) {
			window.setTimeout(TATI_checkIfLoaded, 1000);
		}
	}

	try {
		var TATI = document.createElement("script");
		TATI.innerHTML = "(" + TATI_main.toString() + ")();";
		TATI.type = "text/javascript";
		if (/commandandconquer\.com/i.test(document.domain)) {
			document.getElementsByTagName("head")[0].appendChild(TATI);
		}
	} catch (e) {
		console.log("TATI: init error: ", e);
	}
})();



// ==UserScript==
// @name           BaseInfo
// @version        3.2.5
// @author         Dirk Kántor (NurIcke)
// @contributor    leo7044 (helping out for translations)
// @description    Basis Informationen zur Auswertung und Übergabe an die Allianz Befehlshaber. Rechts oberhalb des Spielfensters befindet sich ein neuer Button der das Script aufruft.
// @namespace      http://baseinfo.scriptarea.net/download/show/144825
// @require        http://baseinfo.scriptarea.net/download/update/144825
// @updateURL      http://baseinfo.scriptarea.net/download/update/144825
// @downloadURL    http://baseinfo.scriptarea.net/download/144825.user.js
// @homepage       http://baseinfo.scriptarea.net
// @include        http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @icon           data:image/png;base64,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
// @grant          none
// ==/UserScript==

(function () {
    var BaseInfoMain = function () {
        function BaseInfoCreate()
            {
                try
                    {
						qx.Class.define("BaseInfoLang", {
							type: "singleton",
							extend: qx.core.Object,
							construct: function (language) {
								/*
									Enthaltene Sprachen:
									deutsch (de), englisch=(en), rumänisch (ro), ungarisch (hu), italienisch (it),
									Türkisch (tr), Französisch (fr), Spanisch (es), Portugiesisch (pt), Tschechisch (cs)
									Slowakisch (sk), Ukrainisch (uk), Weissrussland (be), Russisch (ru), Schwedisch (sv),
									Norwegisch (nb), Niederländisch (nl), Kroatisch (hr), Griechisch (el), Finnisch (fi),
									Dänisch (da), Bulgarisch (bg), Arabisch (ar), Polnisch (pl), Indonesisch (id),
								*/
								this.Languages = ['de','en','ro','hu','it','tr','fr','es','pt','cs','sk','uk','be','ru','sv','nb','nl','hr','el','fi','da','bg','ar','pl','id'];
								if (language != null) {
									this.MyLanguage = language;
								}
							},
							members: {
								MyLanguage: "de",
								Languages: null,
								Data: null,

								loadData: function (language) {
									var l = this.Languages.indexOf(language);

									if (l < 0) {
										this.Data = null;
										return;
									}

									this.Data = new Object();

									this.Data["Sprache"] = ['de','en','ro','hu','it','tr','fr','es','pt','cs','sk','uk','be','ru','sv','nb','nl','hr','el','fi','da','bg','ar','pl','id'][l];
									this.Data["Server Sprache"] = ["Server Sprache","Server Language","Limbaj Server","Szerver nyelv","Lingua Server","Sunucu Dil","Langage de Serveur","Idioma del Servidor","Servidor Idioma","Serveru Jazyka","Servera Language","Cервера мову","Cэрвэр Язык","Сервер Язык","Serverspråk","Server Språk","Server Taal","Poslužitelj Jezik","διακομιστή Γλώσσα","Server Kieli","Server Sprog","Сървър Език","الخادم اللغة","Serwer Język","Server Bahasa"][l];
									this.Data["Öffnen"] = ["Öffnen","Open","Deschidere","Nyitás","Apertura","Açılış","Ouverture","Apertura","Abertura","Otevřít","otvor","відкриття","адкрыццё","открытие","öppning","åpning","opening","otvaranje","άνοιγμα","aukko","åbning","отвор","افتتاح","otwarcie","pembukaan"][l];
									this.Data["Basenwerte"] = ["Basenwerte","Base values","Valorile de Bază","Bázis Értékek","Valori di Base","Üs Değerler","Les valeurs de base","los valores de base","valores de base","Základní hodnoty","základné hodnoty","базисні показники","базісныя паказчыкі","базисные показатели","basvärden","verdigrunnlag","Base waarden","Baza vrijednosti","τιμές βάσης","tukikohta arvot","uædle værdier","Базови стойности","قيم قاعدة","wartości bazowe","nilai-nilai dasar"][l];
									this.Data["Mitglieder"] = ["Mitglieder","Members","Membrii","Tagok","Membri","Üyeler","membres","Miembros","membros","Členové","členovia","члени","члены","члены","Medlemmar","medlemmer","leden","članovi","Μέλη","jäsenet","medlemmer","Потребители","الأعضاء","Użytkownicy","anggota"][l];
									this.Data["Scriptinfo"] = ["Scriptinfo","Scripts Info","Informații Scripturi","Scripts Információkat","Informazioni Scripts","Script bilgisi","Scripts d'infos","Información Guión","Informações Script","skriptu Informace","script Informácie","інформація сценарію","інфармацыя сцэнара","информация сценария","Skriptinformation","skriptet Informasjon","script Informatie","Skripta informacije","σενάριο Πληροφορίες","skripti tiedot","script oplysninger","скрипта Информация","معلومات النصي","Informacje script","Script Informasi"][l];
									this.Data["Allgemeine Informationen"] = ["Allgemeine Informationen","General Informations","Informații Generale","Általános Információk","Informazioni Generali","Genel bilgi","Informations Générales","Información General","Informação Geral","Obecná Informace","Všeobecná Informácie","Загальна Інформація","Агульная Інфармацыя","Общая Информация","Allmän Information","Generell Informasjon","Algemene Informatie","Opće Informacije","Γενικές Πληροφορίες","Yleistiedot","generelle oplysninger","Обща Информация","معلومات عامة","Informacje Ogólne","Informasi Umum"][l];
									this.Data["Allgemein"] = ["Allgemein","General","Generale","Általános","General","Genel","Générales","general","geralmente","obecný","obvykle","в цілому","Генеральная","Генеральная","Allmänt","Generelt","algemeen","obično","γενικός","yleinen","generelt","общо","عام","ogólny","umum"][l];
									this.Data["Gesamte Produktion"] = ["Gesamte Produktion","Total Production","Producția Totală de","Összes Termelés","La Produzione Totale","Toplam üretim","La production totale","La producción total","A produção total","celková produkce","Celková produkcia","Загальний обсяг виробництва","агульны аб'ём вытворчасці","Общий объем производства","Den sammanlagda produktionen","totale produksjonen","De totale productie","Ukupna proizvodnja","Συνολική παραγωγή","kokonaistuotanto","samlet produktion","Общото производство","إجمالي الإنتاج","Całkowita produkcja","produksi total"][l];
									this.Data["Erste Offensive"] = ["Erste Offensive","First Offense","Primul Ofensivă","Első Támadó","Prima Attaccante","Birinci Ofansif","Première Offensive","primero Ofensivo","primeiro Ofensivo","První Ofenzivní","prvý Ofenzívny","По-перше Образливий","Па-першае абразлівыя","Во-первых Оскорбительный","första offensiv","First Offensive","eerste Offensive","Prvo Uvredljiva","Πρώτα Επιθετικά","First Hyökkäävä","First Offensive","Първо Offensive","أول هجوم","pierwszy Ofensywny","pertama Serangan"][l];
									this.Data["Zweite Offensive"] = ["Zweite Offensive","Second Offense","Al Doilea Ofensivă","Második Támadó","Secondo Attaccante","Ikinci bir Ofansif","Deuxième Offensive","Segundo Ofensivo","segundo Ofensivo","druhý Ofenzivní","druhý Ofenzívny","По-друге Образливий","Па-другое абразлівыя","Во-вторых Оскорбительный","andra Offensive","Second Offensive","tweede Offensive","Drugo Uvredljiva","δεύτερη Επιθετικά","toinen Hyökkäävä","Second Offensive","Второ Offensive","الهجومية الثانية","drugi Ofensywny","kedua Serangan"][l];
									this.Data["Werte übertragen"] = ["Werte übertragen","Transfer Values","Valorile de Transfer","Transfer Értékek","Valori di Trasferimento","transferi değerler","Les valeurs de transfert","valores de Transferencia","valores de transferência","hodnoty Přenos","hodnoty Prenos","переносити вартість","пераносіць кошт","переносить стоимость","överföringsvärden","overføre verdier","Transfer waarden","vrijednosti prijenos","τιμές μεταβίβασης","siirtoarvoja","Overfør værdier","прехвърлят","القيم نقل","wartości transferowe","nilai transfer"][l];
									this.Data["Weltkarte"] = ["Weltkarte","Worldmap","Hartă Lumii","Térkép a Világ","Mappamondo","Dünyada Haritası","Carte du Monde","mapa del mundo","mapa do mundo","Mapa světa","mapa sveta","Карта світу","карта свету","Карта мира","Karta över världen","verdenskart","kaart van de wereld","karta svijeta","Χάρτης του κόσμου","Maailmankartta","kort over verden","Карта на света","خريطة العالم","Mapa świata","peta dunia"][l];
									this.Data["Allianz Rolle"] = ["Allianz Rolle","Alliance Role","Rol Alianță","Szövetség Szerepe","Ruolo Alleanza","İttifak rolü","rôle de l'Alliance","papel Alianza","papel Alliance","Alliance role","alliance role","Альянс роль","альянс ролю","Альянс роль","Alliance roll","Alliance rolle","Alliance rol","Savez uloga","ρόλος της Συμμαχίας","Alliance rooli","alliance rolle","Alliance роля","دور التحالف","rola sojuszu","peran aliansi"][l];
									this.Data["Spielername"] = ["Spielername","Player Name","Nume Jucător","Játékos Neve","Nome Giocatore","Oyuncu Adı","Nom du joueur","Jugadores Nombre","Nome Jogadores","hráči Jméno","hráči Meno","Гравці Ім'я","гульцы Імя","Игроки Имя","spelare Namn","spillere Navn","spelers Naam","igrači Ime","Παίκτες Όνομα","Pelaajat Nimi","spillere Navn","Играчи Име","اللاعبين الاسم","Gracze Nazwa","pemain Nama"][l];
									this.Data["Spielerklasse"] = ["Spielerklasse","Player Class","Clasa Jucător","Töredék","Fazione","Grup","Faction","Clase jugador","Classe jogador","hráč Class","hráč Class","клас гравця","клас гульца","Класс игрока","Spelar klass","spiller Class","Player Class","igrač klase","παίκτης Class","Player Class","Spiller Class","Player Class","فئة اللاعب","Klasa graczem","pemain Kelas"][l];
									this.Data["Aktuelle Uhrzeit"] = ["Aktuelle Uhrzeit","Current Time","Ora curenta","Idő","Ora Attuale","şimdiki zaman","Date actuelle","Tiempo Actual","Tempo Atual","Aktuální čas","aktuálny čas","поточне Час","бягучае Час","Текущее Время","Aktuell tid","Nåværende Tid","huidige Tijd","Trenutno vrijeme","Τρέχουσα Ώρα","Nykyinen aika","Aktuel tid","Current Time","الوقت الحالي","Obecny Czas","Waktu Saat Ini"][l];
									this.Data["Rang"] = ["Rang","Rank","Rang","Helyezés","rango","Derece","Classement","rango","categoria","hodnost","hodnosť","Ранг","ранг","ранг","Placering","Rank","rang","čin","τάξη","arvo","Rank","ранг","مرتبة","ranga","pangkat"][l];
									this.Data["Maximale KP"] = ["Maximale KP","Maximal CP","Puncte de Comando Maxime","Maximális Parancsnoki Pont","Comando il Massimo dei Punti","Maksimum Komutanlığı Puan","Points de Commandement maximum","CP máximo","CP máxima","Maximální CP","maximálna CP","Максимальна CP","максімальная CP","Максимальная CP","maximal CP","maksimal CP","maximale CP","maksimalna CP","μέγιστη CP","Suurin CP","maksimal CP","Максимална CP","الحد الأقصى CP","Maksymalna CP","maksimum CP"][l];
									this.Data["Maximale Repzeit"] = ["Maximale Repzeit","Maximal Reptime","Timp Maxim de Reparație","Maximális Javítási Idő","Tempo Massimo di Riparazione","Maksimum onarım süresi","Temps maximum de réparation","Repzeit máximo","Repzeit máxima","Maximální Repzeit","maximálna Repzeit","Максимальна Repzeit","максімальная Repzeit","Максимальная Repzeit","maximal Repzeit","maksimal Repzeit","maximale Repzeit","maksimalna Repzeit","μέγιστη Repzeit","Suurin Repzeit","maksimal Repzeit","Максимална Repzeit","أقصى Repzeit","Maksymalna Repzeit","Repzeit maksimum"][l];
									this.Data["Stunden"] = ["Stunden","Hours","Ore","Óra","Orario","Saatleri","Heures","horas","horas","hodiny","hodiny","годин","гадзін","часов","timmar","timer","Hours","Radno vrijeme","ώρες","tuntia","Timer","Часове","ساعات","godziny","jam"][l];
									this.Data["Basenanzahl"] = ["Basenanzahl","Basecount","Numarul de Bază","Szám Bázisok","Numero di Base","Üs Numarası","Nombre de base","Número Base","Número de base","Základní Number","základné Number","базовий номер","базавы нумар","Базовый номер","basnummer","Base Number","Base Number","baza broj","Αριθμός βάση","Base Number","Base Number","Base Number","عدد قاعدة","Ilość bazowa","Jumlah dasar"][l];
									this.Data["Anzahl Offensiv Basen"] = ["Anzahl Offensiv Basen","Offense Bases Count","Baze număr Ofensivă","Szám Sértő Bázisok","Basi numero Attaccante","Numara saldırgan Üs","Nombre de bases offensives","Bases Número ofensivas","Número bases ofensivas","Počet ofenzivní základny","Počet ofenzívnej základne","Кількість образливі основи","Колькасць абразлівыя асновы","Количество оскорбительные основы","Antal offensiva baser","Antall offensive baser","Aantal offensief bases","Broj uvredljive baze","Βάσεις Αριθμός προσβλητικό","Numero loukkaavaa emäkset","Nummer offensive baser","Номер обидни бази","عدد القواعد هجوم","Podstawy Liczba obraźliwe","Basis Nomor ofensif"][l];
									this.Data["Support Gebäude Level Ø"] = ["Support Gebäude Level Ø","Support Building Level Ø","Suport de Constructii Nivel Ø","Támogatás Építési Szint Ø","Supporto Livello Edificio Ø","Destek Bina Seviye Ø","Bâtiment Niveau de soutien","Soporte Nivel Edificio Ø","Suporte Nível Edifício Ø","Podpora budova úroveň Ø","Podpora budova úroveň Ø","Підтримка Будівництво Ø Рівень","Падтрымка Будаўніцтва Ø Узровень","Поддержка Строительство Ø Уровень","Support Building Level Ø","Support Bygning Nivå Ø","Ondersteuning Building Level Ø","Podrška Građevinska Razina Ø","Υποστήριξη Κτίριο Επίπεδο Ø","Tuki Building Level Ø","Support Building Level Ø","Подкрепа Building Level Ø","دعم بناء مستوى Ø","Pomoc budynek Poziom Ø","Dukungan Building Tingkat Ø"][l];
									this.Data["VE Ø aller Basen"] = ["VE Ø aller Basen","DF Ø all Bases","Ø Unitate de Apărare Toate Bazele","Védelem Létrehozása Ø Összes Bázisok","Stazioni di difesa Ø di tutte le basi","Savunma Tesis Ø bütün Üs","Fonds de défense Ø de toutes les bases","DF Ø todas las bases","DF Ø todas as bases","DF Ø Všechny základny","DF Ø Všetky základne","DF Ø всі підстави","DF Ø усе падставы","DF Ø все основания","DF Ø alla baser","DF Ø alle baser","DF Ø alle bases","DF Ø Svi baze","DF Ø όλες τις βάσεις","DF Ø kaikki alustat","DF Ø alle baser","DF Ø всички бази","DF Ø كل القواعد","DF Ø wszystkich baz","DF Ø semua basis"][l];
									this.Data["Def Ø aller Basen"] = ["Def Ø aller Basen","Def Ø all Bases","Ø Unitate de Def Toate Bazele","Def Ø Összes Bázisok","Def Ø di tutte le basi","Def Ø bütün Üs","Def Ø de toutes les bases","Def Ø todas las bases","Def Ø todas as bases","Def Ø Všechny základny","Def Ø Všetky základne","Def Ø всі підстави","Def Ø усе падставы","Def Ø все основания","Def Ø alla baser","Def Ø alle baser","Def Ø alle bases","Def Ø Svi baze","Def Ø όλες τις βάσεις","Def Ø kaikki alustat","Def Ø alle baser","Def Ø всички бази","Def Ø كل القواعد","Def Ø wszystkich baz","Def Ø semua basis"][l];
									this.Data["Kristall"] = ["Kristall","Crystal","Cristal","Kristály","Cristallo","Kristal","Cristaux","cristal","cristal","krystal","kryštál","кристал","крышталь","кристалл","kristall","krystall","kristal","kristal","κρύσταλλο","kristalli","krystal","кристал","بلور","kryształ","kristal"][l];
									this.Data["Tiberium"] = ["Tiberium","Tiberium","Tiberium","Tibérium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","Tiberium","tiberium من","tyberium","Tiberium"][l];
									this.Data["Strom"] = ["Strom","Power","Putere","Áram","Energia","Enerji","Énergie","corriente","atual","proud","prúd","струм","ток","ток","Aktuell","Nåværende","stroom","struja","ρεύμα","nykyinen","nuværende","ток","تيار","prąd","arus"][l];
									this.Data["Credit"] = ["Credit","Credit","Credit","Kredit","Crediti","Kredi","Crédit","crédito","crédito","úvěr","úver","кредит","крэдыт","кредит","kredit","Credit","krediet","kredit","πίστωση","luotto","Credit","кредит","ائتمان","kredyt","kredit"][l];									
									this.Data["Kristall Produktion"] = ["Kristall Produktion","Crystal Production","Producția de Cristal","Összes Kristály Termelés","Produzione del Cristallo","Toplam Kristal üretimi","cristaux de production","la producción de cristal","produção de cristal","výroba Crystal","výroba Crystal","кристал виробництво","крышталь вытворчасць","Кристалл производство","kristallproduktion","Crystal produksjon","Crystal productie","Crystal proizvodnja","κρυστάλλινα παραγωγής","Crystal tuotanto","krystal produktion","производство Crystal","إنتاج الكريستال","produkcji kryształu","produksi kristal"][l];
									this.Data["Tiberium Produktion"] = ["Tiberium Produktion","Tiberium Production","Producția de Tiberium","Összes Tibérium Termelés","Produzione del Tiberium","Toplam Tiberium üretimi","Tiberium de production","producción Tiberium","produção Tiberium","výroba Tiberium","výroba Tiberium","виробництво Tiberium","вытворчасць Tiberium","производство Tiberium","Tiberium produktion","Tiberium produksjon","Tiberium productie","proizvodnja Tiberium","παραγωγή Tiberium","Tiberium tuotanto","Tiberium produktion","производство Tiberium","إنتاج tiberium من","produkcja tyberium","produksi Tiberium"][l];
									this.Data["Strom Produktion"] = ["Strom Produktion","Power Production","Producția de Putere","Összes Áram Termelés","Produzione del Energia","Toplam enerji üretimi","Énergie de production","La producción actual","A produção atual","Aktuální produkce","aktuálnej produkcie","продукція, що випускається","выпускаемая прадукцыя","Выпускаемая продукция","Aktuell produktion","dagens produksjon","De huidige productie","Trenutna proizvodnja","Η τρέχουσα παραγωγή","Nykyinen tuotanto","nuværende produktion","текущото производство","الإنتاج الحالي","Obecna produkcja","produksi saat ini"][l];
									this.Data["Credit Produktion"] = ["Credit Produktion","Credit Production","Producția de Credit","Összes Kredit Termelés","Produzione del Crediti","Toplam kredi üretimi","Crédit de production","la producción de Crédito","produção de Crédito","Credit výroba","credit výroba","Кредитна виробництво","крэдытная вытворчасць","Кредитная производство","kredit produktion","Credit produksjon","credit productie","Kreditni proizvodnja","Πιστωτικές παραγωγής","luotto tuotanto","Credit produktion","Credit производство","إنتاج الائتمان","produkcja kredytowej","produksi kredit"][l];									
									this.Data["Gesamte Kristall Produktion"] = ["Gesamte Kristall Produktion","Total Crystal Production","Producția Totală de Cristal","Összes Kristály Termelés","Produzione del Cristallo totale","Toplam Kristal üretimi","cristaux de production","La producción total de cristal","A produção total de cristal","Celková produkce krystal","Celková produkcia kryštál","Загальний обсяг виробництва кристалів","Агульны аб'ём вытворчасці крышталяў","Общий объем производства кристаллов","Totalt kristallproduktion","Total krystall produksjon","Totaal kristal productie","Ukupna proizvodnja kristala","Συνολική παραγωγή κρυστάλλων","Total kristalli tuotanto","Samlede krystal produktion","Общото производство на кристална","إجمالي إنتاج الكريستال","Całkowita produkcja kryształów","Total produksi kristal"][l];
									this.Data["Gesamte Tiberium Produktion"] = ["Gesamte Tiberium Produktion","Total Tiberium Production","Producția Totală de Tiberium","Összes Tibérium Termelés","Produzione del Tiberium totale","Toplam Tiberium üretimi","Tiberium de production","La producción total de Tiberium","A produção total de Tiberium","Celková výroba Tiberium","Celková výroba Tiberium","Загальний обсяг виробництва Tiberium","Агульны аб'ём вытворчасці Tiberium","Общий объем производства Tiberium","Totalt Tiberium produktion","Total Tiberium produksjon","Totaal Tiberium productie","Ukupno Tiberium proizvodnja","Συνολική παραγωγή Tiberium","Total Tiberium tuotanto","Total Tiberium produktion","Общото производство на Tiberium","إنتاج tiberium من مجموع","Całkowita produkcja tyberium","Total produksi Tiberium"][l];
									this.Data["Gesamte Strom Produktion"] = ["Gesamte Strom Produktion","Total Power Production","Producția Totală de Putere","Összes Áram Termelés","Produzione del Energia totale","Toplam enerji üretimi","Énergie de production","La producción total de electricidad","A produção total de electricidade","Celková výroba elektrické energie","Celková výroba elektrickej energie","Загальний обсяг виробництва електроенергії","Агульны аб'ём вытворчасці электраэнергіі","Общий объем производства электроэнергии","Total elproduktion","Total produksjon av elektrisitet","Totale elektriciteitsproductie","Ukupna proizvodnja električne energije","Η συνολική παραγωγή ηλεκτρικής ενέργειας","Koko sähköntuotannosta","Samlet elproduktion","Общо количество произведена електроенергия","إجمالي إنتاج الكهرباء","Całkowita produkcja energii elektrycznej","Total produksi listrik"][l];
									this.Data["Gesamte Credit Produktion"] = ["Gesamte Credit Produktion","Total Credit Production","Producția Totală de Credit","Összes Kredit Termelés","Produzione del Crediti totale","Toplam kredi üretimi","Crédit de production","La producción total de crédito","Produção total de crédito","Celkový kredit výroba","Celkový kredit výroba","Загальний обсяг виробництва кредитні","Агульны аб'ём вытворчасці крэдытныя","Общий объем производства кредитные","Total poäng produktion","Total kreditt produksjon","Credit totaal productie","Ukupna kreditna proizvodnja","Η συνολική πιστωτική παραγωγής","Kokonaispisteet tuotanto","Total credit produktion","Общо кредити на производството","إجمالي الإنتاج الائتمان","Całkowita produkcja kredytowej","Produksi total kredit"][l];
									this.Data["Basis Name"] = ["Basis Name","Base Name","Numele de Bază","Bázis Név","Nome di Base","Üs isim","nom de la base","basename","basename","basename","basename","Basename","Basename","Basename","grundnamn","basename","basename","basename","basename","basename","basename","Basename","Basename","basename","basename"][l];
									this.Data["Basis Level"] = ["Basis Level","Base Level","Nivelul de Bază","Bázis Szint","Livello Base","Üs seviye","Niveau de base","Nivel Básico","Nível Básico","Základní Úroveň","základné Úroveň","початковий Рівень","пачатковы Узровень","Начальный Уровень","Grundläggande nivå","grunnleggende nivå","Basic Level","Osnovna razina","Βασικό Επίπεδο","Perustaso","grundlæggende Level","основно ниво","مستوى الأساسي","Poziom Podstawowy","Tingkat Dasar"][l];
									this.Data["Offensiv Level"] = ["Offensiv Level","Offense Level","Nivelul Ofensivă","Támadó Szint","Livello Attaccante","Saldırgan Seviye","Niveau offensive","Nivel Ofensivo","Nível ofensivo","Ofenzivní Level","ofenzívny Level","наступ Рівень","наступ Узровень","Наступление Уровень","offensiv Nivå","offensive nivå","Offensive Level","Uvredljiva Razina","Επιθετικά Επίπεδο","Hyökkäävä Level","offensiv Level","Offensive Level","مستوى الهجومية","Ofensywny Level","Tingkat Serangan"][l];
									this.Data["Defensiv Level"] = ["Defensiv Level","Defense Level","Nivelul Defensiv","Védelmi Szint","Livello Difensiva","Defansif Seviye","Niveau défensif","Nivel Defensivo","Nível defensivo","defenzivní Level","defenzívne Level","оборонна Рівень","абарончая Узровень","Оборонительная Уровень","defensiv Nivå","defensive nivå","defensieve Level","Povučen Razina","αμυντικά Επίπεδο","puolustava Level","defensiv Level","Отбранителна Level","المستوى الدفاعي","Defensywny Level","Tingkat defensif"][l];
									this.Data["Strom Produktion"] = ["Strom Produktion","Power Produktion","Producția de Energie","Áram Termelés","Produzione di Energia","enerji üretimi","la production d'énergie","La producción actual","A produção atual","Aktuální produkce","aktuálnej produkcie","продукція, що випускається","выпускаемая прадукцыя","Выпускаемая продукция","Aktuell produktion","dagens produksjon","De huidige productie","Trenutna proizvodnja","Η τρέχουσα παραγωγή","Nykyinen tuotanto","nuværende produktion","текущото производство","الإنتاج الحالي","Obecna produkcja","produksi saat ini"][l];
									this.Data["Fußtruppen Reparaturzeit"] = ["Fußtruppen Reparaturzeit","Infantry Repairtime","Timp de Reparații de Infanterie","Gyalogos Javítási Idő","Tempo di riparazione Fanteria","Piyade onarım süresi","Temps de réparation d'infanterie","El tiempo de reparación de Infantería","Tempo de reparação de infantaria","Pěchota doba opravy","Pechota doba opravy","Час піхотної ремонт","Час пяхотнай рамонт","Время пехотной ремонт","Infanteri reparationstiden","Infantry reparasjonstiden","Infanterie reparatietijd","Vrijeme Pješačko popravak","Χρόνος επισκευής Πεζικού","Jalkaväki korjausaika","Infanteri reparationstid","Време за ремонт пехотна","وقت الإصلاح المشاة","Czas naprawy Piechota","Waktu perbaikan Infanteri"][l];
									this.Data["Fahrzeug Reparaturzeit"] = ["Fahrzeug Reparaturzeit","Vehicle Repairtime","Timp de Reparații de Vehicul","Jármű Javítási Idő","Tempo di riparazione Veicolo","Araç onarım süresi","Temps de réparation du véhicule","El tiempo de reparación de vehículos","Tempo de reparação de veículos","Opravy vozidel čas","Opravy vozidiel čas","Час ремонту автомобіля","Час рамонту аўтамабіля","Время ремонта автомобиля","Fordonsreparationstiden","Vehicle reparasjonstiden","Voertuig reparatietijd","Vrijeme za popravak vozila","Χρόνος επισκευής του οχήματος","Ajoneuvojen korjausaika","Køretøj reparationstid","Време за ремонт на превозни средства","الوقت إصلاح المركبات","Czas naprawy pojazdu","Waktu perbaikan kendaraan"][l];
									this.Data["Flugzeug Reparaturzeit"] = ["Flugzeug Reparaturzeit","Aircraft Repairtime","Timp de Reparații de Avioane","Repülőgép Javítási Idő","Tempo di riparazione Aeromobile","Uçak onarım süresi","Temps de réparation d'aéronefs","El tiempo de reparación de aeronaves","Tempo de reparação de aeronaves","Oprava letadla čas","Oprava lietadla čas","Час ремонту літака","Час рамонту самалёта","Время ремонта самолета","Flygplan reparationstiden","Aircraft reparasjonstiden","Vliegtuigen reparatietijd","Vrijeme popravak zrakoplova","Χρόνος επισκευής των αεροσκαφών","Lentokoneiden korjaus- aika","Aircraft reparationstid","Време за ремонт на въздухоплавателни средства","الوقت إصلاح الطائرات","Samoloty czas naprawy","Waktu perbaikan Pesawat"][l];
									this.Data["Spieler Produktion"] = ["Spieler Produktion","Players Production","Jucatori de Producție","A játékosok Termelés","Giocatori di produzione","Oyuncular Üretim","Les joueurs de production","Jugadores Producción","jogadores de Produção","hráči Production","hráči Production","Гравці Виробництво","гульцы Вытворчасць","Игроки Производство","spelare Produktion","spillere Produksjon","spelers Production","igrači Proizvodnja","Παίκτες παραγωγής","Pelaajat Tuotanto","","Играчите Производство","إنتاجspillere Produktion لاعبين","Gracze Produkcja","Produksi pemain"][l];
									this.Data["Gesamte Produktion"] = ["Gesamte Produktion","Total Production","Producția totală","Összes termelés","La produzione totale","Toplam Üretim","La production totale","La producción total","A produção total","celková produkce","Celková produkcia","Загальний обсяг виробництва","агульны аб'ём вытворчасці","Общий объем производства","Total produktion","Total produksjon","De totale productie","Ukupna proizvodnja","Συνολική παραγωγή","kokonaistuotanto","samlet produktion","Общото производство","إجمالي الإنتاج","Całkowita produkcja","total produksi"][l];
									this.Data["aller Basen"] = ["aller Basen","all bases","toate bazele","minden bázisok","tutte le basi","tüm üsleri","toutes les bases","todas las bases","todas as bases","všechny základny","všetky základne","всі підстави","усе падставы","все основания","alla baser","alle baser","alle bases","sve baze","όλες οι βάσεις","kaikki alustat","alle baser","всички бази","كل القواعد","wszystkie zasady","semua basis"][l];
									this.Data["inklusive POI Bonus"] = ["inklusive POI Bonus","inclusiv Bonus POI","inclusiv de POI","beleértve POI Bonus","compresi POI Bonus","dahil POI Bonus","y compris POI Bonus","incluyendo PDI Bono","incluindo POI Bonus","včetně POI Bonus","vrátane POI Bonus","в тому числі об'єкти до досвіду","у тым ліку аб'екты да вопыту","в том числе объекты к опыту","inklusive POI Bonus","inkludert POI Bonus","waaronder POI Bonus","uključujući POI bonus","συμπεριλαμβανομένων των POI Μπόνους","mukaan lukien KP Bonus","herunder POI Bonus","включително POI Bonus","بما في ذلك مكافأة POI","w tym Bonus POI","termasuk Bonus POI"][l];
									this.Data["Name"] = ["Name","Name","Numele","Név","Nome","Isim","Nom","nombre","nome","název","Názov","ім'я","мя","имя","namn","navn","naam","naziv","όνομα","nimi","navn","име","اسم","nazwa","nama"][l];
									this.Data["Version"] = ["Version","Version","Versiune","Változat","Versione","Versiyon","Version","versión","versão","verze","verzia","версія","версія","версия","version","versjon","versie","verzija","εκδοχή","versio","Version","версия","نسخة","wersja","versi"][l];
									this.Data["Ersteller"] = ["Ersteller","Creator","Creator","Teremtő","Creatore","Yaratıcı","Créateur","creador","criador","tvůrce","tvorca","творець","стваральнік","создатель","Skaparen","Creator","Schepper","tvorac","δημιουργός","Luoja","skaberen","създател","الخالق","twórca","pencipta"][l];
									this.Data["Webseite"] = ["Webseite","Homepage","Pagina de start","Honlap","Homepage","Anasayfa","Page d'accueil","sitio web","site","webové stránky","webové stránky","сайт","сайт","сайт","Webbplats","nettsted","website","website","δικτυακός τόπος","verkkosivusto","websted","уебсайт","الموقع","witryna internetowa","situs web"][l];
									this.Data["E-Mail"] = ["E-Mail","E-Mail","E-Mail","E-Mail","E-Mail","E-Mail","E-Mail","E-mail","E-mail","E-mail","E-mail","Електронна пошта","Электронная пошта","Электронная почта","E-post","E-post","E-mail","E-mail","E-mail","E-mail","E-mail","Е-поща","البريد الإلكتروني","E-mail","E-mail"][l];
									this.Data["Mitglieder Auflistung"] = ["Mitglieder Auflistung","Members Listing","Lista de Membrii","Tagok Listája","Lista Membri","Üye Listesini","Liste des Membres","lista de Miembros","lista de membros","seznam členů","zoznam členov","користувачі","карыстальнікі","Пользователи","Medlemmar listan","medlemmer liste","ledenlijst","popis članova","Λίστα Μελών","jäsenluettelo","medlemmer liste","Списък с членовете","قائمة الأعضاء","lista członków","daftar anggota"][l];
									this.Data["Nur für OBH's sichtbar"] = ["Nur für OBH's sichtbar","Visible only for CiC","Vizibil doar pentru Commander","Csak akkor látható, a Commander","Visibile solo per il Comandante","Sadece Komutanı görebilir","Visible uniquement pour le commandant","Visible sólo para CiC","Visível apenas para CiC","Viditelné pouze pro CiC","Viditeľné len pre CiC","Відомий тільки для CiC","Бачны толькі для CiC","Видимый только для CiC","Synlig endast för CiC","Bare synlig for CiC","Alleen zichtbaar voor CiC","Vidljivo samo za CiC","Ορατό μόνο για CiC","Näkyvä ainoastaan CiC","Kun synlig for CiC","Видим само за CiC","تظهر فقط لفي CiC","Widoczne tylko dla CiC","Terlihat hanya untuk CiC dunia"][l];
									this.Data["Mitglieder Anpassung"] = ["Mitglieder Anpassung","Members Adaptation","Adaptarea Membrilor","Tagok Adaptáció","Membri Adattamento","Üye Adaptasyon","Membres Adaptation","Miembros adaptación","adaptação membros","Členové adaptace","členovia adaptácia","користувачі адаптації","карыстальнікі адаптацыі","Пользователи адаптации","medlemmar anpassning","medlemmer tilpasning","aanpassing leden","Članovi prilagodba","προσαρμογή Μέλη","jäsenet sopeutuminen","medlemmer tilpasning","членове адаптация","التكيف الأعضاء","adaptacja członków","anggota adaptasi"][l];
									this.Data["Mitgliederliste erneuern"] = ["Mitgliederliste erneuern","Renew Memberlist","Reînnoi Membri","Megújítani Taglista","Rinnovare Iscritti","Üye Listesini yenilemek","Renouveler Membres","Renovar Miembros","Renove Membros","obnovit uživatelů","obnoviť užívateľov","замінити Користувачі","замяніць Карыстальнікі","Заменить Пользователи","förnya Medlems","Forny Medlems","Renew Gebruikerslijst","obnovite Članstvo","Ανανέωση Μελών","Uudista Ohje","forny Grupper","Renew Потребители","تجديد الاعضاء","Odnów Użytkownicy Użytkownicy","Renew Anggota"][l];
									this.Data["Du mußt auf der BaseInfo-Seite eingeloggt sein"] = ["Du mußt auf der BaseInfo-Seite eingeloggt sein","You need to log in on the BaseInfo Page","Trebuie să vă conectați de pe pagina Informații de Bază","Be kell jelentkezni a Base Információs oldal","Devi effettuare il login nella pagina Informazioni di base","Base Bilgileri sayfasında giriş yapmanız gerekiyor","Vous devez vous connecter sur la Page d'information de Base","¡Tienes que entrar en la página de Información de Base","Você precisa fazer o login na página Information Base","Musíte se přihlásit na základní stránce Informace","Musíte sa prihlásiť na základnej stránke Informácie","Ви повинні увійти на сторінці інформаційної бази","Вы павінны ўвайсці на старонцы інфармацыйнай базы","Вы должны войти на странице информационной базы","Du måste logga in på basera informationssidan","Du må logge inn på Base informasjonssiden","Je moet inloggen op de Basis Informatie pagina","Morate se prijaviti na stranicu baze Informacijskog","Θα πρέπει να συνδεθείτε στην σελίδα Βάση Πληροφοριών","Sinun täytyy kirjautua sisään Base Infosivu","Du er nødt til at logge ind på Base Infoside","Необходимо е да влезете в по въпросите на информационното страницата Base","تحتاج إلى تسجيل الدخول على الصفحة قاعدة المعلومات","Musisz zalogować się na stronie Bazy Informacji","Anda harus login pada halaman Information Base"][l];
									this.Data["Account Erstellung"] = ["Account Erstellung","account creation","crearea de conturi","Fiók létrehozása","creazione di un account","Hesap oluşturma","création de compte","La creación de cuentas","A criação de contas","vytvoření účtu","vytvorenie účtu","створення облікового запису","стварэнне ўліковага запісу","создание учетной записи","skapa konto","kontoopprettelse","aanmaken van een account","Izrada računa","δημιουργία λογαριασμού","tilin luominen","kontooprettelse","създаване на профил","إنشاء حساب","utworzenie konta","pembuatan akun"][l];
								},
								get: function (ident) {
									return this.gt(ident);
								},
								gt: function (ident) {
									if (!this.Data || !this.Data[ident]) {
										return ident;
									}
									return this.Data[ident];
								}
							}
						}),

                        qx.Class.define("BaseInfo", {
                            type: "singleton",
                            extend: qx.core.Object,
                            construct: function () {
                                window.addEventListener("click", this.onClick, false);
                                window.addEventListener("keyup", this.onKey, false);
                                window.addEventListener("mouseover", this.onMouseOver, false);
                                BIVERSION = '3.2.5';
                                BIAUTHOR = 'Dirk Kántor (NurIcke)';
                                BICLASS = 'BaseInfo';
                                BIHOMEPAGE = 'http://baseinfo.scriptarea.net';
                                BICONTACT = 'BaseInfo@scriptarea.net';
                                BIUSERLANGUAGE = qx.locale.Manager.getInstance().getLocale().split("_")[0];
								BIIMAGE = 'data:image/png;base64,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';
								BIIMAGESMALL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAB3RJTUUH3QMQDho5kHvXxwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAARnQU1BAACxjwv8YQUAAAQ+SURBVHjarVRbTFxVFF33MQ9eAzNQWmmFgRKgUBIYWmkxov0g0Vh/bKImxvghavnQGLQxMSZNjTF8IIlJNTHaBORDPxoSP0icKjFUISRCYnF4KCIdBMprZu4M987jvo77jAPWqEk/nNx1z51z9l1n7b3XucD//BP+a2FkZMTn9XqfCwQCnaIo+XmsbVubc3NzN6empr7o7e29fc+7TExMPK7EE2OqqrFkMkVQCFFCkqlakinxvR+CwRvd96RwenrmSkNj01uCvitLmVlI0g5EIUMrDMwWYdkeWHILWH4VNtbWPrt27dOLfX19qX8lnJycfLMl0NZn74bgio9A9pUCkoe4GGCbFGERTNjKFjLSaeD+x7C4uPhJoLX1pX0Ocf9hbGzsgcaTzZfNzUU4Z69Alp2AQsp+3wKW1oGdYsB1DkwrI8X5cC9/DHNxFDW1tS9STZ/6B2Fdff1rtpHME75+Hw6LprfjwK+bhB0iXIUt+GF5G2EpPmA5DEGuhmv0dbDdMI5UHH27p6fHzXkkfgsGg5XlR+77UArPyp4v34BwrJ7UGUA0CahKFixqgW1uQAgFIe4lAF2HFPoeKUcDHM1nDpV5vd8NDQ39llXIGDvjLihwsdAtiCpNrISB3QgRrtJaEYzOS8AzvdQWA9LGOBChTZbJNSReXgiBmZqoKPEA55L5TdO0wzaYIKlJ3kzgDtWsxAArrUHSVwNZcoLluWE4ZDhsIlLzqCQb2ZbK69NQYxGIsqP0oIa2bcOyKCWR2PJ476kZ6QWyRwLO6DcQyw/D0E2IkZ+AYnKIuUoxtHk+DS4ZNrmATP9XU9Lp1B1LN5lRUkidpIlC2rrUA9kxDuHEw9DLqqCvhSCz94CjtFauAz4hG6tXnaL4EuiZdOSAsKWldSqp7Wl6dRNsXoQCmvaQWrKgUdkB2zLhVGeAmhdgeSgFajS8QjabVHUDZSeT69nMAWFzc/Oalti7blXUIXryIuURA5wWbFrLFLdkfZ1xeJBKUWdBqTq4OgWpQ01InTiLpJq4FYvFvv2bD5ltXVW1VCLR8Tz2HI+AoiCkqVwbPyO9NAHn8jiKtodJUhHVKA6DeLcfugzd7UVCUd4lH1p3Hz0+suHh4VfbOx78QIyvwzv5EXza5386ldeVN4tL1uiyT2On7RJMfztuL/1ytaur65V9YVIOTl65lZWVhRJPkV5xvPGsUdspJfLbYTCqq1UN3WyA6noUkWPPQjn1MtLFlfhxenp4YGDgnXA4zCRJEsnPTMjtXSAIQgn95+V2d3d3nzt//omn/cdr62WXQxTtNPcWmOyGSQdoiz4zN4JfXe/v7x+leIXeVehdhevnhIWckFBGKCdwg/JzWXDhwpN1gUCb3+srLRIFUUgklOT8/Pza4ODgPCfijiNECduE3X1Cd06lh5shN+bn5lmucsg9C3eBfySpNaCDjVhuTP0BKVPnFst9kFQAAAAASUVORK5CYII=';
								BIIMAGESMALL16 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH3QQUCxMm9zjo1wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAARnQU1BAACxjwv8YQUAAALmSURBVHjatVJbSBRRGP5mdlfX3fXutomLUSqa0kMJpiBGkhCEm/bS5TkMWkh76E2MnkJMKsgu+CZhkiViZRIIUhhRkJC6XnLXS4667uruOrOXmZ3Z05lVl3rqqYF/5sw5//d95//+H/gfz/uRkbMbbu+AEBSn+aA44/b43g0ODl38J7ClpVk//9PZKQiCL7zzi0T4eRqzJLyzRIKCX5h2zPXcbmvL/hPD7C+6uh6l1Nsa35pTmVpN4AO0hjAYNgbEZBASgxLWQzHWgmfMjmdPHp9ubW3d/Itgdm7+oTXbcCPJ0QndwXRANgAhGUgvBtKoqH8cytoMIgW3sCoah0qKCs+rOHZXvavEkmtpImM90G3PAss+YHIF+D6FmJQPWVsG4nBDE2ShfdMBS4bJ1vuiry5BUF1TUx/d5PTJo/eBjQjgXAU4F4ihCNjaAvOyHczCIrDog27sOcj6MkrKShsTBGFRKmWEEFjOA6iJniVEjYcgHq2DXHUGilYD+Fy0zlmw29QW1ySislyoYrXqS1FkTUylMtKQtmj9URBlChqTHqIQgF78RDM5IEpNTVMBUYqJI3YJNAzrknQsiJn+pItADget9QTCecVUbRSavM+ALplK60GiFG8tRlQSuUQJG2vcsGTKJHzpTUAvAbQBkvUyFFYHhnFDzLpAlSlxRgCRojqEMy2QRXE4QdDQ0PA1FIq89lddQji5AqA+KnwQEjcHrDuh9wwAYrwyeE81Q1A03zybmwPx2+/PQVDgvxw7WW0jBXVZVBQG5x2Y5p4iOTAOskONls/BXfkA/owjnsFX/Vfsdvvq/iAlIX5pGGw2W9nVpmt3Cw7nl6cIXiTx63HD5NRcRNIOYMXtW+jv623t7u7+qDaPRkglMNHIYBgmj5C4jVnX7faK8orK42ZzTg7dh8/nD/yYmJi819E+Ts/ddM9Lc1UT/SpBCo1UGio4B7uNYvY6xO5VSPsHWf1SME/BXrqmQwP+N0iuTDWLJDNBAAAAAElFTkSuQmCC';
                            },
							members: {
								BaseinfoFenster: null,
								BaseinfoTab: null,
								BaseinfoGeneralPage: null,
								BaseinfoBasesPage: null,
								BaseinfoMemberPage: null,
								BaseinfoInfoPage: null,
								BaseinfoGeneralVBox: null,
								BaseinfoBasesVBox: null,
								BaseinfoMemberVBox: null,
								BaseinfoInfoVBox: null,
								BaseinfoVBox: null,
								BaseinfoButton: null,
								app: null,
								initialize: function () {
									try
										{
											console.log("BaseInfo: Initialized...");
											Lang.loadData(qx.locale.Manager.getInstance().getLocale().split("_")[0]);
											this.BaseinfoFenster = new qx.ui.window.Window(BICLASS + " " + BIVERSION + " [" + Lang.gt("Sprache") + "] (" + Lang.gt("Server Sprache") + ": " + BIUSERLANGUAGE + ")",BIIMAGE).set({
												padding: 5,
												paddingRight: 0,
												width: 350,
												showMaximize:false,
												showMinimize:false,
												showClose:true,
												allowClose:true,
												resizable:false
											});
											this.BaseinfoFenster.setTextColor('black');
											this.BaseinfoFenster.setLayout(new qx.ui.layout.HBox); 
											this.BaseinfoFenster.moveTo(280, 10);
											
											// Tab Reihe
											this.BaseinfoTab = (new qx.ui.tabview.TabView).set({
												contentPaddingTop: 3,
												contentPaddingBottom: 6,
												contentPaddingRight: 7,
												contentPaddingLeft: 3
											});
											this.BaseinfoFenster.add(this.BaseinfoTab);
											
											// Tab 1
											this.BaseinfoGeneralPage = new qx.ui.tabview.Page(Lang.gt("Allgemein"));
											this.BaseinfoGeneralPage.setLayout(new qx.ui.layout.VBox(5));
											this.BaseinfoTab.add(this.BaseinfoGeneralPage);
											this.BaseinfoGeneralVBox = new qx.ui.container.Composite();
											this.BaseinfoGeneralVBox.setLayout(new qx.ui.layout.VBox(5));
											this.BaseinfoGeneralVBox.setThemedPadding(10);
											this.BaseinfoGeneralVBox.setThemedBackgroundColor("#eef");
											this.BaseinfoGeneralPage.add(this.BaseinfoGeneralVBox);
											
											// Tab 2
											this.BaseinfoBasesPage = new qx.ui.tabview.Page(Lang.gt("Basenwerte"));
											this.BaseinfoBasesPage.setLayout(new qx.ui.layout.VBox(5));
											this.BaseinfoTab.add(this.BaseinfoBasesPage);
											this.BaseinfoBasesVBox = new qx.ui.container.Composite();
											this.BaseinfoBasesVBox.setLayout(new qx.ui.layout.VBox(5));
											this.BaseinfoBasesVBox.setThemedPadding(10);
											this.BaseinfoBasesVBox.setThemedBackgroundColor("#eef");
											this.BaseinfoBasesPage.add(this.BaseinfoBasesVBox);
											
											// Tab 3
											this.BaseinfoMemberPage = new qx.ui.tabview.Page(Lang.gt("Mitglieder"));
											this.BaseinfoMemberPage.setLayout(new qx.ui.layout.VBox(5));
											this.BaseinfoTab.add(this.BaseinfoMemberPage);
											this.BaseinfoMemberVBox = new qx.ui.container.Composite();
											this.BaseinfoMemberVBox.setLayout(new qx.ui.layout.VBox(5));
											this.BaseinfoMemberVBox.setThemedPadding(10);
											this.BaseinfoMemberVBox.setThemedBackgroundColor("#eef");
											this.BaseinfoMemberPage.add(this.BaseinfoMemberVBox);

											this.BaseinfoButton = new qx.ui.form.Button("<b>" + BICLASS + "</b>",BIIMAGESMALL).set({
												toolTipText: "" + Lang.gt("Öffnen") + ": " + BICLASS + " " + BIVERSION + "",
												width: 100,
												height: 32,
												maxWidth: 100,
												maxHeight: 32,
												center: true,
												rich: true
											});
											this.BaseinfoButton.addListener("click", function (e) {
												this.BaseinfoGeneralVBox.removeAll();
												this.BaseinfoBasesVBox.removeAll();
												this.BaseinfoMemberVBox.removeAll();
												this.showBaseinfo();
												this.BaseinfoFenster.show();
											}, this);
											this.app = qx.core.Init.getApplication();
											this.app.getDesktop().add(this.BaseinfoButton, {
												right: 125,
												top: 0
											});
										}
									catch(e)
										{
											console.log("BaseInfo: Initialize Error - ", e);
										}
								},
								showBaseinfo: function (ev) {
									try
										{
											console.log("BaseInfo: Loading...");
											var instance = ClientLib.Data.MainData.GetInstance();
											var alliance = instance.get_Alliance();
											var allianceid = alliance.get_Id();
											var serverName = instance.get_Server().get_Name();
											var player = instance.get_Player();
											var faction1 = player.get_Faction();
											var playerRank = player.get_OverallRank();
											var playerSubstitution = player.get_IsSubstituted();
											var accountId = player.get_AccountId();
											var accountCreate = new Date(player.get_CreationDate());
											var Stunde1 = accountCreate.getHours();
											var Minute1 = accountCreate.getMinutes();
											var Monat1 = accountCreate.getMonth()+1 ;
											var Tag1 = accountCreate.getDate();
											var Jahr1 = accountCreate.getFullYear();
											if(Stunde1<10) Stunde1 = "0" + Stunde1;
											if(Minute1<10) Minute1 = "0" + Minute1;
											if(Tag1<10) Tag1 = "0" + Tag1;
											if(Monat1<10) Monat1 = "0" + Monat1;
												accountCreate = Tag1 + "." + Monat1 + "." + Jahr1 + " - " + Stunde1 + ":" + Minute1;
											var aktuellesDatum = new Date();
											var Stunde = aktuellesDatum.getHours();
											var Minute = aktuellesDatum.getMinutes();
											var Monat = aktuellesDatum.getMonth()+1 ;
											var Tag = aktuellesDatum.getDate();
											var Jahr = aktuellesDatum.getFullYear();
											if(Stunde<10) Stunde = "0" + Stunde;
											if(Minute<10) Minute = "0" + Minute;
											if(Tag<10) Tag = "0" + Tag;
											if(Monat<10) Monat = "0" + Monat;
											var Datum = Tag + "." + Monat + "." + Jahr;
											var Uhrzeit = Stunde + ":" + Minute;
											var player_basen = 0;
											var support_gebaeude = 0;
											var v = 0;
											var offbasen = 0;
											var base1 = '';
											var base2 = '';
											var VE_durchschnitt = null;
											var VE_lvl = null;
											var support = 0;
											var supportlvl = null;
											var supportname = '';
											var def_durchschnitt = null;
											var credit_durchschnitt = null;
											var repairMaxTime = null;
											var creditPerHour = 0;
											var creditsPerHour = 0;
											var PowerPerHour = 0;
											var PowersPerHour = 0;
											var PowerProduction = 0;
											var PowersProduction = 0;
											var TiberiumPerHour = 0;
											var TiberiumsPerHour = 0;
											var TiberiumProduction = 0;
											var TiberiumsProduction = 0;
											var CrystalPerHour = 0;
											var CrystalsPerHour = 0;
											var CrystalProduction = 0;
											var CrystalsProduction = 0;
											var credit_basen = '';
											var first_rep_flug = 0;
											var first_rep_fahr = 0;
											var first_rep_fuss = 0;
											var second_rep_flug = 0;
											var second_rep_fahr = 0;
											var second_rep_fuss = 0;
											var firstBaseName = '';
											var firstBaselvl = 0;
											var firstOfflvl = 0;
											var firstDeflvl = 0;
											var firstPowerProduction = 0;
											var firstRepairAir = null;
											var firstRepairVehicle = null;
											var firstRepairInfantry = null;
											var secondBaseName = '';
											var secondBaselvl = 0;
											var secondOfflvl = 0;
											var secondDeflvl = 0;
											var secondPowerProduction = 0;
											var secondRepairAir = null;
											var secondRepairVehicle = null;
											var secondRepairInfantry = null;
											var factionArt = new Array();
											factionArt[0] = "";
											factionArt[1] = "GDI";
											factionArt[2] = "NOD";
											var newAusgabe = new Array();
											var apc = instance.get_Cities();
											var PlayerName = apc.get_CurrentOwnCity().get_PlayerName();
											var PlayerID = apc.get_CurrentOwnCity().get_PlayerId();
											var AllianzName = apc.get_CurrentOwnCity().get_AllianceName();
											var AllianzID = apc.get_CurrentOwnCity().get_AllianceId();
											var apcl = apc.get_AllCities().d;
											var members = alliance.get_MemberData().d, member;
											var leaders = alliance.get_FirstLeaders();
											keys = Object.keys(members);
											len = keys.length;
											var AllianzRolle = new Array();
											var AllianzSpieler = new Array();
											var sd;
											var baseidforWorldmap = null;
											var coordsforWorldmap = '';
											var worldidforWorldmap = document.URL.split("/");
											if(AllianzID > 0)
												{
													while (len--)
														{
															member = members[keys[len]];
															AllianzRolle[member.Id] = member.RoleName;
															AllianzSpieler[member.Id] = member.Name;
														}
												}
											var allBases = '';
											var aB_basename,aB_baselvl,aB_offlvl,aB_deflvl,aB_velvl,aB_vzlvl,aB_cclvl,aB_supportlvl,aB_credits,aB_strom,aB_tiberium,aB_crystal;
											for (var key in apcl)
												{
													player_basen++;
													var c = apcl[key];
													try
														{
															sd = c.get_SupportData();
															if(sd !== null)
																{
																	support_gebaeude++;
																	support = sd.get_Level();
																	supportlvl = supportlvl+support;
																	supportname = c.get_SupportWeapon().n.replace(/NOD_SUPPORT_/gi,"").replace(/GDI_SUPPORT_/gi,"").replace(/FOR_SUPPORT_/gi,"");
																}
															else
																{
																	support = 0;
																	supportname = '-';
																}
															unitData = c.get_CityBuildingsData();
															ve = unitData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_Facility);
															vz = unitData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_HQ);
															bh = unitData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Construction_Yard);
															cc = unitData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Command_Center);
															commandpointsMaxStorage = c.GetResourceMaxStorage(ClientLib.Base.EResourceType.CommandPoints);
															
															creditPerHour = ClientLib.Base.Resource.GetResourceGrowPerHour(c.get_CityCreditsProduction(), false) + ClientLib.Base.Resource.GetResourceBonusGrowPerHour(c.get_CityCreditsProduction(), false);
															
															PowerPerHour = c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Power, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Power) + alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Power);
															PowerProduction = c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Power, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Power);
															TiberiumPerHour = c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Tiberium, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Tiberium) + alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Tiberium);
															TiberiumProduction = c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Tiberium, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Tiberium);
															CrystalPerHour = c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Crystal, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Crystal) + alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Crystal);
															CrystalProduction = c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Crystal, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Crystal);
															
															creditsPerHour = creditsPerHour + creditPerHour;
															
															PowersPerHour = PowersPerHour + PowerPerHour;
															PowersProduction = PowersProduction + PowerProduction;
															TiberiumsPerHour = TiberiumsPerHour + TiberiumPerHour;
															TiberiumsProduction = TiberiumsProduction + TiberiumProduction;
															CrystalsPerHour = CrystalsPerHour + CrystalPerHour;
															CrystalsProduction = CrystalsProduction + CrystalProduction;
															
															if(c.get_CommandCenterLevel() > 0)
																{
																	repairMaxTime = c.GetResourceMaxStorage(ClientLib.Base.EResourceType.RepairChargeInf);
																	if(firstOfflvl < c.get_LvlOffense())
																		{
																			secondBaseName = firstBaseName;
																			secondBaselvl = firstBaselvl;
																			secondOfflvl = firstOfflvl;
																			secondDeflvl = firstDeflvl;
																			secondPowerProduction = firstPowerProduction;
																			secondRepairInfantry = firstRepairInfantry;
																			secondRepairVehicle = firstRepairVehicle;
																			secondRepairAir = firstRepairAir;
																			
																			firstBaseName = c.get_Name();
																			firstBaselvl = c.get_LvlBase();
																			firstOfflvl = c.get_LvlOffense();
																			firstDeflvl = c.get_LvlDefense();
																			firstPowerProduction = c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Power, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Power) + alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Power);
																			firstRepairInfantry = c.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Infantry, false);
																			firstRepairVehicle = c.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Vehicle, false);
																			firstRepairAir = c.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Aircraft, false);
																		}
																	else if(c.get_LvlOffense() > secondOfflvl)
																		{
																			secondBaseName = c.get_Name();
																			secondBaselvl = c.get_LvlBase();
																			secondOfflvl = c.get_LvlOffense();
																			secondDeflvl = c.get_LvlDefense();
																			secondPowerProduction = c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Power, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Power) + alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Power);
																			secondRepairInfantry = c.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Infantry, false);
																			secondRepairVehicle = c.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Vehicle, false);
																			secondRepairAir = c.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Aircraft, false);
																		}
																}
															if(c.get_CommandCenterLevel() > 0 && c.get_LvlOffense() > 0)
																{
																	offbasen++;
																}
															if(ve !== null)
																{
																	v++;
																	VE_lvl = VE_lvl+ve.get_CurrentLevel();
																}
															if(c.get_LvlDefense())
																{
																	def_durchschnitt = def_durchschnitt + c.get_LvlDefense();
																}
															if(allBases != "")
																{
																	allBases += ' |||| ';
																}
															if(ve !== null) { aB_velvl = ve.get_CurrentLevel().toString(); } else { aB_velvl = 0;}
															if(vz !== null) { aB_vzlvl = vz.get_CurrentLevel().toString(); } else { aB_vzlvl = 0;}
															if(bh !== null) { aB_bhlvl = bh.get_CurrentLevel().toString(); } else { aB_bhlvl = 0;}
															if(cc !== null) { aB_cclvl = cc.get_CurrentLevel().toString(); } else { aB_cclvl = 0;}
															allBases += '' + c.get_Name().toString() + ' | ' + c.get_LvlBase().toFixed(2).toString() + ' | ' + c.get_LvlOffense().toFixed(2).toString() + ' | ' + c.get_LvlDefense().toFixed(2).toString() + ' | ' + aB_bhlvl + ' | ' + aB_velvl + ' | ' + aB_vzlvl + ' | ' + aB_cclvl + ' | ' + support.toFixed(2).toString() + ' | ' + supportname.toString() + ' | ' + parseInt(creditPerHour) + ' | ' + parseInt(c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Power, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Power) + alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Power)) + ' | ' + parseInt(c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Tiberium, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Tiberium) + alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Tiberium)) + ' | ' + parseInt(c.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Crystal, false, false) + c.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Crystal) + alliance.GetPOIBonusFromResourceType(ClientLib.Base.EResourceType.Crystal)) + ' | ' + key + '';
															if(baseidforWorldmap == null)
																{
																	baseidforWorldmap = key;
																	coordsforWorldmap = c.get_PosX() + ':' + c.get_PosY();
																}
														}
													catch (e)
														{
															console.warn("BaseInfo: AllBases - ", e); 
														}
												}
											
											def_durchschnitt = def_durchschnitt / player_basen;
											newAusgabe["off_basen"] = offbasen;
											if(player_basen>0)
												{
													newAusgabe["def_durchschnitt"] = "" + def_durchschnitt.toFixed(2).toString() + "";
												}
											else
												{
													newAusgabe["def_durchschnitt"] = 0;
												}
											newAusgabe["support_basen"] = support_gebaeude;
											if(support_gebaeude>0)
												{
													supportlvl = supportlvl / support_gebaeude;
													newAusgabe["support_lvl"] = "" + supportlvl.toFixed(2).toString() + "";
												}
											else
												{
													newAusgabe["support_lvl"] = 0;
												}
											VE_durchschnitt = VE_lvl / v;
											if(v>0)
												{
													newAusgabe["ve"] = "" + VE_durchschnitt.toFixed(2).toString() + "";
												}
											else
												{
													newAusgabe["ve"] = 0;
												}
											first_rep_flug = ClientLib.Vis.VisMain.FormatTimespan(firstRepairAir);
											first_rep_fahr = ClientLib.Vis.VisMain.FormatTimespan(firstRepairVehicle);
											first_rep_fuss = ClientLib.Vis.VisMain.FormatTimespan(firstRepairInfantry);
											if(first_rep_flug.split(":").length < 3)
												{
													first_rep_flug = "0:" + first_rep_flug;
												}
											if(first_rep_flug.split(":").length < 4)
												{
													first_rep_flug = "0:" + first_rep_flug;
												}
											if(first_rep_fahr.split(":").length < 3)
												{
													first_rep_fahr = "0:" + first_rep_fahr;
												}
											if(first_rep_fahr.split(":").length < 4)
												{
													first_rep_fahr = "0:" + first_rep_fahr;
												}
											if(first_rep_fuss.split(":").length < 3)
												{
													first_rep_fuss = "0:" + first_rep_fuss;
												}
											if(first_rep_fuss.split(":").length < 4)
												{
													first_rep_fuss = "0:" + first_rep_fuss;
												}
											second_rep_flug = ClientLib.Vis.VisMain.FormatTimespan(secondRepairAir);
											second_rep_fahr = ClientLib.Vis.VisMain.FormatTimespan(secondRepairVehicle);
											second_rep_fuss = ClientLib.Vis.VisMain.FormatTimespan(secondRepairInfantry);
											if(second_rep_flug.split(":").length < 3)
												{
													second_rep_flug = "0:" + second_rep_flug;
												}
											if(second_rep_flug.split(":").length < 4)
												{
													second_rep_flug = "0:" + second_rep_flug;
												}
											if(second_rep_fahr.split(":").length < 3)
												{
													second_rep_fahr = "0:" + second_rep_fahr;
												}
											if(second_rep_fahr.split(":").length < 4)
												{
													second_rep_fahr = "0:" + second_rep_fahr;
												}
											if(second_rep_fuss.split(":").length < 3)
												{
													second_rep_fuss = "0:" + second_rep_fuss;
												}
											if(second_rep_fuss.split(":").length < 4)
												{
													second_rep_fuss = "0:" + second_rep_fuss;
												}
											
											newAusgabe["AccountID"] = accountId;
											newAusgabe["AllianzID"] = AllianzID;
											if(AllianzID > 0) newAusgabe["AllianzName"] = AllianzName.toString();
											else newAusgabe["AllianzName"] = " ";
											if(AllianzID > 0) newAusgabe["AllianzRolle"] = AllianzRolle[PlayerID].toString();
											else newAusgabe["AllianzRolle"] = " ";
											newAusgabe["ServerName"] = serverName.toString();
											newAusgabe["SpielerID"] = PlayerID;
											newAusgabe["Spieler"] = PlayerName;
											newAusgabe["Klasse"] = factionArt[faction1];
											newAusgabe["Datum"] = Datum;
											newAusgabe["Uhrzeit"] = Uhrzeit;
											newAusgabe["Rang"] = playerRank;
											newAusgabe["Substitution"] = playerSubstitution;
											newAusgabe["maxKP"] = commandpointsMaxStorage;
											newAusgabe["repZeit"] = repairMaxTime / 60 / 60;
											newAusgabe["Basen"] = player_basen;
											newAusgabe["Creditproduktion"] = parseInt(creditsPerHour);
											newAusgabe["Tiberiumproduktion"] = parseInt(TiberiumsPerHour);
											newAusgabe["Kristallproduktion"] = parseInt(CrystalsPerHour);
											newAusgabe["Stromproduktion"] = parseInt(PowersPerHour);
											newAusgabe["1st_Base"] = firstBaselvl.toFixed(2).toString();
											newAusgabe["1st_Def"] = firstDeflvl.toFixed(2).toString();
											newAusgabe["1st_Off"] = firstOfflvl.toFixed(2).toString();
											newAusgabe["1st_Stromproduktion"] = parseInt(firstPowerProduction);
											newAusgabe["1st_Flugzeuge"] = first_rep_flug;
											newAusgabe["1st_Fahrzeuge"] = first_rep_fahr;
											newAusgabe["1st_Fusstruppen"] = first_rep_fuss;
											newAusgabe["2nd_Base"] = secondBaselvl.toFixed(2).toString();
											newAusgabe["2nd_Def"] = secondDeflvl.toFixed(2).toString();
											newAusgabe["2nd_Off"] = secondOfflvl.toFixed(2).toString();
											newAusgabe["2nd_Stromproduktion"] = parseInt(secondPowerProduction);
											newAusgabe["2nd_Flugzeuge"] = second_rep_flug;
											newAusgabe["2nd_Fahrzeuge"] = second_rep_fahr;
											newAusgabe["2nd_Fusstruppen"] = second_rep_fuss;
											newAusgabe["Leaders"] = leaders.l[leaders.l.indexOf(PlayerID)];
											newAusgabe["WorldID"] = worldidforWorldmap[3];
											newAusgabe["CoordsforWorldmap"] = coordsforWorldmap;
											newAusgabe["ShowonWorldmap"] = baseidforWorldmap;
											newAusgabe["Version"] = BIVERSION;

											var usersubmit = '';
											for(var werte in newAusgabe)
												{
													usersubmit += "[" + werte + "] == " + newAusgabe[werte] + "\n";
												}


											// Field 1
											var GeneralField1 = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
											GeneralField1.add(new qx.ui.basic.Label("<big><u><b>" + Lang.gt("Allgemeine Informationen") + "</b></u></big>").set({rich: true, selectable: true}));
											GeneralField1.add(new qx.ui.basic.Label("").set({rich: true, selectable: true}));

											var GeneralField2 = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
											GeneralField2.add(new qx.ui.basic.Label("<br><big><u><b>" + Lang.gt("Script Informationen") + "</b></u></big>").set({rich: true, selectable: true}));
											GeneralField2.add(new qx.ui.basic.Label("").set({rich: true, selectable: true}));

											// Field 2
											var field2 = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
											field2.add(new qx.ui.basic.Label("<big><u><b>" + Lang.gt("Gesamte Produktion") + "</b></u></big>").set({rich: true, selectable: true}));
											field2.add(new qx.ui.basic.Label("").set({rich: true, selectable: true}));

											var production = new qx.ui.container.Composite(new qx.ui.layout.HBox(50).set({alignX: "center"}));
											// 2.1
											var playerproduction = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
											playerproduction.add(new qx.ui.basic.Label("<b>" + Lang.gt("Spieler Produktion") + "</b><br><i>(" + Lang.gt("aller Basen") + ")</i>").set({rich: true, selectable: true}));
											// 2.2
											var overallproduction = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
											overallproduction.add(new qx.ui.basic.Label("<b>" + Lang.gt("Gesamte Produktion") + "</b><br><i>(" + Lang.gt("inklusive POI Bonus") + ")</i>").set({rich: true, selectable: true}));

											// Field 3
											var field3 = new qx.ui.container.Composite(new qx.ui.layout.VBox(5).set({alignX: "center"}));
											field3.add(new qx.ui.basic.Label("").set({rich: true, selectable: true}));

											var offensive = new qx.ui.container.Composite(new qx.ui.layout.HBox(50).set({alignX: "center"}));
											// 3.1
											var firstoff = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
											firstoff.add(new qx.ui.basic.Label("<big><u><b>" + Lang.gt("Erste Offensive") + "</b></u></big>").set({rich: true, selectable: true}));
											firstoff.add(new qx.ui.basic.Label("").set({rich: true, selectable: true}));
											// 3.2
											var secondoff = new qx.ui.container.Composite(new qx.ui.layout.VBox(2).set({alignX: "center"}));
											secondoff.add(new qx.ui.basic.Label("<big><u><b>" + Lang.gt("Zweite Offensive") + "</b></u></big>").set({rich: true, selectable: true}));
											secondoff.add(new qx.ui.basic.Label("").set({rich: true, selectable: true}));

											var chrystal,tiberium,power,dollar,squad,vehicle,plane,firstoff,secondoff,name,level,off,def,strom;

											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Account Erstellung") + ":</b> " + accountCreate.toString()).set({rich: true}));
											if(AllianzID > 0) GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Allianz Rolle") + ":</b> " + AllianzRolle[PlayerID].toString()).set({rich: true}));
											else GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Allianz Rolle") + ":</b> ---").set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Spielername") + ":</b> " + PlayerName).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Spielerklasse") + ":</b> " + factionArt[faction1]).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Aktuelle Uhrzeit") + ":</b> " + Datum + " " + Uhrzeit).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Rang") + ":</b> " + playerRank).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Maximale KP") + ":</b> " + commandpointsMaxStorage).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Maximale Repzeit") + ":</b> " + repairMaxTime / 60 / 60 + " " + Lang.gt("Stunden")).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Basenanzahl") + ":</b> " + player_basen).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Anzahl Offensiv Basen") + ":</b> " + offbasen).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Support Gebäude Level Ø") + ":</b> " + newAusgabe["support_lvl"]).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("VE Ø aller Basen") + ":</b> " + newAusgabe["ve"]).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Def Ø aller Basen") + ":</b> " + newAusgabe["def_durchschnitt"]).set({rich: true}));
											GeneralField1.add(new qx.ui.basic.Label("").set({rich: true, selectable: true}));
											if(AllianzID > 0)
												{
													GeneralField1.add(new qx.ui.basic.Label('<form action="http://baseinfo.scriptarea.net/index.php" method="post" target="_blank"><input type="hidden" name="usersubmit" value="' + usersubmit + '" /><input type="hidden" name="allBases" value="' + allBases + '" /><input type="submit" name="" value="&nbsp;' + Lang.gt("Werte übertragen") + '&nbsp;" style="font-weight: bold; font-size: 18px;" /></form>').set({rich: true, selectable: true}));
												}
											else
												{
													GeneralField1.add(new qx.ui.basic.Label("<button disabled='disabled'><s>&nbsp;" + Lang.gt('Werte übertragen') + "&nbsp;</s></button>").set({rich: true, selectable: true, toolTipText: "Deactivated"}));
												}

											GeneralField2.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Name") + ":</b> " + BICLASS).set({rich: true}));
											GeneralField2.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Version") + ":</b> " + BIVERSION).set({rich: true}));
											GeneralField2.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Ersteller") + ":</b> " + BIAUTHOR).set({rich: true}));
											GeneralField2.add(new qx.ui.basic.Atom("<b>" + Lang.gt("Webseite") + ":</b> <a href='" + BIHOMEPAGE + "' target='_blank'>" + BIHOMEPAGE + "</a>").set({rich: true}));
											if(AllianzID > 0) GeneralField2.add(new qx.ui.basic.Atom("<b>" + Lang.gt("E-Mail") + ":</b> <a href='mailto:" + BICONTACT + "?subject=BaseInfo%20InGame%20Contact&amp;body=Hi, my InGame Name is " + PlayerName.toString() + " and im in the alliance " + AllianzName.toString() + " and im playing at the world " + serverName.toString() + " (" + worldidforWorldmap[3] + "),' target='_blank'>" + BICONTACT + "</a>").set({rich: true}));
											else GeneralField2.add(new qx.ui.basic.Atom("<b>" + Lang.gt("E-Mail") + ":</b> <a href='mailto:" + BICONTACT + "?subject=BaseInfo%20InGame%20Contact&amp;body=Hi, my InGame Name is " + PlayerName.toString() + " and im not in a alliance and im playing at the world " + serverName.toString() + " (" + worldidforWorldmap[3] + "),' target='_blank'>" + BICONTACT + "</a>").set({rich: true}));

											playerproduction.add(chrystal = new qx.ui.basic.Atom("" + parseInt(CrystalsProduction).toLocaleString() + "", "webfrontend/ui/common/icn_res_chrystal.png").set({rich: true}));
											chrystal.setToolTipIcon("webfrontend/ui/common/icn_res_chrystal.png");
											chrystal.setToolTipText(Lang.gt("Kristall Produktion"));
											chrystal.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											production.add(playerproduction);
											playerproduction.add(tiberium = new qx.ui.basic.Atom("" + parseInt(TiberiumsProduction).toLocaleString() + "", "webfrontend/ui/common/icn_res_tiberium.png").set({rich: true}));
											tiberium.setToolTipIcon("webfrontend/ui/common/icn_res_tiberium.png");
											tiberium.setToolTipText(Lang.gt("Tiberium Produktion"));
											tiberium.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											production.add(playerproduction);
											playerproduction.add(power = new qx.ui.basic.Atom("" + parseInt(PowersProduction).toLocaleString() + "", "webfrontend/ui/common/icn_res_power.png").set({rich: true}));
											power.setToolTipIcon("webfrontend/ui/common/icn_res_power.png");
											power.setToolTipText(Lang.gt("Strom Produktion"));
											power.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											production.add(playerproduction);
											playerproduction.add(dollar = new qx.ui.basic.Atom("" + parseInt(creditsPerHour).toLocaleString() + "", "webfrontend/ui/common/icn_res_dollar.png").set({rich: true}));
											dollar.setToolTipIcon("webfrontend/ui/common/icn_res_dollar.png");
											dollar.setToolTipText(Lang.gt("Credit Produktion"));
											dollar.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											production.add(playerproduction);
											
											overallproduction.add(chrystal = new qx.ui.basic.Atom("" + parseInt(CrystalsPerHour).toLocaleString() + "", "webfrontend/ui/common/icn_res_chrystal.png").set({rich: true}));
											chrystal.setToolTipIcon("webfrontend/ui/common/icn_res_chrystal.png");
											chrystal.setToolTipText(Lang.gt("Gesamte Kristall Produktion"));
											chrystal.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											production.add(overallproduction);
											overallproduction.add(tiberium = new qx.ui.basic.Atom("" + parseInt(TiberiumsPerHour).toLocaleString(), "webfrontend/ui/common/icn_res_tiberium.png").set({rich: true}));
											tiberium.setToolTipIcon("webfrontend/ui/common/icn_res_tiberium.png");
											tiberium.setToolTipText(Lang.gt("Gesamte Tiberium Produktion"));
											tiberium.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											production.add(overallproduction);
											overallproduction.add(power = new qx.ui.basic.Atom("" + parseInt(PowersPerHour).toLocaleString(), "webfrontend/ui/common/icn_res_power.png").set({rich: true}));
											power.setToolTipIcon("webfrontend/ui/common/icn_res_power.png");
											power.setToolTipText(Lang.gt("Gesamte Strom Produktion"));
											power.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											production.add(overallproduction);

											firstoff.add(name = new qx.ui.basic.Atom(firstBaseName, "FactionUI/icons/icon_arsnl_base_buildings.png").set({rich: true}));
											name.setToolTipIcon("FactionUI/icons/icon_arsnl_base_buildings.png");
											name.setToolTipText("1st-OFF: " + Lang.gt("Basis Name"));
											name.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(firstoff);
											firstoff.add(level = new qx.ui.basic.Atom(firstBaselvl.toFixed(2).toString(), "FactionUI/icons/icon_arsnl_base_buildings.png").set({rich: true}));
											level.setToolTipIcon("FactionUI/icons/icon_arsnl_base_buildings.png");
											level.setToolTipText("1st-OFF: " + Lang.gt("Basis Level"));
											level.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(firstoff);
											firstoff.add(off = new qx.ui.basic.Atom(firstOfflvl.toFixed(2).toString(), "FactionUI/icons/icon_army_points.png").set({rich: true}));
											off.setToolTipIcon("FactionUI/icons/icon_army_points.png");
											off.setToolTipText("1st-OFF: " + Lang.gt("Offensiv Level"));
											off.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(firstoff);
											firstoff.add(def = new qx.ui.basic.Atom(firstDeflvl.toFixed(2).toString(), "FactionUI/icons/icon_def_army_points.png").set({rich: true}));
											def.setToolTipIcon("FactionUI/icons/icon_def_army_points.png");
											def.setToolTipText("1st-OFF: " + Lang.gt("Defensiv Level"));
											def.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(firstoff);
											firstoff.add(strom = new qx.ui.basic.Atom(parseInt(firstPowerProduction).toLocaleString(), "webfrontend/ui/common/icn_res_power.png").set({rich: true}));
											strom.setToolTipIcon("webfrontend/ui/common/icn_res_power.png");
											strom.setToolTipText("1st-OFF: " + Lang.gt("Strom Produktion"));
											strom.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(firstoff);
											firstoff.add(squad = new qx.ui.basic.Atom(first_rep_fuss, "FactionUI/icons/icon_arsnl_off_squad.png").set({rich: true}));
											squad.setToolTipIcon("FactionUI/icons/icon_arsnl_off_squad.png");
											squad.setToolTipText("1st-OFF: " + Lang.gt("Fußtruppen Reparaturzeit"));
											squad.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(firstoff);
											firstoff.add(vehicle = new qx.ui.basic.Atom(first_rep_fahr, "FactionUI/icons/icon_arsnl_off_vehicle.png").set({rich: true}));
											vehicle.setToolTipIcon("FactionUI/icons/icon_arsnl_off_vehicle.png");
											vehicle.setToolTipText("1st-OFF: " + Lang.gt("Fahrzeug Reparaturzeit"));
											vehicle.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(firstoff);
											firstoff.add(plane = new qx.ui.basic.Atom(first_rep_flug, "FactionUI/icons/icon_arsnl_off_plane.png").set({rich: true}));
											plane.setToolTipIcon("FactionUI/icons/icon_arsnl_off_plane.png");
											plane.setToolTipText("1st-OFF: " + Lang.gt("Flugzeug Reparaturzeit"));
											plane.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(firstoff);

											secondoff.add(name = new qx.ui.basic.Atom(secondBaseName, "FactionUI/icons/icon_arsnl_base_buildings.png").set({rich: true}));
											name.setToolTipIcon("FactionUI/icons/icon_arsnl_base_buildings.png");
											name.setToolTipText("2nd-OFF: " + Lang.gt("Basis Name"));
											name.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(secondoff);
											secondoff.add(level = new qx.ui.basic.Atom(secondBaselvl.toFixed(2).toString(), "FactionUI/icons/icon_arsnl_base_buildings.png").set({rich: true}));
											level.setToolTipIcon("FactionUI/icons/icon_arsnl_base_buildings.png");
											level.setToolTipText("2nd-OFF: " + Lang.gt("Basis Level"));
											level.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(secondoff);
											secondoff.add(off = new qx.ui.basic.Atom(secondOfflvl.toFixed(2).toString(), "FactionUI/icons/icon_army_points.png").set({rich: true}));
											off.setToolTipIcon("FactionUI/icons/icon_army_points.png");
											off.setToolTipText("2nd-OFF: " + Lang.gt("Offensiv Level"));
											off.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(secondoff);
											secondoff.add(def = new qx.ui.basic.Atom(secondDeflvl.toFixed(2).toString(), "FactionUI/icons/icon_def_army_points.png").set({rich: true}));
											def.setToolTipIcon("FactionUI/icons/icon_def_army_points.png");
											def.setToolTipText("2nd-OFF: " + Lang.gt("Defensive Level"));
											def.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(secondoff);
											secondoff.add(strom = new qx.ui.basic.Atom(parseInt(secondPowerProduction).toLocaleString(), "webfrontend/ui/common/icn_res_power.png").set({rich: true}));
											strom.setToolTipIcon("webfrontend/ui/common/icn_res_power.png");
											strom.setToolTipText("2nd-OFF: " + Lang.gt("Strom Produktion"));
											strom.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(secondoff);
											secondoff.add(squad = new qx.ui.basic.Atom(second_rep_fuss, "FactionUI/icons/icon_arsnl_off_squad.png").set({rich: true}));
											squad.setToolTipIcon("FactionUI/icons/icon_arsnl_off_squad.png");
											squad.setToolTipText("2nd-OFF: " + Lang.gt("Fußtruppen Reparaturzeit"));
											squad.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(secondoff);
											secondoff.add(vehicle = new qx.ui.basic.Atom(second_rep_fahr, "FactionUI/icons/icon_arsnl_off_vehicle.png").set({rich: true}));
											vehicle.setToolTipIcon("FactionUI/icons/icon_arsnl_off_vehicle.png");
											vehicle.setToolTipText("2nd-OFF: " + Lang.gt("Fahrzeug Reparaturzeit"));
											vehicle.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(secondoff);
											secondoff.add(plane = new qx.ui.basic.Atom(second_rep_flug, "FactionUI/icons/icon_arsnl_off_plane.png").set({rich: true}));
											plane.setToolTipIcon("FactionUI/icons/icon_arsnl_off_plane.png");
											plane.setToolTipText("2nd-OFF: " + Lang.gt("Flugzeug Reparaturzeit"));
											plane.getChildControl("icon").set({ width: 18, height: 18, scale: true, alignY: "middle" });
											offensive.add(secondoff);

											// Tab 1 General Informations
											this.BaseinfoGeneralVBox.add(GeneralField1);
											this.BaseinfoGeneralVBox.add(GeneralField2);

											// Tab 2 Base values
											field2.add(production);
											field3.add(offensive);
											this.BaseinfoBasesVBox.add(field2);
											field3.add(new qx.ui.basic.Label("").set({rich: true, selectable: true}));
											field3.add(new qx.ui.basic.Label("").set({rich: true, selectable: true}));
											this.BaseinfoBasesVBox.add(field3);

											// Tab 3 Members
											if(AllianzID > 0)
												{
													var keys = Object.keys(AllianzSpieler);
													var anzahl = keys.length;
													var len = keys.length;
													var member='',userreplace='',i=0;
													userreplace += newAusgabe["AllianzID"] + ',' + newAusgabe["AllianzName"] + ',' + newAusgabe["AllianzRolle"] + ',' + newAusgabe["ServerName"] + ',' + worldidforWorldmap[3] + ',';
													while (len--)
														{
															i++;
															if(member != '')
																{
																	if(i == 5)
																		{
																			member += ',<br>';
																			i = 0;
																		}
																	else
																		{
																			member += ', ';
																		}
																	userreplace += ',';
																}
															member += AllianzSpieler[keys[len]];
															userreplace += AllianzSpieler[keys[len]];
														}
													this.BaseinfoMemberVBox.add(new qx.ui.basic.Label("<table cellspacing='1' cellpadding='10'><tr><td><big><b><u>" + Lang.gt("Mitglieder Auflistung") + " (" + anzahl + ")</u></b></big><br><br>" + member + "</td></tr></table>").set({rich: true, selectable: true}));
													if(leaders.l.indexOf(PlayerID) != "-1")
														{
															this.BaseinfoMemberVBox.add(new qx.ui.basic.Label("<table cellspacing='1' cellpadding='10'><tr><td><span style='color: #bb0000;'><u>" + Lang.gt("Nur für OBH's sichtbar") + ":</u></span></td></tr></table>").set({rich: true}));
															this.BaseinfoMemberVBox.add(new qx.ui.basic.Label("<table cellspacing='1' cellpadding='10'><tr><td><big><b><u>" + Lang.gt("Mitglieder Anpassung") + "</u></b></big><br>Mit diesem Button kannste du deine Mitglieder auf<br>der BaseInfo Seite anpassen, sollten ehemalige Mitglieder,<br>die z.Z. einer anderen Allianz angehören,<br>noch in der Auflistung angezeigt werden.</td></tr></table>").set({rich: true}));
															if(!playerSubstitution)
																{
																	this.BaseinfoMemberVBox.add(new qx.ui.basic.Label("<table cellspacing='1' cellpadding='10'><tr><td><form action='http://baseinfo.scriptarea.net/index.php' method='post' target='_blank'><input type='hidden' name='userreplace' value='" + userreplace + "'/><input type='submit' name='submit' value='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Lang.gt("Mitgliederliste erneuern") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' style='font-weight: bold;' /></form><br><span style='color: #bb0000;'><i>" + Lang.gt("Du musst auf der BaseInfo-Seite eingeloggt sein") + "</i></span></td></tr></table>").set({rich: true}));
																}
															else
																{
																	this.BaseinfoMemberVBox.add(new qx.ui.basic.Label("<table cellspacing='1' cellpadding='10'><tr><td><button disabled='disabled'><s>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Lang.gt("Mitgliederliste erneuern") + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s></button><br><span style='color: #bb0000;'><i>If you are in Substitution, you cant use them!</i></span></td></tr></table>").set({rich: true}));
																}
														}
												}
											else
												{
													this.BaseinfoMemberVBox.add(new qx.ui.basic.Label("<table cellspacing='1' cellpadding='10'><tr><td><big><b><u>" + Lang.gt("Mitglieder Auflistung") + "</u></b></big><br><br>No Alliance available..</td></tr></table>").set({rich: true, selectable: true}));
												}
										}
									catch(e)
										{
											console.log("BaseInfo: Loading Error - ", e);
										}
								}
							}
						});
					}
				catch (e)
					{
						console.warn("qx.Class.define(BaseInfo: ", e);
					}
					var Lang = BaseInfoLang.getInstance();
					BaseInfo.getInstance();
            }
        function LoadExtension()
            {
                try
                    {
                        if (typeof(qx)!='undefined')
                            {
                                if (!!qx.core.Init.getApplication().getMenuBar())
                                    {
                                        BaseInfoCreate();
                                        BaseInfo.getInstance().initialize();
                                        return;
                                    }
                            }
                    }
                catch (e)
                    {
                        if (console !== undefined) console.log(e);
                        else if (window.opera) opera.postError(e);
                        else GM_log(e);
                    }
                window.setTimeout(LoadExtension, 1000);
            }
        LoadExtension();
    }
    function Inject()
        {
            if (window.location.pathname != ("/login/auth"))
                {
                    var Script = document.createElement("script");
                    Script.innerHTML = "(" + BaseInfoMain.toString() + ")();";
                    Script.type = "text/javascript";        
                    document.getElementsByTagName("head")[0].appendChild(Script);
                }
        }
    Inject();
})();





// ==UserScript==
// @name            Tiberium Alliances Battle Simulator V2
// @description     Allows you to simulate combat before actually attacking.
// @author          Eistee & TheStriker
// @version         15.03.30
// @namespace       https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @include         https://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @icon            http://eistee82.github.io/ta_simv2/icon.png
// @updateURL       http://eistee82.github.io/ta_simv2/ta_simv2.user.js
// @downloadURL     http://eistee82.github.io/ta_simv2/ta_simv2.user.js
// ==/UserScript==

(function () {
	var script = document.createElement("script");
	script.innerHTML = "(" + function () {
		function createClasses() {
			qx.Class.define("qx.ui.form.ModelButton", {					//				qx.ui.form.Button with model property
				extend : qx.ui.form.Button,
				include : [qx.ui.form.MModelProperty],
				implement : [qx.ui.form.IModel]
			});
			qx.Class.define("TABS", {									// [singleton]	Main Class
				type : "singleton",
				extend : qx.core.Object,
				construct : function () {
					try {
                        this.base(arguments);
						this.self(arguments).Init();
						document.createElement('img').src = ""; // http://goo.gl/#analytics/goo.gl/hPdG3K/month			please don't remove this Stats Counter
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up TABS constructor", e);
						console.groupEnd();
					}
				},
				statics : {
					_Init : [],
					addInit : function (func) {
						this._Init.push(func);
					},
					Init : function () {
						for (var i in this._Init)
							qx.Class.getByName(this._Init[i]).getInstance();
					}
				}
			});
			qx.Class.define("TABS.RES", {								// [static]		Ressources
				type : "static",
				statics : {
					getDisplayName : function (ETechName, EFactionType) {
						return ClientLib.Base.Tech.GetTechDisplayNameFromTechId(ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(ETechName, EFactionType));
					}
				}
			});
			qx.Class.define("TABS.RES.IMG", {							// [static]		Ressources: Images
				type : "static",
				statics : {
					Menu : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAADAFBMVEUAAAAAAAAAAAAABgAAAgACDQAAAAAAAAAAAAAAAAAAAAAAAQCV3icGGAETNwQIDAIAAAABBgBwsi9KghoUKwZFih0YVQlpph4iZAksYg8AAQACCABlmxmr0ieayiuM3SFMsBR/wymM0CFtsSQ5bhVFfRgRNQaY1DOLzCZYiRVJqhSDuylc2RiQzCSb2S9epyqVzjOi4TgWZQwecxIGLQQEFgJJgB07exh3niGHwCSv0zG01y////9RkhuX+yaR/iGd2zj///2hpEb//vNllSRijx9yoS5s2RdpmyhorB6GpDjE5GKL2Spjoh9y5h1hqRd36h9nniGm/Stv6Rhc2BNn7hGs/yhwzh6ttUvy5Z24sFvD01vo3Y2zvk61r2X9+emoqEvHuXytqFv58cmswFG9x1JS3Q3DuXCTmkSgvUL49L6LqEaWr09osh2P/idTpxV3pym2ymr1/NqPuje3vV2ewFB2tSWWrEN8mjZupyv7+9iCsy3z+rpplCZs3hqjyUaFnDHY63uJzi6AvivP3W6On0KRrDlcsRDK32CY/yeS9SJitRSHwzHc5Y+Ot0JlmiOg7TWAozB4rSqC4huWp0qz2E1bxxNanR6s2Ex/+hZi4Q9zySKc0EB5zyFgqCOq8jJ4+xKf+yVVnRpMsBJooyij4D6F0iqr0lNt9BlzwyFz9hSM/Rt72CJo+g+ysVF3rivWxmyEqzLt3qJwvCPMw4O6r3BJihSwzE/Bw3fXzYja2I3QwHqpuFnj6Zd7oTCCmC+0ymbl04zLv2zx3qHz8Kzs3pehrUjK33ieskrp7ax99CK502j7/tDI2GdajhpHkhFquCNj1xSnsE/M6G7i8KJXkxl4nSajq1qz9jW+6FLL9Fjb9W2530+btEJhwxiS2jRsrx9/2yZGvQxy1h3L5mW24U1foRtSzg2oyVZWrhZevxFLnheO9x+B+xxo5hac4TyVyTt/yy5f0Bej9jGu/TS5/zJxqymF4ix86xxvwx168RNW0hGh4Cqb3yl69R2T+iQ+CJL9AAAAPHRSTlMAERguJDYNAQgEFSn2P1dIHDytf0uNaLV4iB8ypdnX6Lbe3sJ2gVDp6ZKoxufO9ann+JScbl2lpMXW4/FzYe/CAAACJklEQVQoz2IAA3YOAV4TYzNzI1NWLk4GBOBkEtE3/BIWFvb1s4EoKxs7TJyDRXRC59rQAL+A4BULgtTFmDih6pmFOlfVLVvmsNThvc/jYPv5qgLsYHEWoby02U1Nc2ZM9X7y1MHHfeYNFS6QDKPw/5DNPc3126NTzrZ03Lm11N1ughoHUANArDxpuWXVxZnREamxqS2Ntx18/Oy1WdgZ2IS78j3Xb0yJjViXEJN1ssP75tyHM+fzcTCw6D73rSwoL3Fyiop0trEpuux9f827hTJcDIKTFz8L3Od1LCFqQ7wNEFyZOmPu919yLAz8bxYF9ruVnig5FOkIkqhZPmf2mlBraQb+t7bTfUsLG48cPWwDAlUvPvwM//dXEDAG/tWv51X2HT9jE38wGajFubdv+crwVX+AEisWz1uSc7rIxjlm96bkrN671T0fw9daMTMw6zya7pJ9oMaxamdiemL6pbb65lefVltIMTBp+dl6uGQX7t21ZWtcklPDteL2lbOCJBkZOPhO5bvVuubs2RGXlJGxvy2zrPveAj1WTgZ2KYUAWw/XiorWKddbG8onTsrtBmkAxQavvPs2l3OutVO8vLwKPP3bL9orc4NjhI2PZ/L5q/1uHoG+kx74X6jLU+TlgEQ4o4hS17RFtkv8v3m+nBa6UJwVKA6RYZPW5LH7EfI7JNjeTkOChQMpNXCxSojLycpayogxM4LjFSHFJsDNzc3CxAZLPQCSE8MJTTlJqQAAAABJRU5ErkJggg==",
					Stats : "FactionUI/icons/icn_build_slots.png",
					Stop : "FactionUI/icons/icon_replay_stop_button.png",
					Arrange : {
						Left : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAA+VBMVEUAAABkZGT19fX39/fj4+MVFRXc3NwZGRlLS0sVFRXd3d0LCwvu7u7JycmioqKIiIgkJCSIiIj///9WVlb7+/vW1tbx8fHo6Ohqampubm7MzMx1dXX///+tra0eHh6srKyzs7N6enrNzc309PS7u7v7+/vQ0NC/v7/ExMT7+/tgYGChoaHu7u5bW1vs7OzAwMB0dHSsrKzS0tJ1dXWsrKxFRUUpKSkmJiahoaHAwMCampomJibV1dWJiYm5ubk0NDQ3Nzfp6en///+vr69BQUGTk5NBQUHj4+PX19f+/v7Jycnj4+PR0dHc3NyXl5eMjIz09PSCgoIyMjIoy70QAAAAU3RSTlMADweHhxMFCgIDhwUbAgsODh4UHoeHh4cFCgQUChQeD4cchw6HDw8ehx4vOoc8hzw6PDwKhxQaKB4UGh4ZKCgyHhQoNSgyOSiHNYc8hzU8PDw8EBrmavEAAACkSURBVAjXJYtVFoJQAEQfgoh0iYggIgJSit3dHftfjI/D/M3cO4DBddtxbNc1TY7rqwTQdJH2fZr2vIlgVSsEyImyjKKK0i5jZKmBqHDYXT/3XqcbHpeZQaNQiFIeSMNCEeS25yfkr28SHOb5dFgoUfZvNeuDHwXw6WofvpM4Pq3HtdTADQwjL48b5LBTBGBYYyZYkrQZpRiG0ViWQxCE5yGG/Q+LDRO5PtzwzwAAAABJRU5ErkJggg==",
						Center : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAA51BMVEU6OjpTU1P///9MTEz39/f8/Pz+/v7///9TU1MAAADv7+/7+/uVlZWDg4MvLy/39/fj4+MvLy/9/f3e3t7X19c9PT3U1NStra2ZmZlkZGTo6Oj09PRxcXGVlZXOzs7Ly8t+fn7c3NyZmZnc3NyysrL8/Pyenp6JiYlZWVm/v7/Pz8+7u7vo6Oj4+PiTk5Pj4+PT09Ps7Ozv7+/JycnT09PAwMB+fn7b29t1dXWTk5P////j4+M+Pj5PT0////+kpKSFhYWenp7Kysq1tbX////+/v62trbBwcHf39/CwsLk5ORubm5TU1MeHJAiAAAATXRSTlMCHocFAgoPAw0AhwUNDw8NDR4eh4c7Hjs8O4eHCgoFChkDDxOHhx4eLw+Hhx6HOoeHhzqHOjw8hxQUFBkSGhoaIy8vhy8jHocvh4c8PH2ldZMAAACpSURBVAjXHYzXAkIAFECvvUIUJRWZmYnS3nv8//dEz2cAzhEiSYrNILAsvo8BUMR6L8uxqt4931z2ATjSdZNEZ6e9Sasd8hhQonzN89m80+2mJ69RJeQN1XW29261M/TIA4ya8bPm5UfTxggNMLTZul9kYfGInC1WGeq5k5baV1GUv4ETG7TaF6/o4qDmAIChCPvgI4gkSbuVQTHA4JzR4GlaEAR6MMSZHypxEyTcEZPmAAAAAElFTkSuQmCC",
						Right : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAA9lBMVEXw8PAODg7s7OzW1tbs7OxgYGD9/f0AAABPT08VFRUBAQHU1NTk5OQAAABwcHD9/f38/PxfX1/7+/v9/f3S0tKjo6MRERE/Pz/AwMDp6enIyMh0dHRubm709PTR0dGSkpKmpqZBQUFubm66urro6OjOzs6xsbH19fXd3d3Hx8dBQUGhoaGGhobw8PBWVlb///8AAAB1dXWenp6vr69nZ2cAAAAKCgoiIiIHBwetra1dXV2hoaFnZ2e1tbUpKSmxsbEVFRX39/fPz8+MjIw3Nze6uropKSnY2NjY2Njj4+NkZGTQ0NDe3t6ysrKvr6/R0dGXl5fDw8OkAsOLAAAAUnRSTlMCDoeHBQUKAAIGCQqHFAoPFBSHHg8PHhyHh4c7DQ4UHocPGh4ehyiHhx48OjyHPBoaFIcSCigZFDWHKB41hyiHPCiHMjWHPB4tMjyHhzI8OTw8yAOJWAAAAKdJREFUCNcli1UCgkAABVcBWVBBGglJQULs7u66/2UEfZ/zZgBACzpN6zwvCIJGYRCAQqXFce4pcGaG3aEgQGmWZX2/ma+WGkidwTKD21xen2cUq/PpH7jn7L8jN0WWCACKtcB7RO9YTcL9ckQAlM9nd9or8mIyJDPD8XbqNQmP6/GgnCZosWcgW0U+rEyzmwIcxyHF2JIkimK7TMIfwPqaZeXSkQT8Aiw9E02m3A8KAAAAAElFTkSuQmCC"
					},
					Arrows : {
						Up : "webfrontend/theme/arrows/up.png",
						Down : "webfrontend/theme/arrows/down.png",
						Left : "webfrontend/theme/arrows/left.png",
						Right : "webfrontend/theme/arrows/right.png"
					},
					Flip : {
						H : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvgAADr4B6kKxwAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAACo0lEQVQ4T2PABkJq+rjmH7nUdPrV119nXn/9s+7S/R1NCzc4rTx1a8ay41c7WuYsl5WRkWGEKicM4honSux7+Pb42Tdf/4LwwacfP7Wv3pOz8sydVavO3lk5f9cx15jCGhaocsJgys7jAUeffXiGZODn1lW7Claeub16xelb64C4Ma+lnx+qHD/wySpjXnnqeifQq79RDFy5qxBq4PqVp25Ombxmhw4QQHXhAdH1fWL77r++DDToD04Dz9xeteDAuajc1gn4ve0UkciU3zvT4vTrb79ghmEzEOTtNefvL8pomyrExsYG1Y0FxNT18my4dH8KKGYJGLgeGDkrJqzeoR9ZWMMM1Y4Jercctjr46N1NZMNwGQhy5YpTN/PzWvu5oNpRgUdGGdOc/WfST736guJdPAauX3HiekfH4vXyUCNQQVhtn8D2W8+2nEGKDEIGgrw9a+cxeyUlJdRE7pldxZjcOlXj6LOPj9ENw2cgkL9m2dHL2TGljZxQoyAgrKaHdfmZWxVA734jxUAQXnXm9tS6yXMlTG2doKYBQWrrZIHNVx4sBWrG8C4I4zNw5enbi+ftPuGSVNGMiO2edXstjz3/9BabYSBMwMC1y09cr2pbvFEIbJh/RinrlI1744CRAc9q6BifgSC8+tzdpT1rdmuAE3l80yTZ/UglCzZMyECQ+MID58NiyprYGGbuO5t1/MWn99gMgmFCBoLwytO3Wir6ZggzLDpycQJyyYINH3r66WP7mj25wPDCZ+DsSRv2WTAsPHCmChgh7068/PwTGz4OlFtz+npX7/p9LstP3WwA4hZseMXp2w3Td56wYyho6lSdsfNY6YzdJydM330CBYPEQHIVnROVIzMLOIvb+oVq+meIVPVOQ8EgsYqeqUJJpfWcAKWymA2EsiGlAAAAAElFTkSuQmCC",
						V : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOvgAADr4B6kKxwAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAClklEQVQ4T2MgB/iVd7CH1/SI9G3YF7D4+JUlR59/+nH61dff8w6cnQBVgh+EN01hjGqZxpY9eYlI39YjNvMOni888Ojd0aNP3z8+8/rr77Nvvv498+brn/n7T0+HasEOIlpnMIc1TBIJq+vX3HjtSd/ma4/WnHj59TtQM9gQZAwycO7ekzOhWhHAo6CRKaymh6d69krVWfvOpO19+O700WcfYS75g24QDGMYCPQWS1TzFKmktmkmO26/XLHv3sujwHD5CVSM0xBkDDcwqLJLcMHxa/FLT17rOPz04/PTb779wqaBEIYbOHv/2ZxjLz6/BglgU0gshhu44MDZaUABigwDYbCB+07NZJi29WDFvrsvLu+78/waDnwdixgmBpoxbduhMgav6ETZyNxSm+j8creoPPJwdH4FkC6z9o1NlWaYsnGf0ZpzdyeuOnt3GSUYZMZUoFkMk7ceDV555s6KFadvrQPi9eRioBmrpu44EcLQvHijweJDFzJWnrrRu/LM7VVASbIMBupdPWX78TAGt8Bw1oSsfL6qCbMUp2855Lvk+LXGFaduTgcpACpci64RF4YbCALe3t6MLi4uTC6BEZwhqXnC3Us3ms7acSxi+YlrLaDwgRqO1SAYRjEQGYAMB2JmN08v9vCMAuGWafPVFu4/E7H8+NWaVWduz11x+vYakgyEAaChDEBXM3r5+rOGJmVwlzZ1Svav2m656NDFghWnbk0FGrAEaBAoSMBhTtBAdAByuZOrO4t7eDxfWlWz7IztR70WHDiXA3T1jFVn76wE4hVTtx8PhionDoBc7eDgwODq4ckcFJPEHp9TJNA0e5n6tPU77ZcfvZLaNnupClQpeQDkaktLS2Y3Hz9Ov8h4XltnV3YAMTRvewY5T1wAAAAASUVORK5CYII="
					},
					DisableUnit : "FactionUI/icons/icon_disable_unit.png",
					Undo : "FactionUI/icons/icon_refresh_funds.png",
					Outcome : {
						total_defeat : "FactionUI/icons/icon_reports_total_defeat.png",
						victory : "FactionUI/icons/icon_reports_victory.png",
						total_victory : "FactionUI/icons/icon_reports_total_victory.png"
					},
					Enemy : {
						All : "FactionUI/icons/icon_arsnl_show_all.png",
						Base : "FactionUI/icons/icon_arsnl_base_buildings.png",
						Defense : "FactionUI/icons/icon_def_army_points.png"
					},
					Defense : {
						Infantry : "FactionUI/icons/icon_arsnl_def_squad.png",
						Vehicle : "FactionUI/icons/icon_arsnl_def_vehicle.png",
						Building : "FactionUI/icons/icon_arsnl_def_building.png"
					},
					Offense : {
						Infantry : "FactionUI/icons/icon_arsnl_off_squad.png",
						Vehicle : "FactionUI/icons/icon_arsnl_off_vehicle.png",
						Aircraft : "FactionUI/icons/icon_arsnl_off_plane.png"
					},
					RepairCharge : {
						Base : "webfrontend/ui/icons/icn_repair_points.png",
						Offense : "webfrontend/ui/icons/icn_repair_off_points.png",
						Infantry : "webfrontend/ui/icons/icon_res_repair_inf.png",
						Vehicle : "webfrontend/ui/icons/icon_res_repair_tnk.png",
						Aircraft : "webfrontend/ui/icons/icon_res_repair_air.png"
					},
					Resource : {
						Tiberium : "webfrontend/ui/common/icn_res_tiberium.png",
						Crystal : "webfrontend/ui/common/icn_res_chrystal.png",
						Credits : "webfrontend/ui/common/icn_res_dollar.png",
						Power : "webfrontend/ui/common/icn_res_power.png",
						ResearchPoints : "webfrontend/ui/common/icn_res_research_mission.png",
						Transfer : "FactionUI/icons/icon_transfer_resource.png"
					},
					Simulate : "FactionUI/icons/icon_attack_simulate_combat.png",
					CNCOpt : "http://cncopt.com/favicon.ico"
				}
			});
			qx.Class.define("TABS.SETTINGS", {							// [static]		Settings
				type : "static",
				statics : {
					__name : null,
					__store : null,
					__upload : null,
					__file : null,
					__reader : null,
					_Init : function () {
						var localStorage = ClientLib.Base.LocalStorage,
							player = ClientLib.Data.MainData.GetInstance().get_Player(),
							server = ClientLib.Data.MainData.GetInstance().get_Server();
						this.__name = "TABS.SETTINGS." + player.get_Id() + "." + server.get_WorldId();
						if (this.__store === null) {
							if (localStorage.get_IsSupported() && localStorage.GetItem(this.__name) !== null)
								this.__store = localStorage.GetItem(this.__name);
							else
								this.__store = {};
						}
						this.__store.$$Player = player.get_Name();
						this.__store.$$Server = server.get_Name();
						this.__store.$$Update = Date.now();
						if (localStorage.get_IsSupported())
							localStorage.SetItem(this.__name, this.__store);
					},
					get : function (prop, init) { //get or initialize a prop
						this._Init();
						if (this.__store[prop] === undefined && init !== undefined) {
							this.__store[prop] = init;
							this._Init();
						}
						return this.__store[prop];
					},
					set : function (prop, value) {
						this._Init();
						this.__store[prop] = value;
						this._Init();
						return value;
					},
					"delete" : function (prop) {
						this._Init();
						delete this.__store[prop];
						this._Init();
						return true;
					},
					reset : function () {
						var player = ClientLib.Data.MainData.GetInstance().get_Player(),
							server = ClientLib.Data.MainData.GetInstance().get_Server();
						this.__name = "TABS.SETTINGS." + player.get_Id() + "." + server.get_WorldId();
						window.localStorage.removeItem(this.__name);
						this.__store = null;
						this.__name = null;
						this._Init();
					},
					save : function () {
						var textFileAsBlob = new Blob([JSON.stringify(this.__store)], {
								type : 'text/plain'
							}),
							downloadLink = document.createElement("a");
						downloadLink.download = "TABS_Backup.json";
						if (window.webkitURL !== undefined)
							downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
						else {
							downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
							downloadLink.style.display = "none";
							document.body.appendChild(downloadLink);
						}
						downloadLink.click();
					},
					load : function () {
						if (this.__upload === null) {
							this.__upload = document.createElement("input");
							this.__upload.type = "file";
							this.__upload.id = "files";
							this.__upload.addEventListener('change', (function (e) {
									var files = e.target.files;
									if (files.length > 0)
										this.__reader.readAsText(files[0], 'UTF-8');
								}).bind(this), false);
							this.__upload.style.display = "none";
							document.body.appendChild(this.__upload);
						}
						if (this.__reader === null) {
							this.__reader = new FileReader();
							this.__reader.addEventListener("load", (function (e) {
									var fileText = e.target.result;
									try {
										var fileObject = JSON.parse(fileText);
										this.reset();
										for (var i in fileObject)
											this.set(i, fileObject[i]);
										alert("Game will reload now.");
										window.location.reload();
									} catch (f) {
										console.group("Tiberium Alliances Battle Simulator V2");
										console.error("Error loading file", f);
										console.groupEnd();
									}
								}).bind(this), false);
						}
						this.__upload.click();
					}
				}
			});
			qx.Class.define("TABS.UTIL.Formation", {					// [static]		Utilities for Army Formation
				type : "static",
				statics : {
					GetFormation : function (cityid, ownid) {
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							OwnCity = ((ownid !== undefined && ownid !== null) ? ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(ownid) : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity());
						if (OwnCity !== null)
							return OwnCity.get_CityArmyFormationsManager().GetFormationByTargetBaseId(CityId);
						else
							return null;
					},
					GetUnits : function (cityid, ownid) {
						var formation = this.GetFormation(cityid, ownid);
						if (formation !== null) {
							var units = formation.get_ArmyUnits();
							if (units !== null)
								return units.l;
						}
						return null;
					},
					GetUnitById : function (id, cityid, ownid) {
						var units = this.GetUnits(cityid, ownid);
						if (units !== null)
							for (var i = 0; i < units.length; i++)
								if (units[i].get_Id() == id)
									return units[i];
						return null;
					},
					Get : function (cityid, ownid) {
						/**
						 *	[{
						 *		id: [Number],		// UnitId (internal)
						 *		gid: [Number],		// Garnison Id (internal)
						 *		gs: [Number],		// Garnison State
						 *		i: [Number],		// MdbId
						 *		l: [Number],		// Level
						 *		h: [Number],		// Health
						 *		enabled: [Bool],	// Enabled (internal)
						 *		x: [Number],		// CoordX
						 *		y: [Number],		// CoordY
						 *		t: [Bool]			// IsTransportedCityEntity (internal/todo:kommt weg)
						 *	},{...}]
						 */
						var units = this.GetUnits(cityid, ownid),
							formation = [];
						if (units !== null) {
							for (var i = 0; i < units.length; i++) {
								formation.push({
									id : units[i].get_Id(),
									gid : (units[i].get_IsTransportedCityEntity() ? units[i].get_TransporterCityEntity().get_Id() : (units[i].get_TransportedCityEntity() !== null ? units[i].get_TransportedCityEntity().get_Id() : 0)),
									gs : (units[i].get_IsTransportedCityEntity() ? 2 : (units[i].get_TransportedCityEntity() !== null ? 1 : 0)),
									i : units[i].get_MdbUnitId(),
									l : units[i].get_CurrentLevel(),
									h : Math.ceil(units[i].get_Health()),
									enabled : units[i].get_Enabled(),
									x : units[i].get_CoordX(),
									y : units[i].get_CoordY(),
									t : units[i].get_IsTransportedCityEntity()
								});
							}
							return formation;
						}
						return null;
					},
					Set : function (formation, cityid, ownid) {
						/**
						 *	[{
						 *		id: [Number],		// UnitId
						 *		enabled: [Bool],	// Enabled
						 *		x: [Number],		// CoordX
						 *		y: [Number],		// CoordY
						 *		t: [Bool]			// IsTransportedCityEntity
						 *	},{...}]
						 */
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							OwnId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
							unit,
							target,
							freePos,
							transported = [],
							i,
							targetFormation = this.GetFormation(CityId, OwnId),
							getFreePos = function (formation) {
								for (var x = 0; x < ClientLib.Base.Util.get_ArmyMaxSlotCountX(); x++) {
									for (var y = 0; y < ClientLib.Base.Util.get_ArmyMaxSlotCountY(); y++) {
										if (formation.GetUnitByCoord(x, y) === null)
											return {
												x : x,
												y : y
											};
									}
								}
								return null;
							},
							freeTransported = function (unit, freePos) {
								if (unit.get_TransportedCityEntity() !== null)
									unit = unit.get_TransportedCityEntity();
								if (unit.get_IsTransportedCityEntity() && freePos !== null)
									unit.MoveBattleUnit(freePos.x, freePos.y);
							};
						if (targetFormation !== null) {
							for (i = 0; i < formation.length; i++) {
								unit = this.GetUnitById(formation[i].id, CityId, OwnId);
								if (formation[i].gs == 2) {
									transported.push(formation[i]);
									continue;
								}

								target = targetFormation.GetUnitByCoord(formation[i].x, formation[i].y);
								freePos = getFreePos(targetFormation);
								if (freePos !== null && target !== null)
									freeTransported(target, freePos);

								freePos = getFreePos(targetFormation);
								if (freePos !== null)
									freeTransported(unit, freePos);

								unit.set_Enabled(formation[i].enabled);
								target = targetFormation.GetUnitByCoord(formation[i].x, formation[i].y);
								if (target !== null && ClientLib.Base.Unit.CanBeTransported(target.get_UnitGameData_Obj(), unit.get_UnitGameData_Obj()))
									target.MoveBattleUnit(unit.get_CoordX(), unit.get_CoordY());
								else
									unit.MoveBattleUnit(formation[i].x, formation[i].y);
							}
							//transported units
							for (i = 0; i < transported.length; i++) {
								unit = this.GetUnitById(transported[i].id, CityId, OwnId);
								target = targetFormation.GetUnitByCoord(transported[i].x, transported[i].y);

								freePos = getFreePos(targetFormation);
								if (freePos !== null && target !== null)
									freeTransported(target, freePos);

								freePos = getFreePos(targetFormation);
								if (freePos !== null)
									freeTransported(unit, freePos);

								target = targetFormation.GetUnitByCoord(transported[i].x, transported[i].y);
								if (target !== null)
									target.set_Enabled(true);

								unit.set_Enabled(true);
								unit.MoveBattleUnit(transported[i].x, transported[i].y);
								if (target !== null)
									target.set_Enabled(transported[i].enabled);
                                else
                                    unit.set_Enabled(transported[i].enabled);
								if (target !== null)
                                    target.MoveBattleUnit(transported[i].x, transported[i].y);
							}
						}
					},
					Merge : function (formation, attacker) {
						for (var i in formation) {
							for (var j in attacker) {
								if (formation[i].gs == attacker[j].gs &&
									formation[i].i == attacker[j].i &&
									formation[i].l == attacker[j].l &&
									formation[i].x == attacker[j].x &&
									formation[i].y == attacker[j].y) {
									for (var k in attacker[j])
										formation[i][k] = attacker[j][k];
								}
							}
						}
						return formation;
					},
					IsFormationInCache : function () {
						var cache = TABS.CACHE.getInstance().check(this.Get());
						return (cache.result !== null);
					},
					Mirror : function (formation, pos, sel) {
						switch (pos) {
						case "h":
						case "v":
							break;
						default:
							return;
						}

						for (var i = 0; i < formation.length; i++) {
							if ((sel === null || formation[i].y == sel) && pos == "h")
								formation[i].x = Math.abs(formation[i].x - ClientLib.Base.Util.get_ArmyMaxSlotCountX() + 1);

							if ((sel === null || formation[i].x == sel) && pos == "v")
								formation[i].y = Math.abs(formation[i].y - ClientLib.Base.Util.get_ArmyMaxSlotCountY() + 1);
						}
						return formation;
					},
					Shift : function (formation, pos, sel) {
						var v_shift = 0,
							h_shift = 0;

						switch (pos) {
						case "u":
							v_shift = -1;
							break;
						case "d":
							v_shift = 1;
							break;
						case "l":
							h_shift = -1;
							break;
						case "r":
							h_shift = 1;
							break;
						default:
							return;
						}

						for (var i = 0; i < formation.length; i++) {
							if ((sel === null || formation[i].y === sel) && (pos == "l" || pos == "r"))
								formation[i].x += h_shift;

							if ((sel === null || formation[i].x === sel) && (pos == "u" || pos == "d"))
								formation[i].y += v_shift;

							switch (formation[i].x) {
							case ClientLib.Base.Util.get_ArmyMaxSlotCountX():
								formation[i].x = 0;
								break;
							case -1:
								formation[i].x = ClientLib.Base.Util.get_ArmyMaxSlotCountX() - 1;
								break;
							}

							switch (formation[i].y) {
							case ClientLib.Base.Util.get_ArmyMaxSlotCountY():
								formation[i].y = 0;
								break;
							case -1:
								formation[i].y = ClientLib.Base.Util.get_ArmyMaxSlotCountY() - 1;
								break;
							}
						}
						return formation;
					},
					set_Enabled : function (formation, set, EUnitGroup) {
						if (set === null)
							set = true;
						var all = (EUnitGroup != ClientLib.Data.EUnitGroup.Infantry && EUnitGroup != ClientLib.Data.EUnitGroup.Vehicle && EUnitGroup != ClientLib.Data.EUnitGroup.Aircraft);
						for (var i = 0; i < formation.length; i++) {
							var unitGroup = this.GetUnitGroupTypeFromUnit(ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(formation[i].i));
							if (all || (EUnitGroup == unitGroup && formation[i].gs === 0))
								formation[i].enabled = set;
						}

						return formation;
					},
					toggle_Enabled : function (formation, EUnitGroup) {
						var all = (EUnitGroup != ClientLib.Data.EUnitGroup.Infantry && EUnitGroup != ClientLib.Data.EUnitGroup.Vehicle && EUnitGroup != ClientLib.Data.EUnitGroup.Aircraft);
						for (var i = 0, num_total = 0, num_enabled = 0; i < formation.length; i++) {
							var unitGroup = this.GetUnitGroupTypeFromUnit(ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(formation[i].i));
							if (all || (EUnitGroup == unitGroup && formation[i].gs === 0)) {
								num_total++;
								if (formation[i].enabled)
									num_enabled++;
							}
						}

						return this.set_Enabled(formation, (num_enabled < (num_total / 2)), EUnitGroup);
					},
					GetUnitGroupTypeFromUnit : function (unit) {
						if (unit === null)
							return ClientLib.Data.EUnitGroup.None;
						if (unit.pt == ClientLib.Base.EPlacementType.Offense)
							switch (unit.mt) {
							case ClientLib.Base.EUnitMovementType.Feet:
								return ClientLib.Data.EUnitGroup.Infantry;
							case ClientLib.Base.EUnitMovementType.Wheel:
							case ClientLib.Base.EUnitMovementType.Track:
								return ClientLib.Data.EUnitGroup.Vehicle;
							case ClientLib.Base.EUnitMovementType.Air:
							case ClientLib.Base.EUnitMovementType.Air2:
								return ClientLib.Data.EUnitGroup.Aircraft;
							}
						else if (unit.pt == ClientLib.Base.EPlacementType.Defense)
							return ClientLib.Data.EUnitGroup.Defense;
						else
							return ClientLib.Data.EUnitGroup.None;
					}
				}
			});
			qx.Class.define("TABS.UTIL.Stats", {						// [static]		Utilities for Stats calculation
				type : "static",
				statics : {
					get_LootFromCurrentCity : function () {
						var LootFromCurrentCity = ClientLib.API.Battleground.GetInstance().GetLootFromCurrentCity(),
							LootClass = new TABS.STATS.Entity.Resource(),
							Loot = LootClass.getAny();
						if (LootFromCurrentCity !== null) {
							for (var i = 0; i < LootFromCurrentCity.length; i++)
								Loot[LootFromCurrentCity[i].Type] = LootFromCurrentCity[i].Count;
							LootClass.setAny(Loot);
							return LootClass;
						} else
							return null;
					},
					get_RepairCosts : function (mdbId, level, HealthPoints, AttackCounter) {
						var ResourcesClass = new TABS.STATS.Entity.Resource(),
							Resources = ResourcesClass.getAny(),
							unit = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(mdbId),
							Health,
							dmgRatio,
							costs;
						AttackCounter = (AttackCounter !== undefined && AttackCounter !== null ? AttackCounter : 0);

						if (HealthPoints instanceof TABS.STATS.Entity.HealthPoints)
							Health = HealthPoints;
						else
							Health = new TABS.STATS.Entity.HealthPoints(HealthPoints);

						if (Health.getStart() != Health.getEnd()) {
							dmgRatio = (Health.getStart() - Health.getEnd()) / Health.getMax();
							if (unit.pt !== ClientLib.Base.EPlacementType.Offense || ClientLib.API.Util.GetOwnUnitRepairCosts === undefined)
								costs = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() !== null ? ClientLib.API.Util.GetUnitRepairCosts(level, mdbId, dmgRatio) : null;
							else
								costs = ClientLib.API.Util.GetOwnUnitRepairCosts(level, mdbId, dmgRatio);

							for (var i = 0; costs !== null && i < costs.length; i++)
								switch (costs[i].Type) {
								case ClientLib.Base.EResourceType.Tiberium:
								case ClientLib.Base.EResourceType.Crystal:
								case ClientLib.Base.EResourceType.Gold:
								case ClientLib.Base.EResourceType.ResearchPoints:
									Resources[costs[i].Type] = costs[i].Count * Math.pow(0.7, AttackCounter);
									break;
								default:
									Resources[costs[i].Type] = costs[i].Count;
									break;
								}
						}

						if (Resources[ClientLib.Base.EResourceType.ResearchPoints] > 0)
							Resources[ClientLib.Base.EResourceType.ResearchPoints] = Math.max(1, Math.floor(Resources[ClientLib.Base.EResourceType.ResearchPoints] * dmgRatio));

						ResourcesClass.setAny(Resources);
						return ResourcesClass;
					},
					get_BuildingInfo : function (cityid) {
						var BuildingInfo = {},
							City = ((cityid !== undefined && cityid !== null) ? ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(cityid) : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity());
						if (City !== null) {
							var CityBuildingsData = City.get_CityBuildingsData(),
								get_BuildingInfo = function (Building) {
									if (Building !== null)
										return {
											MdbId : Building.get_TechGameData_Obj().c,
											x : Building.get_CoordX(),
											y : Building.get_CoordY()
										};
									else
										return null;
								};

							BuildingInfo.Construction_Yard = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Construction_Yard) || CityBuildingsData.GetBuildingByMDBId(ClientLib.Base.ETech.FOR_Fortress_ConstructionYard));
							BuildingInfo.Command_Center = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Command_Center));
							BuildingInfo.Barracks = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Barracks));
							BuildingInfo.Factory = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Factory));
							BuildingInfo.Airport = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Airport));
							BuildingInfo.Defense_Facility = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_Facility));
							BuildingInfo.Defense_HQ = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Defense_HQ));
							BuildingInfo.Support = get_BuildingInfo(CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Air) || CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Art) || CityBuildingsData.GetUniqueBuildingByTechName(ClientLib.Base.ETechName.Support_Ion));
						}
						return BuildingInfo;
					},
					_GetModuleByType : function (modules, type) {
						for (var i = 0; i < modules.length; i++) {
							if (modules[i].t == type)
								return modules[i];
						}
						return null;
					},
					_patchUnitLifePoints : function (unit, activeModules) {
						var newUnit = qx.lang.Object.clone(unit, true),
							module = this._GetModuleByType(newUnit.m, ClientLib.Base.EUnitModuleType.HitpointOverride);

						if (module !== null && activeModules.indexOf(module.i) != -1)
							newUnit.lp = module.h;

						return newUnit;
					},
					get_UnitMaxHealthByLevel : function (level, unit, bonus, activeModules) {
						return Math.floor(ClientLib.API.Util.GetUnitMaxHealthByLevel(level, this._patchUnitLifePoints(unit, activeModules), bonus)) * 16;
					},
					get_Stats : function (data) {
						try {
							var StatsClass = new TABS.STATS(),
								Stats = StatsClass.getAny(),
								sim = {},
								buildings = data.d.s,
								buildingInfo = this.get_BuildingInfo(data.d.di),
								efficiency = 0,
								ve_level = 1,
								defender = data.d.d,
								attacker = data.d.a,
								unit,
								unitHealthPoints = new TABS.STATS.Entity.HealthPoints(),
								unitRepairCosts,
								unitMaxHealthPoints,
								i;

							function addObject(a, b) {
								for (var i in a)
									a[i] += b[i];
								return a;
							}

							//simulation
							for (i = 0; i < data.e.length; i++)
								sim[data.e[i].Key] = data.e[i].Value;

							//BattleDuration
							Stats.BattleDuration = (data.d.cs * 100) + (data.d.cs < (data.d.md * 10) ? 3000 : 0);

							for (i = 0; i < buildings.length; i++) {
								unit = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(buildings[i].i);

								//maxHealth
								switch (data.d.df) {
								case ClientLib.Base.EFactionType.GDIFaction:
								case ClientLib.Base.EFactionType.NODFaction:
									unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(buildings[i].l, unit, true, data.d.dm);
									break;
								default:
									unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(buildings[i].l, unit, false, data.d.dm);
									break;
								}

								unitHealthPoints.setMax(Math.max(unitMaxHealthPoints, buildings[i].h * 16));
								unitHealthPoints.setStart(buildings[i].h * 16);
								unitHealthPoints.setEnd(sim[buildings[i].ci].h);
								unitRepairCosts = this.get_RepairCosts(buildings[i].i, buildings[i].l, unitHealthPoints);

								addObject(Stats.Enemy.Overall.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Enemy.Overall.Resource, unitRepairCosts.getAny());

								addObject(Stats.Enemy.Structure.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Enemy.Structure.Resource, unitRepairCosts.getAny());

								switch (parseInt(ClientLib.Base.Tech.GetTechNameFromTechId(unit.tl, unit.f), 10)) {
								case ClientLib.Base.ETechName.Construction_Yard:
									addObject(Stats.Enemy.Construction_Yard.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Construction_Yard.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Command_Center:
									addObject(Stats.Enemy.Command_Center.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Command_Center.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Barracks:
									addObject(Stats.Enemy.Barracks.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Barracks.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Factory:
									addObject(Stats.Enemy.Factory.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Factory.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Airport:
									addObject(Stats.Enemy.Airport.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Airport.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Defense_Facility:
									addObject(Stats.Enemy.Defense_Facility.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Defense_Facility.Resource, unitRepairCosts.getAny());
									efficiency = 0.7 * (unitHealthPoints.getEnd() / unitHealthPoints.getMax());
									ve_level = buildings[i].l;
									break;
								case ClientLib.Base.ETechName.Defense_HQ:
									addObject(Stats.Enemy.Defense_HQ.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Defense_HQ.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.ETechName.Support_Air:
								case ClientLib.Base.ETechName.Support_Ion:
								case ClientLib.Base.ETechName.Support_Art:
									addObject(Stats.Enemy.Support.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.Support.Resource, unitRepairCosts.getAny());
									break;
								}

								if (buildingInfo.Construction_Yard !== undefined) {
									if (buildingInfo.Construction_Yard !== null && buildingInfo.Construction_Yard.x == buildings[i].x && buildingInfo.Construction_Yard.y < buildings[i].y) {
										Stats.Enemy.Construction_Yard.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Construction_Yard.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Construction_Yard.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Command_Center !== null && buildingInfo.Command_Center.x == buildings[i].x && buildingInfo.Command_Center.y < buildings[i].y) {
										Stats.Enemy.Command_Center.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Command_Center.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Command_Center.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Barracks !== null && buildingInfo.Barracks.x == buildings[i].x && buildingInfo.Barracks.y < buildings[i].y) {
										Stats.Enemy.Barracks.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Barracks.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Barracks.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Factory !== null && buildingInfo.Factory.x == buildings[i].x && buildingInfo.Factory.y < buildings[i].y) {
										Stats.Enemy.Factory.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Factory.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Factory.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Airport !== null && buildingInfo.Airport.x == buildings[i].x && buildingInfo.Airport.y < buildings[i].y) {
										Stats.Enemy.Airport.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Airport.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Airport.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Defense_Facility !== null && buildingInfo.Defense_Facility.x == buildings[i].x && buildingInfo.Defense_Facility.y < buildings[i].y) {
										Stats.Enemy.Defense_Facility.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Defense_Facility.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Defense_Facility.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Defense_HQ !== null && buildingInfo.Defense_HQ.x == buildings[i].x && buildingInfo.Defense_HQ.y < buildings[i].y) {
										Stats.Enemy.Defense_HQ.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Defense_HQ.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Defense_HQ.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Support !== null && buildingInfo.Support.x == buildings[i].x && buildingInfo.Support.y < buildings[i].y) {
										Stats.Enemy.Support.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Support.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Support.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
								}
							}
							for (i = 0; i < defender.length; i++) {
								unit = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(defender[i].i);

								//maxHealth
								switch (data.d.df) {
								case ClientLib.Base.EFactionType.GDIFaction:
								case ClientLib.Base.EFactionType.NODFaction:
									unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(defender[i].l, unit, true, data.d.dm);
									break;
								default:
									unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(defender[i].l, unit, false, data.d.dm);
									break;
								}

								unitHealthPoints.setMax(Math.max(unitMaxHealthPoints, defender[i].h * 16));
								unitHealthPoints.setStart(defender[i].h * 16);
								unitHealthPoints.setEnd(sim[defender[i].ci].h);
								unitHealthPoints.setRep((((defender[i].h * 16) - (sim[defender[i].ci].h)) * efficiency * ve_level) / Math.max(ve_level, defender[i].l));
								unitRepairCosts = this.get_RepairCosts(defender[i].i, defender[i].l, unitHealthPoints, defender[i].ac);

								addObject(Stats.Enemy.Overall.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Enemy.Overall.Resource, unitRepairCosts.getAny());
								addObject(Stats.Enemy.Defense.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Enemy.Defense.Resource, unitRepairCosts.getAny());
								if (unit.ptt == ClientLib.Base.EArmorType.NONE) {
									addObject(Stats.Enemy.DefenseNonArmored.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.DefenseNonArmored.Resource, unitRepairCosts.getAny());
								} else {
									addObject(Stats.Enemy.DefenseArmored.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Enemy.DefenseArmored.Resource, unitRepairCosts.getAny());
								}

								if (buildingInfo.Construction_Yard !== undefined && unit.mt == ClientLib.Base.EUnitMovementType.Structure) {
									if (buildingInfo.Construction_Yard !== null && buildingInfo.Construction_Yard.x == defender[i].x) {
										Stats.Enemy.Construction_Yard.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Construction_Yard.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Construction_Yard.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Command_Center !== null && buildingInfo.Command_Center.x == defender[i].x) {
										Stats.Enemy.Command_Center.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Command_Center.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Command_Center.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Barracks !== null && buildingInfo.Barracks.x == defender[i].x) {
										Stats.Enemy.Barracks.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Barracks.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Barracks.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Factory !== null && buildingInfo.Factory.x == defender[i].x) {
										Stats.Enemy.Factory.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Factory.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Factory.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Airport !== null && buildingInfo.Airport.x == defender[i].x) {
										Stats.Enemy.Airport.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Airport.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Airport.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Defense_Facility !== null && buildingInfo.Defense_Facility.x == defender[i].x) {
										Stats.Enemy.Defense_Facility.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Defense_Facility.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Defense_Facility.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Defense_HQ !== null && buildingInfo.Defense_HQ.x == defender[i].x) {
										Stats.Enemy.Defense_HQ.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Defense_HQ.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Defense_HQ.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
									if (buildingInfo.Support !== null && buildingInfo.Support.x == defender[i].x) {
										Stats.Enemy.Support.HealthPoints.maxFront += unitHealthPoints.getMax();
										Stats.Enemy.Support.HealthPoints.startFront += unitHealthPoints.getStart();
										Stats.Enemy.Support.HealthPoints.endFront += unitHealthPoints.getEnd();
									}
								}
							}

							if (ClientLib.API.Util.GetOwnUnitRepairCosts === undefined)
								ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(data.d.ai);

							for (i = 0; i < attacker.length; i++) {
								unit = ClientLib.Res.ResMain.GetInstance().GetUnit_Obj(attacker[i].i);

								//maxHealth
								unitMaxHealthPoints = this.get_UnitMaxHealthByLevel(attacker[i].l, unit, false, data.d.am);

								unitHealthPoints.setMax(Math.max(unitMaxHealthPoints, attacker[i].h * 16));
								unitHealthPoints.setStart(attacker[i].h * 16);
								if (sim[attacker[i].ci] !== undefined)
									unitHealthPoints.setEnd(sim[attacker[i].ci].h);
								else
									unitHealthPoints.setEnd(attacker[i].h * 16);
								unitRepairCosts = this.get_RepairCosts(attacker[i].i, attacker[i].l, unitHealthPoints);

								addObject(Stats.Offense.Overall.HealthPoints, unitHealthPoints.getAny());
								addObject(Stats.Offense.Overall.Resource, unitRepairCosts.getAny());
								switch (unit.mt) {
								case ClientLib.Base.EUnitMovementType.Feet:
									addObject(Stats.Offense.Infantry.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Offense.Infantry.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.EUnitMovementType.Wheel:
								case ClientLib.Base.EUnitMovementType.Track:
									addObject(Stats.Offense.Vehicle.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Offense.Vehicle.Resource, unitRepairCosts.getAny());
									break;
								case ClientLib.Base.EUnitMovementType.Air:
								case ClientLib.Base.EUnitMovementType.Air2:
									addObject(Stats.Offense.Aircraft.HealthPoints, unitHealthPoints.getAny());
									addObject(Stats.Offense.Aircraft.Resource, unitRepairCosts.getAny());
									break;
								}
							}

							if (ClientLib.API.Util.GetOwnUnitRepairCosts === undefined)
								ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(data.d.di);

							StatsClass.setAny(Stats);
							return StatsClass;
						} catch (e) {
							console.group("Tiberium Alliances Battle Simulator V2");
							console.error("Error in TABS.UTIL.Stats.get_Stats()", e);
							console.groupEnd();
						}
					},
					patchGetUnitRepairCosts : function () {
						try {
							for (var i in ClientLib.Data.Cities.prototype) {
								if (typeof ClientLib.Data.Cities.prototype[i] === "function" &&
									ClientLib.Data.Cities.prototype[i] == ClientLib.Data.Cities.prototype.get_CurrentCity &&
									i !== "get_CurrentCity")
									break;
							}
							var GetOwnUnitRepairCosts = ClientLib.API.Util.GetUnitRepairCosts.toString().replace(i, "get_CurrentOwnCity"),
								args = GetOwnUnitRepairCosts.substring(GetOwnUnitRepairCosts.indexOf("(") + 1, GetOwnUnitRepairCosts.indexOf(")")),
								body = GetOwnUnitRepairCosts.substring(GetOwnUnitRepairCosts.indexOf("{") + 1, GetOwnUnitRepairCosts.lastIndexOf("}"));
							/*jslint evil: true */
							ClientLib.API.Util.GetOwnUnitRepairCosts = Function(args, body);
							/*jslint evil: false */
						} catch (e) {
							console.group("Tiberium Alliances Battle Simulator V2");
							console.error("Error setting up ClientLib.API.Util.GetOwnUnitRepairCosts", e);
							console.groupEnd();
						}
					}
				},
				defer : function (statics) {
					try {
						statics.patchGetUnitRepairCosts();
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up UTIL.Stats defer", e);
						console.groupEnd();
					}
				}
			});
            qx.Class.define("TABS.UTIL.Battleground", {					// [static]		Battleground
				type : "static",
				statics : {
                    StartReplay : function (cityid, combat) {
                        qx.core.Init.getApplication().getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatReplay, cityid, 0, 0);
                        ClientLib.Vis.VisMain.GetInstance().get_Battleground().Init();
                        ClientLib.Vis.VisMain.GetInstance().get_Battleground().LoadCombatDirect(combat);
                        qx.event.Timer.once(function () {
                            ClientLib.Vis.VisMain.GetInstance().get_Battleground().RestartReplay();
                            ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1);
                        }, this, 0);
                    }
                }
			});
			qx.Class.define("TABS.UTIL.CNCOpt", {						// [static]		CNCOpt
				type : "static",
				statics : {
					keymap : {
						"GDI_Accumulator" : "a",
						"GDI_Refinery" : "r",
						"GDI_Trade Center" : "u",
						"GDI_Silo" : "s",
						"GDI_Power Plant" : "p",
						"GDI_Construction Yard" : "y",
						"GDI_Airport" : "d",
						"GDI_Barracks" : "b",
						"GDI_Factory" : "f",
						"GDI_Defense HQ" : "q",
						"GDI_Defense Facility" : "w",
						"GDI_Command Center" : "e",
						"GDI_Support_Art" : "z",
						"GDI_Support_Air" : "x",
						"GDI_Support_Ion" : "i",
						"GDI_Harvester" : "h",
						"GDI_Harvester_Crystal" : "n",
						"FOR_Silo" : "s",
						"FOR_Refinery" : "r",
						"FOR_Tiberium Booster" : "b",
						"FOR_Crystal Booster" : "v",
						"FOR_Trade Center" : "u",
						"FOR_Defense Facility" : "w",
						"FOR_Construction Yard" : "y",
						"FOR_Harvester_Tiberium" : "h",
						"FOR_Defense HQ" : "q",
						"FOR_Harvester_Crystal" : "n",
						"NOD_Refinery" : "r",
						"NOD_Power Plant" : "p",
						"NOD_Harvester" : "h",
						"NOD_Construction Yard" : "y",
						"NOD_Airport" : "d",
						"NOD_Trade Center" : "u",
						"NOD_Defense HQ" : "q",
						"NOD_Barracks" : "b",
						"NOD_Silo" : "s",
						"NOD_Factory" : "f",
						"NOD_Harvester_Crystal" : "n",
						"NOD_Command Post" : "e",
						"NOD_Support_Art" : "z",
						"NOD_Support_Ion" : "i",
						"NOD_Accumulator" : "a",
						"NOD_Support_Air" : "x",
						"NOD_Defense Facility" : "w",
						"GDI_Wall" : "w",
						"GDI_Cannon" : "c",
						"GDI_Antitank Barrier" : "t",
						"GDI_Barbwire" : "b",
						"GDI_Turret" : "m",
						"GDI_Flak" : "f",
						"GDI_Art Inf" : "r",
						"GDI_Art Air" : "e",
						"GDI_Art Tank" : "a",
						"GDI_Def_APC Guardian" : "g",
						"GDI_Def_Missile Squad" : "q",
						"GDI_Def_Pitbull" : "p",
						"GDI_Def_Predator" : "d",
						"GDI_Def_Sniper" : "s",
						"GDI_Def_Zone Trooper" : "z",
						"NOD_Def_Antitank Barrier" : "t",
						"NOD_Def_Art Air" : "e",
						"NOD_Def_Art Inf" : "r",
						"NOD_Def_Art Tank" : "a",
						"NOD_Def_Attack Bike" : "p",
						"NOD_Def_Barbwire" : "b",
						"NOD_Def_Black Hand" : "z",
						"NOD_Def_Cannon" : "c",
						"NOD_Def_Confessor" : "s",
						"NOD_Def_Flak" : "f",
						"NOD_Def_MG Nest" : "m",
						"NOD_Def_Militant Rocket Soldiers" : "q",
						"NOD_Def_Reckoner" : "g",
						"NOD_Def_Scorpion Tank" : "d",
						"NOD_Def_Wall" : "w",
						"FOR_Wall" : "w",
						"FOR_Barbwire_VS_Inf" : "b",
						"FOR_Barrier_VS_Veh" : "t",
						"FOR_Inf_VS_Inf" : "g",
						"FOR_Inf_VS_Veh" : "r",
						"FOR_Inf_VS_Air" : "q",
						"FOR_Sniper" : "n",
						"FOR_Mammoth" : "y",
						"FOR_Veh_VS_Inf" : "o",
						"FOR_Veh_VS_Veh" : "s",
						"FOR_Veh_VS_Air" : "u",
						"FOR_Turret_VS_Inf" : "m",
						"FOR_Turret_VS_Inf_ranged" : "a",
						"FOR_Turret_VS_Veh" : "v",
						"FOR_Turret_VS_Veh_ranged" : "d",
						"FOR_Turret_VS_Air" : "f",
						"FOR_Turret_VS_Air_ranged" : "e",
						"GDI_APC Guardian" : "g",
						"GDI_Commando" : "c",
						"GDI_Firehawk" : "f",
						"GDI_Juggernaut" : "j",
						"GDI_Kodiak" : "k",
						"GDI_Mammoth" : "m",
						"GDI_Missile Squad" : "q",
						"GDI_Orca" : "o",
						"GDI_Paladin" : "a",
						"GDI_Pitbull" : "p",
						"GDI_Predator" : "d",
						"GDI_Riflemen" : "r",
						"GDI_Sniper Team" : "s",
						"GDI_Zone Trooper" : "z",
						"NOD_Attack Bike" : "b",
						"NOD_Avatar" : "a",
						"NOD_Black Hand" : "z",
						"NOD_Cobra" : "r",
						"NOD_Commando" : "c",
						"NOD_Confessor" : "s",
						"NOD_Militant Rocket Soldiers" : "q",
						"NOD_Militants" : "m",
						"NOD_Reckoner" : "k",
						"NOD_Salamander" : "l",
						"NOD_Scorpion Tank" : "o",
						"NOD_Specter Artilery" : "p",
						"NOD_Venom" : "v",
						"NOD_Vertigo" : "t",
						"<last>" : "."
					},
					createLink : function (city, own_city) {
						city = ((city !== undefined && city !== null) ? city : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity());
						own_city = ((own_city !== undefined && own_city !== null) ? own_city : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity());

						function findTechLayout(city) {
							for (var k in city)
								if ((typeof(city[k]) == "object") && city[k] && 0 in city[k] && 8 in city[k])
									if ((typeof(city[k][0]) == "object") && city[k][0] && city[k][0] && 0 in city[k][0] && 15 in city[k][0])
										if ((typeof(city[k][0][0]) == "object") && city[k][0][0] && "BuildingIndex" in city[k][0][0])
											return city[k];
							return null;
						}
						function findBuildings(city) {
							var cityBuildings = city.get_CityBuildingsData();
							for (var k in cityBuildings) {
								if ((typeof(cityBuildings[k]) === "object") && cityBuildings[k] && "d" in cityBuildings[k] && "c" in cityBuildings[k] && cityBuildings[k].c > 0)
									return cityBuildings[k].d;
							}
						}
						function getUnitArrays(city) {
							var ret = [];
							for (var k in city)
								if ((typeof(city[k]) == "object") && city[k])
									for (var k2 in city[k])
										if ((typeof(city[k][k2]) == "object") && city[k][k2] && "d" in city[k][k2]) {
											var lst = city[k][k2].d;
											if ((typeof(lst) == "object") && lst)
												for (var i in lst)
													if (typeof(lst[i]) == "object" && lst[i] && "get_CurrentLevel" in lst[i])
														ret.push(lst);
										}
							return ret;
						}
						function getDefenseUnits(city) {
							var arr = getUnitArrays(city);
							for (var i = 0; i < arr.length; ++i)
								for (var j in arr[i])
									if (TABS.UTIL.Formation.GetUnitGroupTypeFromUnit(arr[i][j].get_UnitGameData_Obj()) == ClientLib.Data.EUnitGroup.Defense)
										return arr[i];
							return [];
						}
						function getFactionKey (faction) {
							switch (faction) {
							case ClientLib.Base.EFactionType.GDIFaction:
								return "G";
							case ClientLib.Base.EFactionType.NODFaction:
								return "N";
							case ClientLib.Base.EFactionType.FORFaction:
							case ClientLib.Base.EFactionType.NPCBase:
							case ClientLib.Base.EFactionType.NPCCamp:
							case ClientLib.Base.EFactionType.NPCOutpost:
							case ClientLib.Base.EFactionType.NPCFortress:
								return "F";
							default:
								console.log("cncopt: Unknown faction: " + city.get_CityFaction());
								return "E";
							}
						}
						function getUnitKey (unit) {
							if (typeof TABS.UTIL.CNCOpt.keymap[unit.n] !== "undefined") {
								return TABS.UTIL.CNCOpt.keymap[unit.n];
							} else {
								return ".";
							}
						}

						var link = "http://cncopt.com/?map=",
							defense_units = [],
							offense_units = [],
							defense_unit_list = getDefenseUnits(city),
							army = own_city.get_CityArmyFormationsManager().GetFormationByTargetBaseId(city.get_Id()),
							offense_unit_list,
							techLayout = findTechLayout(city),
							buildings = findBuildings(city),
							row,
							spot,
							level,
							building,
							defense_unit,
							offense_unit,
							alliance = ClientLib.Data.MainData.GetInstance().get_Alliance(),
							i;

						link += "3|"; // link version
						link += getFactionKey(city.get_CityFaction()) + "|";
						link += getFactionKey(own_city.get_CityFaction()) + "|";
						link += city.get_Name() + "|";

						for (i = 0; i < 20; ++i) {
							defense_units.push([null, null, null, null, null, null, null, null, null]);
							offense_units.push([null, null, null, null, null, null, null, null, null]);
						}
						for (i in defense_unit_list)
							defense_units[defense_unit_list[i].get_CoordX()][defense_unit_list[i].get_CoordY() + 8] = defense_unit_list[i];
						if (army.get_ArmyUnits() !== null)
							offense_unit_list = army.get_ArmyUnits().l;
						else
							offense_unit_list = city.get_CityUnitsData().get_OffenseUnits().d;
						for (i in offense_unit_list)
							if (offense_unit_list[i].get_Enabled() && !offense_unit_list[i].get_IsTransportedCityEntity())
								offense_units[offense_unit_list[i].get_CoordX()][offense_unit_list[i].get_CoordY() + 16] = offense_unit_list[i];

						for (i = 0; i < 20; ++i) {
							row = [];
							for (var j = 0; j < 9; ++j) {
								spot = i > 16 ? null : techLayout[j][i];
								level = 0;
								building = null;
								if (spot && spot.BuildingIndex >= 0) {
									building = buildings[spot.BuildingIndex];
									level = building.get_CurrentLevel();
								}
								defense_unit = defense_units[j][i];
								if (defense_unit) {
									level = defense_unit.get_CurrentLevel();
								}
								offense_unit = offense_units[j][i];
								if (offense_unit) {
									level = offense_unit.get_CurrentLevel();
								}
								if (level > 1) {
									link += level;
								}

								switch (i > 16 ? 0 : city.GetResourceType(j, i)) {
								case ClientLib.Data.ECityTerrainType.NONE:
									if (building) {
										link += getUnitKey(GAMEDATA.Tech[building.get_MdbBuildingId()]);
									} else if (defense_unit) {
										link += getUnitKey(defense_unit.get_UnitGameData_Obj());
									} else if (offense_unit) {
										link += getUnitKey(offense_unit.get_UnitGameData_Obj());
									} else {
										link += ".";
									}
									break;
								case ClientLib.Data.ECityTerrainType.CRYSTAL:
									if (spot.BuildingIndex < 0)
										link += "c";
									else
										link += "n";
									break;
								case ClientLib.Data.ECityTerrainType.TIBERIUM:
									if (spot.BuildingIndex < 0)
										link += "t";
									else
										link += "h";
									break;
								case ClientLib.Data.ECityTerrainType.FOREST:
									link += "j";
									break;
								case ClientLib.Data.ECityTerrainType.BRIAR:
									link += "h";
									break;
								case ClientLib.Data.ECityTerrainType.SWAMP:
									link += "l";
									break;
								case ClientLib.Data.ECityTerrainType.WATER:
									link += "k";
									break;
								default:
									console.log("cncopt [4]: Unhandled resource type: " + city.GetResourceType(j, i));
									link += ".";
									break;
								}
							}
						}
						if (alliance) {
							link += "|" + alliance.get_POITiberiumBonus();
							link += "|" + alliance.get_POICrystalBonus();
							link += "|" + alliance.get_POIPowerBonus();
							link += "|" + alliance.get_POIInfantryBonus();
							link += "|" + alliance.get_POIVehicleBonus();
							link += "|" + alliance.get_POIAirBonus();
							link += "|" + alliance.get_POIDefenseBonus();
						}
						if (ClientLib.Data.MainData.GetInstance().get_Server().get_TechLevelUpgradeFactorBonusAmount() != 1.20) {
							link += "|newEconomy";
						}
						return link;
					},
					parseLink : function (link) {
						var formation = TABS.UTIL.Formation.Get();
						function getFaction(faction) {
							switch (faction) {
							case "G":
								return ClientLib.Base.EFactionType.GDIFaction;
							case "N":
								return ClientLib.Base.EFactionType.NODFaction;
							case "F":
								return ClientLib.Base.EFactionType.FORFaction;
							default:
								return ClientLib.Base.EFactionType.NotInitialized;
							}
						}
						function initMapRev() {
							var units = GAMEDATA.units,
								keys = Object.keys(GAMEDATA.units),
								len = keys.length,
								unit,
								data = {
									1 : {
										0 : {},
										1 : {},
										2 : {}
									},
									2 : {
										0 : {},
										1 : {},
										2 : {}
									},
									3 : {
										0 : {},
										1 : {},
										2 : {}
									}
								};
							while (len--) {
								unit = units[keys[len]];
								if (typeof TABS.UTIL.CNCOpt.keymap[unit.n] !== "undefined") {
									switch (unit.pt) {
									case ClientLib.Base.EPlacementType.Offense:
										data[unit.f][2][TABS.UTIL.CNCOpt.keymap[unit.n]] = parseInt(keys[len], 10);
										break;
									case ClientLib.Base.EPlacementType.Defense:
										data[unit.f][1][TABS.UTIL.CNCOpt.keymap[unit.n]] = parseInt(keys[len], 10);
										break;
									case ClientLib.Base.EPlacementType.Structure:
										data[unit.f][0][TABS.UTIL.CNCOpt.keymap[unit.n]] = parseInt(keys[len], 10);
										break;
									default:
										console.log("Unknown map: " + unit.n);
										break;
									}
								}
							}
							return data;
						}
						function findFreePos(formation) {
							var x, y, i, map = [];
							for (x = 0; x < ClientLib.Base.Util.get_ArmyMaxSlotCountX(); x++) {
								map[x] = [];
								for (y = 0; y < ClientLib.Base.Util.get_ArmyMaxSlotCountY(); y++) {
									map[x][y] = false;
									for (i = 0; i < formation.length; i++) {
										if (formation[i].x === x && formation[i].y === y)
											map[x][y] = true;
									}
								}
							}
							for (x = 0; x < ClientLib.Base.Util.get_ArmyMaxSlotCountX(); x++) {
								for (y = 0; y < ClientLib.Base.Util.get_ArmyMaxSlotCountY(); y++) {
									if (map[x][y] === false) {
										return {
											'x': x,
											'y': y
										};
									}
								}
							}
							return null;
						}
						if (link !== null && link.indexOf("|") != -1) {
							var parts = link.split("|");
							if (parts === null | parts.length < 5) {
								console.log("Corrupt link");
								return formation;
							}
							var keymapRev = initMapRev(),
								faction1 = getFaction(parts[1]),
								faction2 = getFaction(parts[2]),
								re = /[chjklnt.]|[\d]+[^.]/g,
								count = -1,
								step,
								type,
								id,
								level,
								section,
								i,
								j,
								x,
								y,
								result,
								units = [],
								freePos;
							while ((result = re.exec(parts[4]))) {
								result = result ? result[0] : null;
								step = ++count % 72;
								x = step % 9;
								y = Math.floor(step / 9);
								if (result.length !== 1) {
									type = result.substr(-1);
									level = parseInt(result.slice(0, -1), 10);
									section = Math.floor(count / 72);
									if (typeof keymapRev[section == 2 ? faction2 : faction1][section][type] === "undefined") {
										console.log("Unknown key: " + result + " at pos: " + count);
										continue;
									}
									id = keymapRev[section == 2 ? faction2 : faction1][section][type];
									switch (id) {
									case 175:
										id = 115;
										break;
									case 176:
										id = 155;
										break;
									}
									if (GAMEDATA.units[id].pt == ClientLib.Base.EPlacementType.Offense) {
										units.push({
											i : id,
											l : level,
											x : x,
											y : y
										});
									}
								}
							}
							
							formation = TABS.UTIL.Formation.set_Enabled(formation, false);
							for (i = 0; i < formation.length; i++) {
								for (j = 0; j < units.length; j++) {
									if (units[j] !== null && formation[i].i == units[j].i && formation[i].l == units[j].l) {
										formation[i].x = units[j].x;
										formation[i].y = units[j].y;
										formation[i].enabled = true;
										units.splice(j, 1);
										break;
									}
								}
							}
							for (i = 0; i < formation.length; i++) {
								if (formation[i].enabled === false) {
									freePos = findFreePos(formation);
									if (freePos !== null) {
										formation[i].x = freePos.x;
										formation[i].y = freePos.y;
									}
								}
							}
						}
						return formation;
					}
				}
			});
			qx.Class.define("TABS.MENU", {								// [singleton]	Menu
				type : "singleton",
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function () {
                    this.base(arguments);
					var ScriptsButton = qx.core.Init.getApplication().getMenuBar().getScriptsButton();

					this.Menu = new qx.ui.menu.Menu();
					ScriptsButton.Add("Battle Simulator V2", TABS.RES.IMG.Menu, this.Menu);

					//SETTINGS
					var settingsMenu = new qx.ui.menu.Menu(),
						settingsLoad = new qx.ui.menu.Button(this.tr("load"), null, null),
						settingsSave = new qx.ui.menu.Button(this.tr("save"), null, null),
						settingsReset = new qx.ui.menu.Button(this.tr("reset"), null, null);
					settingsLoad.addListener("execute", function () {
						TABS.SETTINGS.load();
					}, this);
					settingsSave.addListener("execute", function () {
						TABS.SETTINGS.save();
					}, this);
					settingsReset.addListener("execute", function () {
						TABS.SETTINGS.reset();
						alert(this.tr("Game will reload now."));
						window.location.reload();
					}, this);
					settingsMenu.add(settingsLoad);
					settingsMenu.add(settingsSave);
					settingsMenu.add(settingsReset);
					this.Menu.add(new qx.ui.menu.Button("Settings", null, null, settingsMenu));

					//Info
					this.Menu.add(new qx.ui.menu.Separator());
					var infoMenu = new qx.ui.menu.Menu(),
						infoHomepage = new qx.ui.menu.Button(this.tr("Homepage"), "https://github.global.ssl.fastly.net/favicon.ico", null),
						infoFacebook = new qx.ui.menu.Button(this.tr("Facebook"), "https://fbstatic-a.akamaihd.net/rsrc.php/yl/r/H3nktOa7ZMg.ico", null);
					infoHomepage.addListener("execute", function () {
						qx.core.Init.getApplication().showExternal("http://eistee82.github.io/ta_simv2");
					}, this);
					infoFacebook.addListener("execute", function () {
						qx.core.Init.getApplication().showExternal("https://www.facebook.com/tasimv2");
					}, this);
					infoMenu.add(infoHomepage);
					infoMenu.add(infoFacebook);
					this.Menu.add(new qx.ui.menu.Button("Info", null, null, infoMenu));
				},
				members : {
					Menu : null
				},
				defer : function () {
					TABS.addInit("TABS.MENU");
				}
			});
			qx.Class.define("TABS.STATS", {								//				Stats Object
				extend : qx.core.Object,
				statics : {
					Prio : {
						Click : 0,
						Enemy : 1,
						Structure : 2,
						Construction_Yard : 3,
						Command_Center : 4,
						Barracks : 5,
						Factory : 6,
						Airport : 7,
						Defense_Facility : 8,
						Defense_HQ : 9,
						Support : 10,
						Defense : 11,
						DefenseArmored : 12,
						DefenseNonArmored : 13,
						Offense : 14,
						Infantry : 15,
						Vehicle : 16,
						Aircraft : 17,
						BattleDuration : 18,
						AutoRepair : 19
					},
					Type : {
						Click : 0,
						HealthPointPercent : 1,
						RepairChargeBase : 2,
						RepairChargeOffense : 3,
						RepairCosts : 4,
						Loot : 5,
						HealthPointAutoRepairPercent : 6
					},
					getPreset : function (num) {
						switch (num) {
						case 1: // Construction_Yard
							return {
								Name : "CY",
								Description : "Most priority to construction yard including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.",
								Prio : [
									[TABS.STATS.Prio.Construction_Yard, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.Enemy, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.RepairChargeOffense, false, 0, false],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						case 2: // Defense_Facility
							return {
								Name : "DF",
								Description : "Most priority to defense facility including all in front of it.<br>After this the best armored defense health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.",
								Prio : [
									[TABS.STATS.Prio.Defense_Facility, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.DefenseArmored, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.RepairChargeOffense, false, 0, false],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						case 3: // Defense
							return {
								Name : "Deff",
								Description : "Most priority to defense health including the auto repair after the battle.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.",
								Prio : [
									[TABS.STATS.Prio.AutoRepair, TABS.STATS.Type.HealthPointAutoRepairPercent, false, 0, false],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.RepairChargeOffense, false, 0, false],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						case 4: // Command_Center
							return {
								Name : "CC",
								Description : "Most priority to command center including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected.",
								Prio : [
									[TABS.STATS.Prio.Command_Center, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.Enemy, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.RepairChargeOffense, false, 0, false],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						case 5: // Construction_Yard nokill 10%
							return {
								Name : "CY*",
								Description : "NoKill (farming) priorety.<br>Not working correctly yet.",
								Prio : [
									[TABS.STATS.Prio.DefenseArmored, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.Defense_Facility, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.Construction_Yard, TABS.STATS.Type.HealthPointPercent, false, 0.1, true],
									[TABS.STATS.Prio.Enemy, TABS.STATS.Type.HealthPointPercent, true, 0.8, true],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.RepairChargeOffense, false, 0, false],
									[TABS.STATS.Prio.Offense, TABS.STATS.Type.HealthPointPercent, false, 0, false],
									[TABS.STATS.Prio.BattleDuration, null, false, 0, false]
								]
							};
						default:
							return {
								Name : "live",
								Description : "Shows the current army formation.",
								Prio : []
							};
						}
					},
					selectPrio : function (stats, prio /*[this.Prio, this.Type, Negate/Boolean, Limit/0.0-1.0/%, NoKill/Boolean]*/) {
						switch (prio[0]) {
						case this.Prio.Enemy:
							return this._selectType(stats.Enemy.Overall, prio);
						case this.Prio.Structure:
							return this._selectType(stats.Enemy.Structure, prio);
						case this.Prio.Construction_Yard:
							return this._selectType(stats.Enemy.Construction_Yard, prio);
						case this.Prio.Command_Center:
							return this._selectType(stats.Enemy.Command_Center, prio);
						case this.Prio.Barracks:
							return this._selectType(stats.Enemy.Barracks, prio);
						case this.Prio.Factory:
							return this._selectType(stats.Enemy.Factory, prio);
						case this.Prio.Airport:
							return this._selectType(stats.Enemy.Airport, prio);
						case this.Prio.Defense_Facility:
							return this._selectType(stats.Enemy.Defense_Facility, prio);
						case this.Prio.Defense_HQ:
							return this._selectType(stats.Enemy.Defense_HQ, prio);
						case this.Prio.Support:
							return this._selectType(stats.Enemy.Support, prio);
						case this.Prio.Defense:
							return this._selectType(stats.Enemy.Defense, prio);
						case this.Prio.DefenseArmored:
							return this._selectType(stats.Enemy.DefenseArmored, prio);
						case this.Prio.DefenseNonArmored:
							return this._selectType(stats.Enemy.DefenseNonArmored, prio);
						case this.Prio.Offense:
							return this._selectType(stats.Offense.Overall, prio);
						case this.Prio.Infantry:
							return this._selectType(stats.Offense.Infantry, prio);
						case this.Prio.Vehicle:
							return this._selectType(stats.Offense.Vehicle, prio);
						case this.Prio.Aircraft:
							return this._selectType(stats.Offense.Aircraft, prio);
						case this.Prio.BattleDuration:
							return this._calcBattleDuration(stats.BattleDuration, prio);
						case this.Prio.AutoRepair:
							return this._selectType(stats.Enemy.DefenseArmored, prio);
						default:
							return Number.MAX_VALUE;
						}
					},
					_selectType : function (entity, prio) {
						switch (prio[1]) {
						case this.Type.HealthPointPercent:
							return this._calcHealthPoints(entity.HealthPoints, prio);
						case this.Type.RepairChargeBase:
							return entity.Resource[ClientLib.Base.EResourceType.RepairChargeBase] * (prio[2] ? -1 : 1); // Negate
						case this.Type.RepairChargeOffense:
							return Math.max(
								entity.Resource[ClientLib.Base.EResourceType.RepairChargeAir],
								entity.Resource[ClientLib.Base.EResourceType.RepairChargeInf],
								entity.Resource[ClientLib.Base.EResourceType.RepairChargeVeh]) * (prio[2] ? -1 : 1); // Negate
						case this.Type.RepairCosts:
						case this.Type.Loot:
							return this._calcCosts(entity.Resource, prio);
						case this.Type.HealthPointAutoRepairPercent:
							return this._calcHealthPointsAutoRepair(entity.HealthPoints, prio);
						default:
							return Number.MAX_VALUE;
						}
					},
					_calcCosts : function (Resource /*{ ClientLib.Base.EResourceType.Tiberium: 0, ClientLib.Base.EResourceType.Crystal: 0, ClientLib.Base.EResourceType.Credits: 0, ClientLib.Base.EResourceType.ResearchPoints: 0 }*/, prio) {
						var costs = Resource[ClientLib.Base.EResourceType.Tiberium] +
							Resource[ClientLib.Base.EResourceType.Crystal] +
							Resource[ClientLib.Base.EResourceType.Credits] +
							Resource[ClientLib.Base.EResourceType.ResearchPoints];
						return costs * (prio[2] ? -1 : 1); // Negate
					},
					_calcHealthPoints : function (HealthPoints /*{ max: 0, end: 0 }*/, prio) { //Todo: better front value selection
						var result = HealthPoints.end + HealthPoints.endFront;
						if (HealthPoints.end < (prio[3] * HealthPoints.max)) // Limit
							result = (prio[3] * (HealthPoints.max + HealthPoints.maxFront));
						if (prio[4] === true && !HealthPoints.end) // NoKill
							result = HealthPoints.max + HealthPoints.maxFront;
						if (result > (HealthPoints.max + HealthPoints.maxFront)) // max 1
							result = (HealthPoints.max + HealthPoints.maxFront);
						if (result < 0) // min 0
							result = 0;
						switch (prio[0]) { // Negate Offense
						case this.Prio.Offense:
						case this.Prio.Infantry:
						case this.Prio.Vehicle:
						case this.Prio.Aircraft:
							result = -1 * result;
							break;
						}
						return result * (prio[2] ? -1 : 1); // Negate
					},
					_calcHealthPointsAutoRepair : function (HealthPoints /*{ max: 0, end: 0 }*/, prio) { //Todo: better front value selection
						var result = HealthPoints.end + HealthPoints.rep + HealthPoints.endFront;
						if ((HealthPoints.end + HealthPoints.rep) < (prio[3] * HealthPoints.max)) // Limit
							result = (prio[3] * (HealthPoints.max + HealthPoints.maxFront));
						if (prio[4] === true && (HealthPoints.end + HealthPoints.rep) !== 0) // NoKill
							result = HealthPoints.max + HealthPoints.maxFront;
						if (result > (HealthPoints.max + HealthPoints.maxFront)) // max 1
							result = (HealthPoints.max + HealthPoints.maxFront);
						if (result < 0) // min 0
							result = 0;
						switch (prio[0]) { // Negate Offense
						case this.Prio.Offense:
						case this.Prio.Infantry:
						case this.Prio.Vehicle:
						case this.Prio.Aircraft:
							result = -1 * result;
							break;
						}
						return result * (prio[2] ? -1 : 1); // Negate
					},
					_calcBattleDuration : function (BattleDuration /*int*/, prio) {
						var result = BattleDuration,
							max = 120000;
						if (result < (prio[3] * max)) // Limit
							result = (prio[3] * max);
						if (result > max) // max 1
							result = max;
						if (result < 0) // min 0
							result = 0;
						return result * (prio[2] ? -1 : 1); // Negate
					}
				},
				properties : {
					BattleDuration : {
						check : "Number",
						init : 0,
						event : "changeBattleDuration"
					}
				},
				members : {
					Enemy : null,
					Offense : null,
					setAny : function (data) {
						if (data.BattleDuration !== undefined && data.BattleDuration !== this.getBattleDuration())
							this.setBattleDuration(data.BattleDuration);
						//Entity.HealthPoints
						if (data.Enemy.Overall.HealthPoints !== undefined)
							this.Enemy.Overall.HealthPoints.setAny(data.Enemy.Overall.HealthPoints);
						if (data.Enemy.Structure.HealthPoints !== undefined)
							this.Enemy.Structure.HealthPoints.setAny(data.Enemy.Structure.HealthPoints);
						if (data.Enemy.Construction_Yard.HealthPoints !== undefined)
							this.Enemy.Construction_Yard.HealthPoints.setAny(data.Enemy.Construction_Yard.HealthPoints);
						if (data.Enemy.Command_Center.HealthPoints !== undefined)
							this.Enemy.Command_Center.HealthPoints.setAny(data.Enemy.Command_Center.HealthPoints);
						if (data.Enemy.Barracks.HealthPoints !== undefined)
							this.Enemy.Barracks.HealthPoints.setAny(data.Enemy.Barracks.HealthPoints);
						if (data.Enemy.Factory.HealthPoints !== undefined)
							this.Enemy.Factory.HealthPoints.setAny(data.Enemy.Factory.HealthPoints);
						if (data.Enemy.Airport.HealthPoints !== undefined)
							this.Enemy.Airport.HealthPoints.setAny(data.Enemy.Airport.HealthPoints);
						if (data.Enemy.Defense_Facility.HealthPoints !== undefined)
							this.Enemy.Defense_Facility.HealthPoints.setAny(data.Enemy.Defense_Facility.HealthPoints);
						if (data.Enemy.Defense_HQ.HealthPoints !== undefined)
							this.Enemy.Defense_HQ.HealthPoints.setAny(data.Enemy.Defense_HQ.HealthPoints);
						if (data.Enemy.Support.HealthPoints !== undefined)
							this.Enemy.Support.HealthPoints.setAny(data.Enemy.Support.HealthPoints);
						if (data.Enemy.Defense.HealthPoints !== undefined)
							this.Enemy.Defense.HealthPoints.setAny(data.Enemy.Defense.HealthPoints);
						if (data.Enemy.DefenseArmored.HealthPoints !== undefined)
							this.Enemy.DefenseArmored.HealthPoints.setAny(data.Enemy.DefenseArmored.HealthPoints);
						if (data.Enemy.DefenseNonArmored.HealthPoints !== undefined)
							this.Enemy.DefenseNonArmored.HealthPoints.setAny(data.Enemy.DefenseNonArmored.HealthPoints);
						if (data.Offense.Overall.HealthPoints !== undefined)
							this.Offense.Overall.HealthPoints.setAny(data.Offense.Overall.HealthPoints);
						if (data.Offense.Infantry.HealthPoints !== undefined)
							this.Offense.Infantry.HealthPoints.setAny(data.Offense.Infantry.HealthPoints);
						if (data.Offense.Vehicle.HealthPoints !== undefined)
							this.Offense.Vehicle.HealthPoints.setAny(data.Offense.Vehicle.HealthPoints);
						if (data.Offense.Aircraft.HealthPoints !== undefined)
							this.Offense.Aircraft.HealthPoints.setAny(data.Offense.Aircraft.HealthPoints);
						//Entity.Resource
						if (data.Enemy.Overall.Resource !== undefined)
							this.Enemy.Overall.Resource.setAny(data.Enemy.Overall.Resource);
						if (data.Enemy.Structure.Resource !== undefined)
							this.Enemy.Structure.Resource.setAny(data.Enemy.Structure.Resource);
						if (data.Enemy.Construction_Yard.Resource !== undefined)
							this.Enemy.Construction_Yard.Resource.setAny(data.Enemy.Construction_Yard.Resource);
						if (data.Enemy.Command_Center.Resource !== undefined)
							this.Enemy.Command_Center.Resource.setAny(data.Enemy.Command_Center.Resource);
						if (data.Enemy.Barracks.Resource !== undefined)
							this.Enemy.Barracks.Resource.setAny(data.Enemy.Barracks.Resource);
						if (data.Enemy.Factory.Resource !== undefined)
							this.Enemy.Factory.Resource.setAny(data.Enemy.Factory.Resource);
						if (data.Enemy.Airport.Resource !== undefined)
							this.Enemy.Airport.Resource.setAny(data.Enemy.Airport.Resource);
						if (data.Enemy.Defense_Facility.Resource !== undefined)
							this.Enemy.Defense_Facility.Resource.setAny(data.Enemy.Defense_Facility.Resource);
						if (data.Enemy.Defense_HQ.Resource !== undefined)
							this.Enemy.Defense_HQ.Resource.setAny(data.Enemy.Defense_HQ.Resource);
						if (data.Enemy.Support.Resource !== undefined)
							this.Enemy.Support.Resource.setAny(data.Enemy.Support.Resource);
						if (data.Enemy.Defense.Resource !== undefined)
							this.Enemy.Defense.Resource.setAny(data.Enemy.Defense.Resource);
						if (data.Enemy.DefenseArmored.Resource !== undefined)
							this.Enemy.DefenseArmored.Resource.setAny(data.Enemy.DefenseArmored.Resource);
						if (data.Enemy.DefenseNonArmored.Resource !== undefined)
							this.Enemy.DefenseNonArmored.Resource.setAny(data.Enemy.DefenseNonArmored.Resource);
						if (data.Offense.Overall.Resource !== undefined)
							this.Offense.Overall.Resource.setAny(data.Offense.Overall.Resource);
						if (data.Offense.Infantry.Resource !== undefined)
							this.Offense.Infantry.Resource.setAny(data.Offense.Infantry.Resource);
						if (data.Offense.Vehicle.Resource !== undefined)
							this.Offense.Vehicle.Resource.setAny(data.Offense.Vehicle.Resource);
						if (data.Offense.Aircraft.Resource !== undefined)
							this.Offense.Aircraft.Resource.setAny(data.Offense.Aircraft.Resource);
					},
					getAny : function () {
						return {
							BattleDuration : this.getBattleDuration(),
							Enemy : {
								Overall : {
									HealthPoints : this.Enemy.Overall.HealthPoints.getAny(),
									Resource : this.Enemy.Overall.Resource.getAny()
								},
								Structure : {
									HealthPoints : this.Enemy.Structure.HealthPoints.getAny(),
									Resource : this.Enemy.Structure.Resource.getAny()
								},
								Construction_Yard : {
									HealthPoints : this.Enemy.Construction_Yard.HealthPoints.getAny(),
									Resource : this.Enemy.Construction_Yard.Resource.getAny()
								},
								Command_Center : {
									HealthPoints : this.Enemy.Command_Center.HealthPoints.getAny(),
									Resource : this.Enemy.Command_Center.Resource.getAny()
								},
								Barracks : {
									HealthPoints : this.Enemy.Barracks.HealthPoints.getAny(),
									Resource : this.Enemy.Barracks.Resource.getAny()
								},
								Factory : {
									HealthPoints : this.Enemy.Factory.HealthPoints.getAny(),
									Resource : this.Enemy.Factory.Resource.getAny()
								},
								Airport : {
									HealthPoints : this.Enemy.Airport.HealthPoints.getAny(),
									Resource : this.Enemy.Airport.Resource.getAny()
								},
								Defense_Facility : {
									HealthPoints : this.Enemy.Defense_Facility.HealthPoints.getAny(),
									Resource : this.Enemy.Defense_Facility.Resource.getAny()
								},
								Defense_HQ : {
									HealthPoints : this.Enemy.Defense_HQ.HealthPoints.getAny(),
									Resource : this.Enemy.Defense_HQ.Resource.getAny()
								},
								Support : {
									HealthPoints : this.Enemy.Support.HealthPoints.getAny(),
									Resource : this.Enemy.Support.Resource.getAny()
								},
								Defense : {
									HealthPoints : this.Enemy.Defense.HealthPoints.getAny(),
									Resource : this.Enemy.Defense.Resource.getAny()
								},
								DefenseArmored : {
									HealthPoints : this.Enemy.DefenseArmored.HealthPoints.getAny(),
									Resource : this.Enemy.DefenseArmored.Resource.getAny()
								},
								DefenseNonArmored : {
									HealthPoints : this.Enemy.DefenseNonArmored.HealthPoints.getAny(),
									Resource : this.Enemy.DefenseNonArmored.Resource.getAny()
								}
							},
							Offense : {
								Overall : {
									HealthPoints : this.Offense.Overall.HealthPoints.getAny(),
									Resource : this.Offense.Overall.Resource.getAny()
								},
								Infantry : {
									HealthPoints : this.Offense.Infantry.HealthPoints.getAny(),
									Resource : this.Offense.Infantry.Resource.getAny()
								},
								Vehicle : {
									HealthPoints : this.Offense.Vehicle.HealthPoints.getAny(),
									Resource : this.Offense.Vehicle.Resource.getAny()
								},
								Aircraft : {
									HealthPoints : this.Offense.Aircraft.HealthPoints.getAny(),
									Resource : this.Offense.Aircraft.Resource.getAny()
								}
							}
						};
					}
				},
				construct : function (data) {
					try {
                        this.base(arguments);
						this.Enemy = {
							Overall : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Structure : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Construction_Yard : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Command_Center : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Barracks : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Factory : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Airport : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Defense_Facility : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Defense_HQ : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Support : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Defense : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							DefenseArmored : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							DefenseNonArmored : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							}
						};
						this.Offense = {
							Overall : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Infantry : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Vehicle : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							},
							Aircraft : {
								HealthPoints : new TABS.STATS.Entity.HealthPoints(),
								Resource : new TABS.STATS.Entity.Resource()
							}
						};

						if (data !== undefined)
							this.setAny(data);
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up STATS constructor", e);
						console.groupEnd();
					}
				},
				events : {
					"changeBattleDuration" : "qx.event.type.Data"
				}
			});
			qx.Class.define("TABS.STATS.Entity.HealthPoints", {			//				Entity HealthPoints Objekt
				extend : qx.core.Object,
				properties : {
					max : {
						check : "Number",
						init : 0,
						event : "changeMax"
					},
					start : {
						check : "Number",
						init : 0,
						event : "changeStart"
					},
					end : {
						check : "Number",
						init : 0,
						event : "changeEnd"
					},
					rep : {
						check : "Number",
						init : 0,
						event : "changeRep"
					},
					maxFront : {
						check : "Number",
						init : 0,
						event : "changeMaxFront"
					},
					startFront : {
						check : "Number",
						init : 0,
						event : "changeStartFront"
					},
					endFront : {
						check : "Number",
						init : 0,
						event : "changeEndFront"
					}
				},
				members : {
					setAny : function (data) {
						if (data.max !== undefined && data.max !== this.getMax())
							this.setMax(data.max);
						if (data.start !== undefined && data.start !== this.getStart())
							this.setStart(data.start);
						if (data.end !== undefined && data.end !== this.getEnd())
							this.setEnd(data.end);
						if (data.rep !== undefined && data.rep !== this.getRep())
							this.setRep(data.rep);
						if (data.maxFront !== undefined && data.maxFront !== this.getMaxFront())
							this.setMaxFront(data.maxFront);
						if (data.startFront !== undefined && data.startFront !== this.getStartFront())
							this.setStartFront(data.startFront);
						if (data.endFront !== undefined && data.endFront !== this.getEndFront())
							this.setEndFront(data.endFront);
					},
					getAny : function () {
						return {
							max : this.getMax(),
							start : this.getStart(),
							end : this.getEnd(),
							rep : this.getRep(),
							maxFront : this.getMaxFront(),
							startFront : this.getStartFront(),
							endFront : this.getEndFront()
						};
					}
				},
				construct : function (data) {
					try {
                        this.base(arguments);
						if (data !== undefined)
							this.setAny(data);
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up STATS.Entity.HealthPoints constructor", e);
						console.groupEnd();
					}
				},
				events : {
					"changeMax" : "qx.event.type.Data",
					"changeStart" : "qx.event.type.Data",
					"changeEnd" : "qx.event.type.Data",
					"changeMaxFront" : "qx.event.type.Data",
					"changeStartFront" : "qx.event.type.Data",
					"changeEndFront" : "qx.event.type.Data"
				}
			});
			qx.Class.define("TABS.STATS.Entity.Resource", {				//				Entity Ressouce Object
				extend : qx.core.Object,
				properties : { //ClientLib.Base.EResourceType
					Tiberium : {
						check : "Number",
						init : 0,
						event : "changeTiberium"
					},
					Crystal : {
						check : "Number",
						init : 0,
						event : "changeCrystal"
					},
					Credits : {
						check : "Number",
						init : 0,
						event : "changeCredits"
					},
					ResearchPoints : {
						check : "Number",
						init : 0,
						event : "changeResearchPoints"
					},
					RepairChargeBase : {
						check : "Number",
						init : 0,
						event : "changeRepairChargeBase"
					},
					RepairChargeAir : {
						check : "Number",
						init : 0,
						event : "changeRepairChargeAir"
					},
					RepairChargeInf : {
						check : "Number",
						init : 0,
						event : "changeRepairChargeInf"
					},
					RepairChargeVeh : {
						check : "Number",
						init : 0,
						event : "changeRepairChargeVeh"
					}
				},
				members : {
					setAny : function (data) {
						if (data[1] !== undefined && data[1] !== this.getTiberium())
							this.setTiberium(data[1]);
						if (data[2] !== undefined && data[2] !== this.getCrystal())
							this.setCrystal(data[2]);
						if (data[3] !== undefined && data[3] !== this.getCredits())
							this.setCredits(data[3]);
						if (data[6] !== undefined && data[6] !== this.getResearchPoints())
							this.setResearchPoints(data[6]);
						if (data[7] !== undefined && data[7] !== this.getRepairChargeBase())
							this.setRepairChargeBase(data[7]);
						if (data[8] !== undefined && data[8] !== this.getRepairChargeAir())
							this.setRepairChargeAir(data[8]);
						if (data[9] !== undefined && data[9] !== this.getRepairChargeInf())
							this.setRepairChargeInf(data[9]);
						if (data[10] !== undefined && data[10] !== this.getRepairChargeVeh())
							this.setRepairChargeVeh(data[10]);
					},
					getAny : function () {
						return {
							1 : this.getTiberium(),
							2 : this.getCrystal(),
							3 : this.getCredits(),
							6 : this.getResearchPoints(),
							7 : this.getRepairChargeBase(),
							8 : this.getRepairChargeAir(),
							9 : this.getRepairChargeInf(),
							10 : this.getRepairChargeVeh()
						};
					}
				},
				construct : function (data) {
					try {
                        this.base(arguments);
						if (data !== undefined)
							this.setAny(data);
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up STATS.Entity.Resource constructor", e);
						console.groupEnd();
					}
				},
				events : {
					"changeTiberium" : "qx.event.type.Data",
					"changeCrystal" : "qx.event.type.Data",
					"changeCredits" : "qx.event.type.Data",
					"changeResearchPoints" : "qx.event.type.Data",
					"changeRepairChargeBase" : "qx.event.type.Data",
					"changeRepairChargeAir" : "qx.event.type.Data",
					"changeRepairChargeInf" : "qx.event.type.Data",
					"changeRepairChargeVeh" : "qx.event.type.Data"
				}
			});
			qx.Class.define("TABS.CACHE", {								// [singleton]	Cache for simulations
				type : "singleton",
				extend : qx.core.Object,
				construct : function () {
					try {
						this.base(arguments);
						this.cities = {};
						this.__Table = new Uint32Array(256);
						var tmp;
						for (var i = 256; i--; ) {
							tmp = i;
							for (var k = 8; k--; ) {
								tmp = tmp & 1 ? 0xEDB88320^(tmp >>> 1) : tmp >>> 1;
							}
							this.__Table[i] = tmp;
						}
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up CACHE constructor", e);
						console.groupEnd();
					}
				},
				members : {
					__Table : null,
					cities : null,
					sortByPosition : function (a, b) {
						return a.x - b.x || a.y - b.y || a.i - b.i; // using id as third because of garrison (both units at same position)
					},
					_Crc32 : function (data) { // data = array of bytes 0-255
						var crc = 0xFFFFFFFF;
						for (var i = 0, l = data.length; i < l; i++) {
							crc = (crc >>> 8)^this.__Table[(crc^data[i]) & 0xFF];
						}
						return crc^-1;
					},
					calcUnitsHash : function (units, ownid) { // units = TABS.UTIL.Formation.Get()
						if (units !== null) {
							units.sort(this.sortByPosition);
							var OwnCityId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
								i,
								data = [];
							for (i = 0; i < units.length; i++)
								if (units[i].enabled && units[i].h > 0)
									data.push(units[i].x, units[i].y, units[i].i, units[i].l);
							return OwnCityId.toString() + this._Crc32(data);
						}
						return null;
					},
					check : function (units, cityid, ownid) { // returns { key : "", result : { ownid : 0, cityid: 0, stats : {}, formation : [], combat : {}, valid: true } }
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							OwnCityId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
							Hash = this.calcUnitsHash(units, OwnCityId);
						if (CityId !== null && OwnCityId !== null && Hash !== null) {
							this.__validate(CityId, OwnCityId, Hash);
							return {
								key : Hash,
								result : this.get(Hash, CityId)
							};
						}
						return {
							key : null,
							result : null
						};
					},
					getAll : function (cityid) {
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId());
						if (typeof this.cities[CityId] === "undefined")
							this.cities[CityId] = {
								data : {},
								caches : {}
							};
						return this.cities[CityId];
					},
					get : function (key, cityid) { // returns { ownid : 0, cityid: 0, stats : {}, formation : [], combat : {}, valid: true }
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							caches = this.getAll(CityId).caches;
						if (typeof caches[key] !== "undefined" && caches[key].valid)
							return caches[key];
						return null;
					},
					getPrio : function (prios, cityid, ownid) {
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							caches = this.getAll(CityId).caches,
							results = [];
						for (var key in caches) {
							if (ownid === null || ownid === undefined || (ownid !== null && ownid !== undefined && caches[key].ownid == ownid))
								results.push({
									"key" : key,
									result : caches[key]
								});
						}
						results.sort(function (a, b) {
							var result = 0;
							for (var i = 0; i < prios.length; i++) {
								a.diff = result;
								b.diff = result;
								if (result)
									return result;
								else
									result = TABS.STATS.selectPrio(a.result.stats, prios[i]) - TABS.STATS.selectPrio(b.result.stats, prios[i]);
							}
							return result;
						});
						return results;
					},
					getPrio1 : function (prios, cityid, ownid) {
						var result = this.getPrio(prios, cityid, ownid);
						if (result.length === 0)
							result = {
								key : null,
								result : null
							};
						else {
							for (i = 0; i < result.length; i++) {
								if (result[i].result.valid === true) {
									result = result[i];
									break;
								}
							}
							if (Object.prototype.toString.call(result) === "[object Array]")
								result = result[0];
						}
						return result;
					},
					add : function (data, cityid, ownid) { // { key : "", result : { stats : {}, formation : [], combat : {} } }
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
							OwnCityId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
							OwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(OwnCityId),
							caches = this.getAll(CityId).caches;
						caches[data.key] = data.result;
						caches[data.key].cityid = CityId;
						caches[data.key].ownid = OwnCityId;
						if (OwnCity !== null)
							caches[data.key].recovery = OwnCity.get_hasRecovery();
						caches[data.key].valid = true;
						this.onAdd();
					},
					clearAll : function () {
						this.cities = {};
					},
					clear : function (cityid) {
						if (typeof this.cities[cityid] !== "undefined")
							return delete this.cities[cityid];
						return false;
					},
					merge : function (cityid, ownid, data, caches) {
						try {
							var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId()),
								OwnCityId = ((ownid !== undefined && ownid !== null) ? ownid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCityId()),
								key,
								sim = {
									data : data,
									caches : caches
								};
							for (key in sim.caches) {
								sim.caches[key].cityid = CityId;
								sim.caches[key].ownid = OwnCityId;
								sim.caches[key].recovery = sim.data.recovery;
								sim.caches[key].valid = true;
							}
							this.__validate(CityId, OwnCityId, sim);
							qx.lang.Object.mergeWith(this.getAll(CityId).caches, sim.caches); // overwrite = false?
							this.onAdd();
						} catch (e) {
							console.group("Tiberium Alliances Battle Simulator V2");
							console.error("Error in TABS.CACHE.merge", e);
							console.groupEnd();
						}
					},
					getCitySimAmount : function (cityid) {
						var CityId = ((cityid !== undefined && cityid !== null) ? cityid : ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId());
						if (typeof this.cities[CityId] !== "undefined" && typeof this.cities[CityId]["caches"] !== "undefined")
							return Object.keys(this.cities[CityId].caches).length;
						return 0;
					},
					__validate : function (cityid, ownid, hash) {
						var targetCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(cityid),
							ownCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(ownid),
							city = (typeof hash != "object" ? this.getAll(cityid) : hash),
							key;

						if (targetCity !== null && targetCity.get_Version() !== -1) {
							var version = targetCity.get_Version();
							if (city.data.version != version) {
								city.data.version = version;
								//invalidate
								for (key in city.caches)
									city.caches[key].valid = false;
							}
						}

						if (ownCity !== null && ownCity.get_Version() !== -1) {
							var alliance = ClientLib.Data.MainData.GetInstance().get_Alliance(),
								recovery = ownCity.get_hasRecovery();

							if (typeof hash != "object" && typeof city.caches[hash] !== "undefined" && city.caches[hash].recovery != recovery)
								city.caches[hash].valid = false;

							if (typeof hash == "object" && city.data.recovery != recovery)
								for (key in city.caches)
									city.caches[key].valid = false;

							if (alliance !== null) {
								if ((city.data.air != alliance.get_POIAirBonus() ||
										city.data.inf != alliance.get_POIInfantryBonus() ||
										city.data.veh != alliance.get_POIVehicleBonus()) &&
									recovery === false) {
									city.data.air = alliance.get_POIAirBonus();
									city.data.inf = alliance.get_POIInfantryBonus();
									city.data.veh = alliance.get_POIVehicleBonus();
									if (targetCity !== null)
										city.data.version = targetCity.get_Version();
									//invalidate
									for (key in city.caches)
										city.caches[key].valid = false;
								}
							}
						}
					},
					onAdd : function () {
						phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.onUiTick, this);
						phe.cnc.base.Timer.getInstance().addListener("uiTick", this.onUiTick, this);
					},
					onUiTick : function () {
						phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.onUiTick, this);
						this.fireEvent("addSimulation");
					}
				},
				events : {
					"addSimulation" : "qx.event.type.Event"
				}
			});
			qx.Class.define("TABS.APISimulation", {						// [singleton]	API Simulation
				type : "singleton",
				extend : qx.core.Object,
				properties : {
					data : {
						check : "Array",
						init : [],
						event : "OnData"
					},
					formation : {
						check : "Array",
						init : []
					},
					formationHash : {
						check : "Array",
						init : []
					},
					lock : {
						check : "Boolean",
						init : false,
						event : "OnLock"
					},
					request : {
						check : "Boolean",
						init : false
					},
					time : {
						check : "Number",
						init : 0,
						event : "OnTime"
					}
				},
				construct : function () {
					try {
                        this.base(arguments);
						this.addListener("OnSimulateBattleFinished", this._OnSimulateBattleFinished, this);
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up APISimulation constructor", e);
						console.groupEnd();
					}
				},
				members : {
					__Timeout : null,
					__TimerStart : null,
					SimulateBattle : function () {
						if (!this.getLock()) {
							var CurrentOwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity(),
								CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
							if (CurrentOwnCity !== null && CurrentCity !== null && CurrentCity.CheckInvokeBattle(CurrentOwnCity, true) == ClientLib.Data.EAttackBaseResult.OK) {
								clearTimeout(this.__Timeout);
								this.__Timeout = setTimeout(this._reset.bind(this), 10000);
								this.resetData();
								this.setLock(true);
								var formation = TABS.UTIL.Formation.Get(),
									armyUnits = [];
								for (var i in formation)
									if (formation[i].enabled && formation[i].h > 0)
										armyUnits.push({
											i : formation[i].id,
											x : formation[i].x,
											y : formation[i].y
										});

								this.setFormation(formation);

								ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand("SimulateBattle", {
									battleSetup : {
										d : CurrentCity.get_Id(),
										a : CurrentOwnCity.get_Id(),
										u : armyUnits,
										s : 0
									}
								}, phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, function (a, b) {
									this.__TimerStart = Date.now();
									this._updateTime();
									this.fireDataEvent("OnSimulateBattleFinished", b);
								}), null);
							}
						} else
							this.setRequest(true);
					},
					_OnSimulateBattleFinished : function (e) {
                        if (ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() === null)
                            return;
						var data = e.getData();
                        if (data === null) return;
                        var	mergedformation = TABS.UTIL.Formation.Merge(this.getFormation(), data.d.a),
							cache = TABS.CACHE.getInstance().check(mergedformation, data.d.di, data.d.ai);
						this.setData(data.e);
						cache.result = {
							stats : TABS.UTIL.Stats.get_Stats(data).getAny(),
							formation : mergedformation,
							combat : data.d
						};
						TABS.CACHE.getInstance().add(cache, data.d.di, data.d.ai);
					},
					_updateTime : function () {
						clearTimeout(this.__Timeout);
						var time = this.__TimerStart + 10000 - Date.now();
						if (time > 0) {
							if (time > 100)
								this.__Timeout = setTimeout(this._updateTime.bind(this), 100);
							else
								this.__Timeout = setTimeout(this._updateTime.bind(this), time);
						} else
							this.__TimerStart = time = 0;
						this.setTime(time);
						if (this.getTime() === 0)
							this._reset();
					},
					_reset : function () {
						this.resetLock();
						this.resetData();
						this.resetTime();
						if (this.getRequest()) {
							this.resetRequest();
							this.SimulateBattle();
						}
					}
				},
				events : {
					"OnData" : "qx.event.type.Data",
					"OnLock" : "qx.event.type.Data",
					"OnSimulateBattleFinished" : "qx.event.type.Data",
					"OnTime" : "qx.event.type.Data"
				}
			});
			qx.Class.define("TABS.PreArmyUnits", {						// [singleton]	Event: OnCityPreArmyUnitsChanged
				type : "singleton",
				extend : qx.core.Object,
				construct : function () {
					try {
                        this.base(arguments);
						phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.__CurrentOwnCityChange);
						phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.__CurrentCityChange);
						phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this.__ViewModeChange);
						if (ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity() !== null)
							this.__CurrentOwnCityChange(0, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity().get_Id());
						if (ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() !== null)
							this.__CurrentCityChange(0, ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Id());
						this.patchSetEnabled();
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up PreArmyUnits constructor", e);
						console.groupEnd();
					}
				},
				events : {
					"OnCityPreArmyUnitsChanged" : "qx.event.type.Event"
				},
				members : {
					CurrentCity : null,
					CurrentOwnCity : null,
					CityPreArmyUnits : null,
					__Timeout : null,
					__CurrentOwnCityChange : function (oldId, newId) {
						if (this.CurrentOwnCity !== null && this.CurrentCity !== null && this.CityPreArmyUnits !== null)
							phe.cnc.Util.detachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
						var CurrentOwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(newId);
						if (CurrentOwnCity !== null && CurrentOwnCity.IsOwnBase()) {
							this.CurrentOwnCity = CurrentOwnCity;
							if (this.CurrentCity !== null && ClientLib.Vis.VisMain.GetInstance().get_Mode() === ClientLib.Vis.Mode.CombatSetup) {
								this.CityPreArmyUnits = CurrentOwnCity.get_CityArmyFormationsManager().GetUpdatedFormationByTargetBaseId(this.CurrentCity.get_Id());
								phe.cnc.Util.attachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
								this.__CityPreArmyUnitsChanged();
							}
						}
					},
					__CurrentCityChange : function (oldId, newId) {
						if (this.CurrentOwnCity !== null && this.CurrentCity !== null && this.CityPreArmyUnits !== null)
							phe.cnc.Util.detachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
						var CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(newId);
						if (CurrentCity !== null && !CurrentCity.IsOwnBase()) {
							this.CurrentCity = CurrentCity;
							if (this.CurrentOwnCity !== null && ClientLib.Vis.VisMain.GetInstance().get_Mode() === ClientLib.Vis.Mode.CombatSetup) {
								this.CityPreArmyUnits = this.CurrentOwnCity.get_CityArmyFormationsManager().GetUpdatedFormationByTargetBaseId(CurrentCity.get_Id());
								phe.cnc.Util.attachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
								this.__CityPreArmyUnitsChanged();
							}
						}
					},
					__ViewModeChange : function (oldMode, newMode) {
						if (newMode == ClientLib.Vis.Mode.CombatSetup && this.CurrentCity !== null && this.CurrentOwnCity !== null) {
							this.CityPreArmyUnits = this.CurrentOwnCity.get_CityArmyFormationsManager().GetUpdatedFormationByTargetBaseId(this.CurrentCity.get_Id());
							phe.cnc.Util.attachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
							this.__CityPreArmyUnitsChanged();
						} else if (oldMode == ClientLib.Vis.Mode.CombatSetup && this.CityPreArmyUnits !== null) {
							phe.cnc.Util.detachNetEvent(this.CityPreArmyUnits, "ArmyChanged", ClientLib.Data.CityPreArmyUnitsChanged, this, this.__CityPreArmyUnitsChanged);
							this.CityPreArmyUnits = null;
						}
					},
					__CityPreArmyUnitsChanged : function () {
						clearTimeout(this.__Timeout);
						if (this.CurrentCity.get_Version() >= 0 && ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete()) {
							this.__Timeout = setTimeout(this._onCityPreArmyUnitsChanged.bind(this), 100);
						} else if (this.CurrentCity.get_Version() == -1 || (this.CurrentCity.get_Version() >= 0 && !ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete())) {
							this.__Timeout = setTimeout(this.__CityPreArmyUnitsChanged.bind(this), 100);
						}
					},
					_onCityPreArmyUnitsChanged : function () {
						this.fireEvent("OnCityPreArmyUnitsChanged");
					},
					patchSetEnabled : function () {
						try {
							var set_Enabled = ClientLib.Data.CityPreArmyUnit.prototype.set_Enabled.toString(),
								args = set_Enabled.substring(set_Enabled.indexOf("(") + 1, set_Enabled.indexOf(")")),
								body = set_Enabled.substring(set_Enabled.indexOf("{") + 1, set_Enabled.lastIndexOf("}"));
							body = body + "TABS.PreArmyUnits.getInstance().__CityPreArmyUnitsChanged();";
							/*jslint evil: true */
							ClientLib.Data.CityPreArmyUnit.prototype.set_Enabled = Function(args, body);
							/*jslint evil: false */
						} catch (e) {
							console.group("Tiberium Alliances Battle Simulator V2");
							console.error("Error setting up ClientLib.Data.CityPreArmyUnit.prototype.set_Enabled", e);
							console.groupEnd();
						}
					}
				},
				defer : function () {
					TABS.addInit("TABS.PreArmyUnits");
				}
			});
			qx.Class.define("TABS.PreArmyUnits.AutoSimulate", {			// [singleton]	Auto simulate battle
				type : "singleton",
				extend : qx.core.Object,
				construct : function () {
					try {
                        this.base(arguments);
						if (this.getEnabled())
							TABS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", this.SimulateBattle, this);
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up PreArmyUnits.AutoSimulate constructor", e);
						console.groupEnd();
					}
				},
				properties : {
					enabled : {
						check : "Boolean",
						init : TABS.SETTINGS.get("PreArmyUnits.AutoSimulate", true),
						apply : "_applyEnabled",
						event : "changeEnabled"
					}
				},
				members : {
					_applyEnabled : function (newValue) {
						TABS.SETTINGS.set("PreArmyUnits.AutoSimulate", newValue);
						if (newValue === true)
							TABS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", this.SimulateBattle, this);
						else
							TABS.PreArmyUnits.getInstance().removeListener("OnCityPreArmyUnitsChanged", this.SimulateBattle, this);
					},
					SimulateBattle : function () {
						var formation = TABS.UTIL.Formation.Get();
						if (formation !== null && formation.length > 0) {
							var cache = TABS.CACHE.getInstance().check(formation);
							if (cache.result === null)
								TABS.APISimulation.getInstance().SimulateBattle();
						}
					}
				},
				events : {
					"changeEnabled" : "qx.event.type.Data"
				},
				defer : function () {
					TABS.addInit("TABS.PreArmyUnits.AutoSimulate");
				}
			});
			qx.Class.define("TABS.GUI.ArmySetupAttackBar", {			// [singleton]	Shift and Mirror Buttons
				type : "singleton",
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function () {
					try {
						this.base(arguments);
						this.ArmySetupAttackBar = qx.core.Init.getApplication().getArmySetupAttackBar();

						// Mirror and Shift Buttons left Side (Rows/Wave)
						var i,
							cntWave;
						for (i = 0; i < ClientLib.Base.Util.get_ArmyMaxSlotCountY(); i++) {
							cntWave = this.ArmySetupAttackBar.getMainContainer().getChildren()[(i + 4)];
							cntWave.removeAll();
							cntWave.setLayout(new qx.ui.layout.HBox());
							cntWave.add(this.newSideButton(TABS.RES.IMG.Flip.H, this.tr("Mirrors units horizontally."), this.onClick_btnMirror, "h", i));
							cntWave.add(new qx.ui.core.Spacer(), {
								flex : 1
							});
							cntWave.add(this.newSideButton(TABS.RES.IMG.Arrows.Left, this.tr("Shifts units one space left."), this.onClick_btnShift, "l", i));
							cntWave.add(this.newSideButton(TABS.RES.IMG.Arrows.Right, this.tr("Shifts units one space right."), this.onClick_btnShift, "r", i));
						}

						// Mirror and Shift Buttons top
						var formation = this.ArmySetupAttackBar.getMainContainer().getChildren()[1].getChildren()[0],
							btnHBox = new qx.ui.container.Composite(new qx.ui.layout.HBox()),
							btnHBoxouter = new qx.ui.container.Composite(new qx.ui.layout.HBox());
						btnHBoxouter.add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						btnHBoxouter.add(btnHBox);
						btnHBoxouter.add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						this.ArmySetupAttackBar.add(btnHBoxouter, {
							left : 16,
							top : 7,
							right : 0
						});
						formation.bind("changeWidth", btnHBox, "width");

						for (i = 0; i < ClientLib.Base.Util.get_ArmyMaxSlotCountX(); i++) {
							btnHBox.add(new qx.ui.core.Spacer(), {
								flex : 1
							});
							btnHBox.add(this.newTopButton(TABS.RES.IMG.Flip.V, this.tr("Mirrors units vertically."), this.onClick_btnMirror, "v", i));
							btnHBox.add(new qx.ui.core.Spacer().set({
									width : 2
								}));
							btnHBox.add(this.newTopButton(TABS.RES.IMG.Arrows.Up, this.tr("Shifts units one space up."), this.onClick_btnShift, "u", i));
							btnHBox.add(this.newTopButton(TABS.RES.IMG.Arrows.Down, this.tr("Shifts units one space down."), this.onClick_btnShift, "d", i));
							btnHBox.add(new qx.ui.core.Spacer(), {
								flex : 1
							});
						}
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up GUI.ArmySetupAttackBar constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					ArmySetupAttackBar : null,
					newSideButton : function (icon, text, onClick, pos, sel) {
						var btn = new qx.ui.form.ModelButton(null, icon).set({
								toolTipText : text,
								width : 20,
								maxHeight : 25,
								alignY : "middle",
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints",
								model : [pos, sel]
							});
						btn.getChildControl("icon").set({
							maxWidth : 16,
							maxHeight : 16,
							scale : true
						});
						btn.addListener("click", onClick, this);
						return btn;
					},
					newTopButton : function (icon, text, onClick, pos, sel) {
						var btn = new qx.ui.form.ModelButton(null, icon).set({
								toolTipText : text,
								width : 25,
								maxHeight : 20,
								alignY : "middle",
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints",
								opacity : 0.3,
								model : [pos, sel]
							});
						btn.getChildControl("icon").set({
							maxWidth : 14,
							maxHeight : 14,
							scale : true
						});
						btn.addListener("click", onClick, this);
						btn.addListener("mouseover", function (e) {
							e.getTarget().set({
								opacity : 1.0
							});
						}, this);
						btn.addListener("mouseout", function (e) {
							e.getTarget().set({
								opacity : 0.3
							});
						}, this);
						return btn;
					},
					onClick_btnMirror : function (e) {
						var formation = TABS.UTIL.Formation.Get();
						formation = TABS.UTIL.Formation.Mirror(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						TABS.UTIL.Formation.Set(formation);
					},
					onClick_btnShift : function (e) {
						var formation = TABS.UTIL.Formation.Get();
						formation = TABS.UTIL.Formation.Shift(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						TABS.UTIL.Formation.Set(formation);
					}
				},
				defer : function () {
					TABS.addInit("TABS.GUI.ArmySetupAttackBar");
				}
			});
			qx.Class.define("TABS.GUI.PlayArea", {						// [singleton]	View Simulation, Open Stats Window
				type : "singleton",
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function () {
					try {
                        this.base(arguments);
						this.PlayArea = qx.core.Init.getApplication().getPlayArea();
						this.HUD = this.PlayArea.getHUD();
						var WDG_COMBATSWAPVIEW = this.HUD.getUIItem(ClientLib.Data.Missions.PATH.WDG_COMBATSWAPVIEW);

						//View Simulation
						this.btnSimulation = new webfrontend.ui.SoundButton(null, TABS.RES.IMG.Simulate).set({
								toolTipText : this.tr("View Simulation") + " [NUM 0]",
								width : 44,
								height : 44,
								allowGrowX : false,
								allowGrowY : false,
								appearance : "button-baseviews",
								marginRight : 6
							});
						this.btnSimulation.addListener("click", function () {
							this.onClick_btnSimulation();
						}, this);
						TABS.APISimulation.getInstance().bind("time", this.btnSimulation, "label", {
							converter : function (data) {
								return (data / 1000).toFixed(1);
							}
						});
						TABS.APISimulation.getInstance().addListener("OnSimulateBattleFinished", function () {
							this._updateBtnSimulation();
						}, this);
						TABS.APISimulation.getInstance().addListener("OnTimeChange", function () {
							this._updateBtnSimulation();
						}, this);
						TABS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", function () {
							this._updateBtnSimulation();
						}, this);
						WDG_COMBATSWAPVIEW.getLayoutParent().addAfter(this.btnSimulation, WDG_COMBATSWAPVIEW);

						//Move Box
						this.boxMove = new qx.ui.container.Composite(new qx.ui.layout.Grid()).set({
								decorator : "pane-light-plain",
								opacity : 0.7,
								paddingTop : 2,
								paddingLeft : 4,
								paddingRight : 3,
								paddingBottom : 5
							});

						this.boxMove.add(this.newButton(TABS.RES.IMG.Stats, this.tr("Statistic") + " [NUM 7]", this.onClick_btnStats, null, null), {
							row : 0,
							column : 0
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.Arrows.Up, this.tr("Shifts units one space up.") + " [NUM 8]", this.onClick_btnShift, "u", null), {
							row : 0,
							column : 1
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.CNCOpt, this.tr("Show current formation with CNCOpt") + " [NUM 9]<br>" + this.tr("Right click: Set formation from CNCOpt Long Link") + "<br>" + this.tr("Remember transported units are not supported."), this.onClick_CNCOpt, null, null), {
							row : 0,
							column : 2
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.Arrows.Left, this.tr("Shifts units one space left.") + " [NUM 4]", this.onClick_btnShift, "l", null), {
							row : 1,
							column : 0
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.DisableUnit, this.tr("Enables/Disables all units.") + " [NUM 5]", this.onClick_btnDisable, null, null), {
							row : 1,
							column : 1
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.Arrows.Right, this.tr("Shifts units one space right.") + " [NUM 6]", this.onClick_btnShift, "r", null), {
							row : 1,
							column : 2
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.Flip.H, this.tr("Mirrors units horizontally.") + " [NUM 1]", this.onClick_btnMirror, "h", null), {
							row : 2,
							column : 0
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.Arrows.Down, this.tr("Shifts units one space down.") + " [NUM 2]", this.onClick_btnShift, "d", null), {
							row : 2,
							column : 1
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.Flip.V, this.tr("Mirrors units vertically.") + " [NUM 3]", this.onClick_btnMirror, "v", null), {
							row : 2,
							column : 2
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.Offense.Infantry, this.tr("Enables/Disables all infantry units.") + " [NUM *]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Infantry, null), {
							row : 3,
							column : 0
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.Offense.Vehicle, this.tr("Enables/Disables all vehicles.") + " [NUM -]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Vehicle, null), {
							row : 3,
							column : 1
						});
						this.boxMove.add(this.newButton(TABS.RES.IMG.Offense.Aircraft, this.tr("Enables/Disables all aircrafts.") + " [NUM +]", this.onClick_btnDisable, ClientLib.Data.EUnitGroup.Aircraft, null), {
							row : 3,
							column : 2
						});

						this.PlayArea.add(this.boxMove, {
							left : 65,
							bottom : 67
						});

						phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this._onViewChanged);
						this._onViewChanged(ClientLib.Vis.Mode.CombatSetup, null);
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up GUI.PlayArea constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					PlayArea : null,
					HUD : null,
					btnSimulation : null,
					btnStats : null,
					boxMove : null,
					onHotKeyPress : function (key) {
						if (!phe.cnc.Util.isEventTargetInputField(key)) {
							var formation = TABS.UTIL.Formation.Get();
							switch (key.getNativeEvent().keyCode) {
							case 96: // NUM 0
								this.onClick_btnSimulation();
								break;
							case 97: // NUM 1
								formation = TABS.UTIL.Formation.Mirror(formation, "h", null);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 98: // NUM 2
								formation = TABS.UTIL.Formation.Shift(formation, "d", null);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 99: // NUM 3
								formation = TABS.UTIL.Formation.Mirror(formation, "v", null);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 100: // NUM 4
								formation = TABS.UTIL.Formation.Shift(formation, "l", null);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 101: // NUM 5
								formation = TABS.UTIL.Formation.toggle_Enabled(formation);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 102: // NUM 6
								formation = TABS.UTIL.Formation.Shift(formation, "r", null);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 103: // NUM 7
								this.onClick_btnStats();
								break;
							case 104: // NUM 8
								formation = TABS.UTIL.Formation.Shift(formation, "u", null);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 105: // NUM 9
								this.onClick_CNCOpt();
								break;
							case 106: // NUM *
								formation = TABS.UTIL.Formation.toggle_Enabled(formation, ClientLib.Data.EUnitGroup.Infantry);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 107: // NUM +
								formation = TABS.UTIL.Formation.toggle_Enabled(formation, ClientLib.Data.EUnitGroup.Aircraft);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 109: // NUM -
								formation = TABS.UTIL.Formation.toggle_Enabled(formation, ClientLib.Data.EUnitGroup.Vehicle);
								TABS.UTIL.Formation.Set(formation);
								break;
							case 110: // NUM ,
								break;
							case 111: // NUM /
								break;
							}
						}
					},
					_onViewChanged : function (oldMode, newMode) {
						if (newMode == ClientLib.Vis.Mode.CombatSetup) {
							this.btnSimulation.show();
							this.boxMove.show();
							qx.bom.Element.addListener(document, "keydown", this.onHotKeyPress, this);
						}
						if (oldMode == ClientLib.Vis.Mode.CombatSetup) {
							this.btnSimulation.hide();
							this.boxMove.hide();
							qx.bom.Element.removeListener(document, "keydown", this.onHotKeyPress, this);
							TABS.APISimulation.getInstance().removeListener("OnSimulateBattleFinished", this.OnSimulateBattleFinished, this);
						}
						if ((newMode == ClientLib.Vis.Mode.CombatSetup || newMode == ClientLib.Vis.Mode.Battleground) && TABS.SETTINGS.get("GUI.Window.Stats.open", true) && !TABS.GUI.Window.Stats.getInstance().isVisible())
							TABS.GUI.Window.Stats.getInstance().open();
					},
					_updateBtnSimulation : function () {
						var formation = TABS.UTIL.Formation.Get();
						if (formation !== null) {
							if (TABS.UTIL.Formation.IsFormationInCache()) {
								this.btnSimulation.setEnabled(true);
								this.btnSimulation.setShow("icon");
							} else {
								this.btnSimulation.setEnabled(!TABS.APISimulation.getInstance().getLock() && TABS.UTIL.Formation.Get().length > 0);
								if (TABS.APISimulation.getInstance().getData().length === 0 || TABS.UTIL.Formation.Get().length === 0)
									this.btnSimulation.setShow("icon");
								else if (this.btnSimulation.getShow() !== "label") {
									this.btnSimulation.setShow("label");
								}
							}
						} else {
							this.btnSimulation.setEnabled(false);
							this.btnSimulation.setShow("icon");
						}
					},
					onClick_btnSimulation : function () {
						var cache = TABS.CACHE.getInstance().check(TABS.UTIL.Formation.Get());
						if (cache.result === null || cache.result.combat === undefined) {
							TABS.APISimulation.getInstance().addListener("OnSimulateBattleFinished", this.OnSimulateBattleFinished, this);
							TABS.APISimulation.getInstance().SimulateBattle();
						} else {
							var CurrentCityId = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Id();
                            TABS.UTIL.Battleground.StartReplay(CurrentCityId, cache.result.combat);
						}
					},
					OnSimulateBattleFinished : function (data) {
						TABS.APISimulation.getInstance().removeListener("OnSimulateBattleFinished", this.OnSimulateBattleFinished, this);
						var CurrentCityId = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity().get_Id();
                        TABS.UTIL.Battleground.StartReplay(CurrentCityId, data.getData().d);
					},
					onClick_btnStats : function () {
						if (TABS.GUI.Window.Stats.getInstance().isVisible()) {
							TABS.SETTINGS.set("GUI.Window.Stats.open", false);
							TABS.GUI.Window.Stats.getInstance().close();
						} else {
							TABS.SETTINGS.set("GUI.Window.Stats.open", true);
							TABS.GUI.Window.Stats.getInstance().open();
						}
					},
					newButton : function (icon, text, onClick, pos, sel) {
						var btn = new qx.ui.form.ModelButton(null, icon).set({
								toolTipText : text,
								width : 22,
								height : 22,
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints",
								model : [pos, sel]
							});
						btn.getChildControl("icon").set({
							maxWidth : 16,
							maxHeight : 16,
							scale : true
						});
						btn.addListener("click", onClick, this);
						return btn;
					},
					onClick_btnMirror : function (e) {
						var formation = TABS.UTIL.Formation.Get();
						formation = TABS.UTIL.Formation.Mirror(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						TABS.UTIL.Formation.Set(formation);
					},
					onClick_btnShift : function (e) {
						var formation = TABS.UTIL.Formation.Get();
						formation = TABS.UTIL.Formation.Shift(formation, e.getTarget().getModel()[0], e.getTarget().getModel()[1]);
						TABS.UTIL.Formation.Set(formation);
					},
					onClick_btnDisable : function (e) {
						var formation = TABS.UTIL.Formation.Get();
						formation = TABS.UTIL.Formation.toggle_Enabled(formation, e.getTarget().getModel()[0]);
						TABS.UTIL.Formation.Set(formation);
					},
					onClick_CNCOpt : function (e) {
						if (e.isRightPressed())
							TABS.UTIL.Formation.Set(TABS.UTIL.CNCOpt.parseLink(prompt(this.tr("Enter CNCOpt Long Link:"))));
						else
							qx.core.Init.getApplication().showExternal(TABS.UTIL.CNCOpt.createLink());
					}
				},
				defer : function () {
					TABS.addInit("TABS.GUI.PlayArea");
				}
			});
			qx.Class.define("TABS.GUI.ReportReplayOverlay", {			// [singleton]	Back Button
				type : "singleton",
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function () {
					try {
                        this.base(arguments);
						var qxApp = qx.core.Init.getApplication();
						this.ReportReplayOverlay = qx.core.Init.getApplication().getReportReplayOverlay();

						this.btnBack = new qx.ui.form.Button(qxApp.tr("tnf:back")).set({
								toolTipText : qxApp.tr("tnf:back"),
								width : 53,
								height : 24,
								appearance : "button-friendlist-scroll"
							});
						this.btnBack.addListener("click", this.onClick_btnBack, this);
						this.ReportReplayOverlay.add(this.btnBack, {
							top : 10,
							right : 540
						});

						this.btnSkip = new qx.ui.form.Button(qxApp.tr("Skip")).set({
								toolTipText : qxApp.tr("Skip"),
								width : 52,
								height : 24,
								appearance : "button-friendlist-scroll"
							});
						this.btnSkip.addListener("click", this.onClick_btnSkip, this);
						this.ReportReplayOverlay.add(this.btnSkip, {
							top : 10,
							left : 542
						});
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up GUI.ReportReplayOverlay constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					ReportReplayOverlay : null,
					btnBack : null,
					btnSkip : null,
					onClick_btnBack : function () {
						var city = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
						if (city !== null) {
							qx.core.Init.getApplication().getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense, city.get_Id(), 0, 0);
							ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().SetPosition(0, qx.core.Init.getApplication().getPlayArea().getHUD().getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense));
						}
					},
					onClick_btnSkip : function () {
						if (ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_Simulation !== undefined && ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_Simulation().DoStep !== undefined) {
							while (ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_Simulation().DoStep(false)) {}
							ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1);
						} else {
							var BattleDuration = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_BattleDuration(),
								LastBattleTime = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_LastBattleTime();
							if (LastBattleTime >= BattleDuration)
								ClientLib.Vis.VisMain.GetInstance().get_Battleground().RestartReplay();
							ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(10000);
							phe.cnc.base.Timer.getInstance().addListener("uiTick", this.onTick_btnSkip, this);
						}
					},
					onTick_btnSkip : function () {
						var BattleDuration = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_BattleDuration(),
							LastBattleTime = ClientLib.Vis.VisMain.GetInstance().get_Battleground().get_LastBattleTime();
						if (LastBattleTime >= BattleDuration) {
							phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.onTick_btnSkip, this);
							ClientLib.Vis.VisMain.GetInstance().get_Battleground().set_ReplaySpeed(1);
						}
					}
				},
				defer : function () {
					TABS.addInit("TABS.GUI.ReportReplayOverlay");
				}
			});
			qx.Class.define("TABS.GUI.Window.Stats", {					// [singleton]	Stats Window
				type : "singleton",
				extend : qx.ui.window.Window,
				construct : function () {
					try {
						this.base(arguments);
						this.set({
							layout : new qx.ui.layout.VBox(),
							caption : "TABS: " + this.tr("Statistic"),
							icon : TABS.RES.IMG.Stats,
							minWidth : 175,
							contentPadding : 4,
							contentPaddingTop : 0,
							contentPaddingBottom : 3,
							allowMaximize : false,
							showMaximize : false,
							allowMinimize : false,
							showMinimize : false,
							resizable : true,
							resizableTop : false,
							resizableBottom : false,
							useResizeFrame : false
						});
						this.moveTo(
							TABS.SETTINGS.get("GUI.Window.Stats.position", [124, 31])[0],
							TABS.SETTINGS.get("GUI.Window.Stats.position", [124, 31])[1]);
						this.addListener("move", function () {
							TABS.SETTINGS.set("GUI.Window.Stats.position", [this.getBounds().left, this.getBounds().top]);
						}, this);
						this.addListener("resize", function () {
							TABS.SETTINGS.set("GUI.Window.Stats.width", this.getWidth());
							this.makeSimView();
						}, this);
						this.addListener("changeHeight", function () {
							if (this.getHeight() !== null)
								this.resetHeight();
						});
						this.addListener("appear", this.onAppear, this);
						this.addListener("close", this.onClose, this);
						this.setWidth(TABS.SETTINGS.get("GUI.Window.Stats.width", 175));
						this.getChildControl("close-button").addListener("execute", function () {
							TABS.SETTINGS.set("GUI.Window.Stats.open", false);
						}, this);
						this.getChildControl("icon").set({
							width : 20,
							height : 20,
							scale : true,
							alignY : "middle"
						});
						this.setStatus("0 " + this.tr("simulations in cache"));

						this.GUI = {
							Battle : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Enemy : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Repair : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Loot : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Buttons : new qx.ui.container.Composite(new qx.ui.layout.HBox(-2)).set({
								decorator : "pane-light-plain",
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							})
						};
						this.LabelsVBox = {
							Battle : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Enemy : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Repair : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Loot : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							}),
							Buttons : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								width : 29,
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0
							})
						};
						this.Label = {
							Battle : {
								Preset : new TABS.GUI.Window.Stats.Atom("P", null, this.tr("Preset")),
								Outcome : new TABS.GUI.Window.Stats.Atom("O", null, this.tr("tnf:combat report")),
								Duration : new TABS.GUI.Window.Stats.Atom("D", null, this.tr("tnf:combat timer npc: %1", "")),
								OwnCity : new TABS.GUI.Window.Stats.Atom("B", null, this.tr("tnf:base")),
								Morale : new TABS.GUI.Window.Stats.Atom("M", null, this.tr("Morale"))
							},
							Enemy : {
								Overall : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:total"), TABS.RES.IMG.Enemy.All),
								Defense : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:defense"), TABS.RES.IMG.Enemy.Defense),
								Structure : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:base"), TABS.RES.IMG.Enemy.Base),
								Construction_Yard : new TABS.GUI.Window.Stats.Atom("CY", null, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Construction_Yard, ClientLib.Base.EFactionType.GDIFaction)),
								Defense_Facility : new TABS.GUI.Window.Stats.Atom("DF", null, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Defense_Facility, ClientLib.Base.EFactionType.GDIFaction)),
								Command_Center : new TABS.GUI.Window.Stats.Atom("CC", null, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Command_Center, ClientLib.Base.EFactionType.GDIFaction)),
								Barracks : new TABS.GUI.Window.Stats.Atom("B", TABS.RES.IMG.Offense.Infantry, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Barracks, ClientLib.Base.EFactionType.GDIFaction)),
								Factory : new TABS.GUI.Window.Stats.Atom("F", TABS.RES.IMG.Offense.Vehicle, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Factory, ClientLib.Base.EFactionType.GDIFaction)),
								Airport : new TABS.GUI.Window.Stats.Atom("A", TABS.RES.IMG.Offense.Aircraft, TABS.RES.getDisplayName(ClientLib.Base.ETechName.Airport, ClientLib.Base.EFactionType.GDIFaction)),
								Support : new TABS.GUI.Window.Stats.Atom("S", null, this.tr("tnf:support"))
							},
							Repair : {
								Storage : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:offense repair time"), TABS.RES.IMG.RepairCharge.Base),
								Overall : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:repair points"), TABS.RES.IMG.RepairCharge.Offense),
								Infantry : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:infantry repair title"), TABS.RES.IMG.RepairCharge.Infantry),
								Vehicle : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:vehicle repair title"), TABS.RES.IMG.RepairCharge.Vehicle),
								Aircraft : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:aircraft repair title"), TABS.RES.IMG.RepairCharge.Aircraft)
							},
							Loot : {
								Tiberium : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:tiberium"), TABS.RES.IMG.Resource.Tiberium),
								Crystal : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:crystals"), TABS.RES.IMG.Resource.Crystal),
								Credits : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:credits"), TABS.RES.IMG.Resource.Credits),
								ResearchPoints : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:research points"), TABS.RES.IMG.Resource.ResearchPoints),
								Overall : new TABS.GUI.Window.Stats.Atom(this.tr("tnf:total") + " " + this.tr("tnf:loot"), TABS.RES.IMG.Resource.Transfer)
							},
							Buttons : {
								View : new TABS.GUI.Window.Stats.Atom(this.tr("View Simulation"), TABS.RES.IMG.Simulate).set({
									marginTop : 1,
									marginBottom : 5
								})
							}
						};
						for (var i in this.GUI) {
							for (var j in this.Label[i])
								this.LabelsVBox[i].add(this.Label[i][j]);
							this.GUI[i].add(this.LabelsVBox[i], {
								flex : 0
							});
						}

						//Enemy Health Section//
						this.EnemyHeader = this.makeHeader(this.tr("tnf:combat target"));
						this.EnemyHeader.addListener("click", function () {
							if (this.GUI.Enemy.isVisible()) {
								this.GUI.Enemy.exclude();
								TABS.SETTINGS.set("GUI.Window.Stats.Enemy.visible", false);
							} else {
								this.GUI.Enemy.show();
								TABS.SETTINGS.set("GUI.Window.Stats.Enemy.visible", true);
							}
						}, this);

						//Repair Section//
						this.RepairHeader = this.makeHeader(this.tr("tnf:own repair cost").replace(":", ""));
						this.RepairHeader.addListener("click", function () {
							if (this.GUI.Repair.isVisible()) {
								this.GUI.Repair.exclude();
								TABS.SETTINGS.set("GUI.Window.Stats.Repair.visible", false);
							} else {
								this.GUI.Repair.show();
								TABS.SETTINGS.set("GUI.Window.Stats.Repair.visible", true);
							}
						}, this);

						//Loot Section//
						this.LootHeader = this.makeHeader(this.tr("tnf:lootable resources:").replace(":", ""));
						this.LootHeader.addListener("click", function () {
							if (this.GUI.Loot.isVisible()) {
								this.GUI.Loot.exclude();
								TABS.SETTINGS.set("GUI.Window.Stats.Loot.visible", false);
							} else {
								this.GUI.Loot.show();
								TABS.SETTINGS.set("GUI.Window.Stats.Loot.visible", true);
							}
						}, this);

						this.add(this.GUI.Battle);
						this.add(this.EnemyHeader);
						this.add(this.GUI.Enemy);
						this.add(this.RepairHeader);
						this.add(this.GUI.Repair);
						this.add(this.LootHeader);
						this.add(this.GUI.Loot);
						this.add(this.GUI.Buttons);
						this.add(this.getChildControl("statusbar"));
						this.getChildControl("statusbar-text").set({
							textColor : "#BBBBBB"
						});
						this.getChildControl("statusbar").add(new qx.ui.core.Spacer(), {
							flex : 1
						});
						var fontsize = qx.theme.manager.Font.getInstance().resolve(this.getChildControl("statusbar-text").getFont()).getSize(),
							lblReset = new qx.ui.basic.Label(this.tr("Reset")).set({
								textColor : "#115274",
								font : new qx.bom.Font("statusbar-text").set({
									size : fontsize,
									decoration : "underline"
								})
							});
						lblReset.addListener("click", function () {
							var CurrentCityId = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCityId();
							if (CurrentCityId)
								TABS.CACHE.getInstance().clear(CurrentCityId);
						}, this);
						this.getChildControl("statusbar").add(lblReset);

						if (TABS.SETTINGS.get("GUI.Window.Stats.Enemy.visible", true) === false)
							this.GUI.Enemy.exclude();
						if (TABS.SETTINGS.get("GUI.Window.Stats.Repair.visible", true) === false)
							this.GUI.Repair.exclude();
						if (TABS.SETTINGS.get("GUI.Window.Stats.Loot.visible", true) === false)
							this.GUI.Loot.exclude();

						this.simViews = [];

						phe.cnc.Util.attachNetEvent(ClientLib.Vis.VisMain.GetInstance(), "ViewModeChange", ClientLib.Vis.ViewModeChange, this, this._onViewChanged);
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up TABS.GUI.Window.Stats constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					GUI : null,
					LabelsVBox : null,
					Label : null,
					EnemyHeader : null,
					RepairHeader : null,
					LootHeader : null,
					simViews : null,
                    StatsChanged : false,
					onAppear : function () {
						phe.cnc.base.Timer.getInstance().addListener("uiTick", this.__onTick, this);
                        TABS.CACHE.getInstance().addListener("addSimulation", this.__updateStats, this);
						TABS.PreArmyUnits.getInstance().addListener("OnCityPreArmyUnitsChanged", this.__updateStats, this);
						phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.__CurrentCityChange);
						phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.__CurrentCityChange);
                        this.__updateStats();
					},
					onClose : function () {
						phe.cnc.base.Timer.getInstance().removeListener("uiTick", this.__onTick, this);
                        TABS.CACHE.getInstance().removeListener("addSimulation", this.__updateStats, this);
						TABS.PreArmyUnits.getInstance().removeListener("OnCityPreArmyUnitsChanged", this.__updateStats, this);
						phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentOwnChange", ClientLib.Data.CurrentOwnCityChange, this, this.__CurrentCityChange);
						phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Cities(), "CurrentChange", ClientLib.Data.CurrentCityChange, this, this.__CurrentCityChange);
                        for (var i in this.simViews) {
                            this.simViews[i].resetStats();
                            this.simViews[i].__onTick();
                        }
					},
					__onTick : function () {
                        var CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
						if (!ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete() || CurrentCity === null || CurrentCity.get_Version() < 0) return;
                        if (this.StatsChanged) {
                            this.StatsChanged = false;
                            for (var i in this.simViews) {
                                this.simViews[i].updateStats();
                                this.simViews[i].__onTick();
                            }
                        } else {
                            for (var i in this.simViews) {
                                this.simViews[i].__onTick();
                            }
                        }
						this.setStatus(TABS.CACHE.getInstance().getCitySimAmount().toString() + " " + this.tr("simulations in cache"));
					},
                    __updateStats : function () {
                        this.StatsChanged = true;
                    },
                    __CurrentCityChange : function (oldId, newId) {
						if (ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(newId) === null) {
                            for (var i in this.simViews) {
                                this.simViews[i].resetStats();
                            }
                        }
					},
					_onViewChanged : function (oldMode, newMode) {
						if (newMode != ClientLib.Vis.Mode.CombatSetup && newMode != ClientLib.Vis.Mode.Battleground)
							this.close();
					},
					makeHeader : function (text) {
						var Header = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
								decorator : "pane-light-opaque"
							});
						Header.add(new qx.ui.basic.Label(text).set({
								alignX : "center",
								alignY : "middle",
								paddingTop : -2,
								paddingBottom : 4,
								font : "font_size_13_bold_shadow"
							}));
						return Header;
					},
					makeSimView : function () {
						var i,
							num = Math.round((this.getWidth() - 30) / 75);
						if (this.simViews.length != num) {
							for (i = 0; i < num; i++) {
								if (this.simViews[i] === undefined) {
									this.simViews[i] = new TABS.GUI.Window.Stats.SimView(i, this);
									this.GUI.Battle.add(this.simViews[i].GUI.Battle, {
										flex : 1,
										width : "100%"
									});
									this.GUI.Enemy.add(this.simViews[i].GUI.Enemy, {
										flex : 1,
										width : "100%"
									});
									this.GUI.Repair.add(this.simViews[i].GUI.Repair, {
										flex : 1,
										width : "100%"
									});
									this.GUI.Loot.add(this.simViews[i].GUI.Loot, {
										flex : 1,
										width : "100%"
									});
									this.GUI.Buttons.add(this.simViews[i].GUI.Buttons, {
										flex : 1,
										width : "100%"
									});
								}
							}
							for (i = 0; i < this.simViews.length; i++) {
								if (i >= num) {
									this.GUI.Battle.remove(this.simViews[i].GUI.Battle);
									this.GUI.Enemy.remove(this.simViews[i].GUI.Enemy);
									this.GUI.Repair.remove(this.simViews[i].GUI.Repair);
									this.GUI.Loot.remove(this.simViews[i].GUI.Loot);
									this.GUI.Buttons.remove(this.simViews[i].GUI.Buttons);
								}
							}
							while (this.simViews.length > num)
								this.simViews.splice(num, 1);
							this.__updateLabels();
                            this.__updateStats();
						}
					},
					__updateLabels : function () {
						if (this.simViews.length > 0) {
							var i,
								visibility;

							//Label.Battle.Morale
							visibility = "excluded";
							for (i in this.simViews) {
								if (this.simViews[i].Label.Battle.Morale.getValue() != "100%") {
									visibility = "visible";
									break;
								}
							}
							for (i in this.simViews)
								this.simViews[i].Label.Battle.Morale.setVisibility(visibility);
							this.Label.Battle.Morale.setVisibility(visibility);

							//Label.Enemy.Defense
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Defense.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Defense.setVisibility(visibility);
							this.Label.Enemy.Defense.setVisibility(visibility);

							//Label.Enemy.Defense_Facility
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Defense_Facility.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Defense_Facility.setVisibility(visibility);
							this.Label.Enemy.Defense_Facility.setVisibility(visibility);

							//Label.Enemy.Command_Center
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Command_Center.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Command_Center.setVisibility(visibility);
							this.Label.Enemy.Command_Center.setVisibility(visibility);

							//Label.Enemy.Barracks
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Barracks.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Barracks.setVisibility(visibility);
							this.Label.Enemy.Barracks.setVisibility(visibility);

							//Label.Enemy.Factory
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Factory.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Factory.setVisibility(visibility);
							this.Label.Enemy.Factory.setVisibility(visibility);

							//Label.Enemy.Airport
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Airport.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Airport.setVisibility(visibility);
							this.Label.Enemy.Airport.setVisibility(visibility);

							//Label.Enemy.Support
							visibility = "excluded";
							if (this.simViews[0].Stats.Enemy.Support.HealthPoints.getMax() > 0)
								visibility = "visible";
							for (i in this.simViews)
								this.simViews[i].Label.Enemy.Support.setVisibility(visibility);
							this.Label.Enemy.Support.setVisibility(visibility);
						}
					}
				}
			});
			qx.Class.define("TABS.GUI.Window.Stats.Atom", {				//				Stats Window Atom
				extend : qx.ui.basic.Atom,
				include : [qx.locale.MTranslation],
				construct : function (label, icon, toolTipText, toolTipIcon) {
					try {
						this.base(arguments, label, icon);
						if (label === undefined)
							label = null;
						if (icon === undefined)
							icon = null;
						if (toolTipText === undefined)
							toolTipText = null;
						if (toolTipIcon === undefined)
							toolTipIcon = null;
						var _toolTipText = (toolTipText !== null ? toolTipText : (label !== null ? label : "")),
							_toolTipIcon = (toolTipIcon !== null ? toolTipIcon : (icon !== null ? icon : "")),
							_show = (toolTipIcon !== null || icon !== null ? "icon" : (toolTipText !== null || label !== null ? "label" : "both"));
						this.initAlignX("center");
						this.initAlignY("middle");
						this.initGap(0);
						this.initIconPosition("top");
						this.initMinHeight(18);
						this.initToolTipText(_toolTipText);
						this.initToolTipIcon(_toolTipIcon);
						this.initShow(_show);
						this.setAlignX("center");
						this.setAlignY("middle");
						this.setGap(0);
						this.setIconPosition("top");
						this.setMinHeight(18);
						this.setToolTipText(_toolTipText);
						this.setToolTipIcon(_toolTipIcon);
						this.setShow(_show);
						this.getChildControl("icon").set({
							width : 18,
							height : 18,
							scale : true,
							alignY : "middle"
						});
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up TABS.GUI.Window.Stats.Atom constructor", e);
						console.groupEnd();
					}
				}
			});
			qx.Class.define("TABS.GUI.Window.Stats.SimView", {			//				Simulation View Objekt
				extend : qx.core.Object,
				include : [qx.locale.MTranslation],
				construct : function (num, window) {
					try {
                        this.base(arguments);
						var i,
							j,
							defaultPreset = TABS.SETTINGS.get("GUI.Window.Stats.SimView." + num, TABS.STATS.getPreset(num));
						if (defaultPreset.Name === undefined)
							defaultPreset = TABS.SETTINGS.set("GUI.Window.Stats.SimView." + num, TABS.STATS.getPreset(num)); // Reset Settings (if no Name)
						if (defaultPreset.Description === undefined)
							defaultPreset = TABS.SETTINGS.set("GUI.Window.Stats.SimView." + num, TABS.STATS.getPreset(num)); // Reset Settings (if no Description)
						this.Num = num;
						this.Window = window;
						this.Cache = {};
						this.Stats = new TABS.STATS();
						this.Name = defaultPreset.Name;
						this.Description = defaultPreset.Description;
						this.Prio = defaultPreset.Prio;
						this.GUI = {
							Battle : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							}),
							Enemy : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							}),
							Repair : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							}),
							Loot : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							}),
							Buttons : new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({
								padding : 5,
								allowGrowX : true,
								marginLeft : 0,
								marginRight : 0,
								decorator : "pane-light-opaque"
							})
						};
						this.Label = {
							Battle : {
								Preset : new qx.ui.basic.Label(this.tr(this.Name)).set({
									alignX : "center",
									alignY : "middle",
									minHeight : 18,
									toolTipText : this.tr(this.Description)
								}),
								Outcome : new qx.ui.basic.Atom("-", null).set({
									alignX : "center",
									alignY : "middle",
									gap : 0,
									iconPosition : "top",
									minHeight : 18,
									show : "label"
								}),
								Duration : new qx.ui.basic.Label("-:--").set({
									alignX : "center",
									alignY : "middle",
									minHeight : 18
								}),
								OwnCity : new qx.ui.basic.Label("-").set({
									alignX : "center",
									alignY : "middle",
									minHeight : 18
								}),
								Morale : new qx.ui.basic.Label("-").set({
									alignX : "center",
									alignY : "middle",
									minHeight : 18
								})
							},
							Enemy : {
								Overall : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Defense : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Structure : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Construction_Yard : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Defense_Facility : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Command_Center : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Barracks : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Factory : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Airport : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								}),
								Support : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Enemy",
									subType : "HealthPointsAbs"
								})
							},
							Repair : {
								Storage : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairStorage"
								}),
								Overall : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairCharge"
								}),
								Infantry : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairCharge"
								}),
								Vehicle : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairCharge"
								}),
								Aircraft : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Repair",
									subType : "RepairCharge"
								})
							},
							Loot : {
								Tiberium : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "Tiberium"
								}),
								Crystal : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "Crystal"
								}),
								Credits : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "Credits"
								}),
								ResearchPoints : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "ResearchPoints"
								}),
								Overall : new TABS.GUI.Window.Stats.SimView.Label("-").set({
									type : "Loot",
									subType : "Resource"
								})
							},
							Buttons : {
								View : new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({
									allowGrowX : true,
									marginLeft : 0,
									marginRight : 0
								})
							}
						};
						this.Label.Battle.Outcome.getChildControl("icon").set({
							width : 18,
							height : 18,
							scale : true,
							alignY : "middle"
						});
						this.Label.Repair.Overall.getContainerElement().setStyle("none", "0 0 1pt");
						for (i in this.GUI) {
							for (j in this.Label[i]) {
								this.GUI[i].add(this.Label[i][j], {
									flex : 1,
									right : 0
								});
							}
							this.GUI[i].addListener("dblclick", this.loadFormation, this);
						}
						this.Stats.addListener("changeBattleDuration", this.__updateBattleDuration.bind(this, this.Label.Battle.Duration));
						for (i in this.Stats.Enemy) {
							if (this.Label.Enemy.hasOwnProperty(i)) {
								if (this.Stats.Enemy[i].hasOwnProperty("HealthPoints")) {
									this.Stats.Enemy[i].HealthPoints.bind("max", this.Label.Enemy[i].HealthPoints, "max");
									this.Stats.Enemy[i].HealthPoints.bind("start", this.Label.Enemy[i].HealthPoints, "start");
									this.Stats.Enemy[i].HealthPoints.bind("end", this.Label.Enemy[i].HealthPoints, "end");
									if (i == "Overall") {
										for (j in this.Label.Loot) {
											this.Stats.Enemy[i].HealthPoints.bind("max", this.Label.Loot[j].HealthPoints, "max");
											this.Stats.Enemy[i].HealthPoints.bind("start", this.Label.Loot[j].HealthPoints, "start");
											this.Stats.Enemy[i].HealthPoints.bind("end", this.Label.Loot[j].HealthPoints, "end");
										}
									}
								}
								if (this.Stats.Enemy[i].hasOwnProperty("Resource")) {
									this.Stats.Enemy[i].Resource.bind("Tiberium", this.Label.Enemy[i].Resource, "Tiberium");
									this.Stats.Enemy[i].Resource.bind("Crystal", this.Label.Enemy[i].Resource, "Crystal");
									this.Stats.Enemy[i].Resource.bind("Credits", this.Label.Enemy[i].Resource, "Credits");
									this.Stats.Enemy[i].Resource.bind("ResearchPoints", this.Label.Enemy[i].Resource, "ResearchPoints");
									this.Stats.Enemy[i].Resource.bind("RepairChargeBase", this.Label.Enemy[i].Resource, "RepairChargeBase");
									this.Stats.Enemy[i].Resource.bind("RepairChargeAir", this.Label.Enemy[i].Resource, "RepairChargeAir");
									this.Stats.Enemy[i].Resource.bind("RepairChargeInf", this.Label.Enemy[i].Resource, "RepairChargeInf");
									this.Stats.Enemy[i].Resource.bind("RepairChargeVeh", this.Label.Enemy[i].Resource, "RepairChargeVeh");
									if (i == "Overall") {
										for (j in this.Label.Loot) {
											this.Stats.Enemy[i].Resource.bind("Tiberium", this.Label.Loot[j].Resource, "Tiberium");
											this.Stats.Enemy[i].Resource.bind("Crystal", this.Label.Loot[j].Resource, "Crystal");
											this.Stats.Enemy[i].Resource.bind("Credits", this.Label.Loot[j].Resource, "Credits");
											this.Stats.Enemy[i].Resource.bind("ResearchPoints", this.Label.Loot[j].Resource, "ResearchPoints");
											this.Stats.Enemy[i].Resource.bind("RepairChargeBase", this.Label.Loot[j].Resource, "RepairChargeBase");
											this.Stats.Enemy[i].Resource.bind("RepairChargeAir", this.Label.Loot[j].Resource, "RepairChargeAir");
											this.Stats.Enemy[i].Resource.bind("RepairChargeInf", this.Label.Loot[j].Resource, "RepairChargeInf");
											this.Stats.Enemy[i].Resource.bind("RepairChargeVeh", this.Label.Loot[j].Resource, "RepairChargeVeh");
										}
									}
								}
							}
						}
						for (i in this.Stats.Offense) {
							if (this.Label.Repair.hasOwnProperty(i)) {
								if (this.Stats.Offense[i].hasOwnProperty("HealthPoints")) {
									this.Stats.Offense[i].HealthPoints.bind("max", this.Label.Repair[i].HealthPoints, "max");
									this.Stats.Offense[i].HealthPoints.bind("start", this.Label.Repair[i].HealthPoints, "start");
									this.Stats.Offense[i].HealthPoints.bind("end", this.Label.Repair[i].HealthPoints, "end");
								}
								if (this.Stats.Offense[i].hasOwnProperty("Resource")) {
									this.Stats.Offense[i].Resource.bind("Tiberium", this.Label.Repair[i].Resource, "Tiberium");
									this.Stats.Offense[i].Resource.bind("Crystal", this.Label.Repair[i].Resource, "Crystal");
									this.Stats.Offense[i].Resource.bind("Credits", this.Label.Repair[i].Resource, "Credits");
									this.Stats.Offense[i].Resource.bind("ResearchPoints", this.Label.Repair[i].Resource, "ResearchPoints");
									this.Stats.Offense[i].Resource.bind("RepairChargeBase", this.Label.Repair[i].Resource, "RepairChargeBase");
									this.Stats.Offense[i].Resource.bind("RepairChargeAir", this.Label.Repair[i].Resource, "RepairChargeAir");
									this.Stats.Offense[i].Resource.bind("RepairChargeInf", this.Label.Repair[i].Resource, "RepairChargeInf");
									this.Stats.Offense[i].Resource.bind("RepairChargeVeh", this.Label.Repair[i].Resource, "RepairChargeVeh");
								}
							}
						}

						var ButtonAPISim = new qx.ui.form.ModelButton(null, TABS.RES.IMG.Simulate).set({
								maxHeight : 22,
								minWidth : 22,
								toolTipText : this.tr("tnf:refresh"),
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints"
							});
						ButtonAPISim.getChildControl("icon").set({
							maxWidth : 16,
							maxHeight : 16,
							scale : true
						});
						ButtonAPISim.addListener("click", function () {
							this.loadFormation();
							TABS.APISimulation.getInstance().SimulateBattle();
						}, this);
						this.Label.Buttons.View.add(ButtonAPISim);

						var ButtonPlay = new qx.ui.form.ModelButton(null, TABS.RES.IMG.Arrows.Right).set({
								maxHeight : 22,
								minWidth : 22,
								toolTipText : this.tr("View Simulation"),
								show : "icon",
								iconPosition : "top",
								appearance : "button-addpoints"
							});
						ButtonPlay.getChildControl("icon").set({
							maxWidth : 16,
							maxHeight : 16,
							scale : true
						});
						ButtonPlay.addListener("click", this.playReplay, this);
						this.Label.Buttons.View.add(ButtonPlay);
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up GUI.Window.Stats.SimView constructor", e);
						console.groupEnd();
					}
				},
				destruct : function () {},
				members : {
					Num : null,
					Window : null,
					GUI : null,
					Label : null,
					Cache : null,
					Stats : null,
                    StatsChanged : false,
					Prio : null,
					Name : null,
					Description : null,
					updateStats : function () {
						var i,
							cache = null,
							CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity();
						if (CurrentCity !== null && CurrentCity.get_Version() !== -1 && ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete()) {
							if (this.Prio.length === 0)
								cache = TABS.CACHE.getInstance().check(TABS.UTIL.Formation.Get());
							else
								cache = TABS.CACHE.getInstance().getPrio1(this.Prio);
						}

						if (cache !== null && cache.result !== null) {
							this.Cache = cache;
							this.Stats.setAny(cache.result.stats);
                            this.StatsChanged = true;
							this.__updateBattleOutcome();
							this.__updateBattleOwnCity();
							this.__updateBattleMoral();
							this.Window.__updateLabels();
						}

						if (typeof this.Cache["key"] !== "undefined" && typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							if (CurrentCity !== null &&
								CurrentCity.get_Version() !== -1 &&
								ClientLib.Vis.VisMain.GetInstance().GetActiveView().get_VisAreaComplete() &&
								this.Cache.key === TABS.CACHE.getInstance().calcUnitsHash(TABS.UTIL.Formation.Get(), this.Cache.result.ownid)) {
								for (i in this.GUI) {
									this.GUI[i].setDecorator("pane-light-opaque");
									this.GUI[i].setOpacity(1);
								}
							} else {
								for (i in this.GUI) {
									this.GUI[i].setDecorator("pane-light-plain");
									this.GUI[i].setOpacity(0.7);
								}
							}
						}
					},
					resetStats : function () {
						this.Cache = {};
						this.Stats.setAny((new TABS.STATS()).getAny());
                        this.StatsChanged = true;
						this.__updateBattleOutcome();
						this.__updateBattleOwnCity();
						this.__updateBattleMoral();
						this.Window.__updateLabels();
						for (var i in this.GUI) {
							this.GUI[i].setDecorator("pane-light-opaque");
							this.GUI[i].setOpacity(1);
						}
					},
					loadFormation : function () {
						if (typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["formation"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentOwnCityId(this.Cache.result.ownid);
							TABS.UTIL.Formation.Set(this.Cache.result.formation);
						}
					},
					playReplay : function () {
                        TABS.UTIL.Battleground.StartReplay(this.Cache.result.cityid, this.Cache.result.combat);
					},
					__updateBattleOutcome : function () {
						if (Object.getOwnPropertyNames(this.Cache).length === 0) {
							this.Label.Battle.Outcome.setShow("label");
							this.Label.Battle.Outcome.resetIcon();
							this.Label.Battle.Outcome.resetToolTipIcon();
							this.Label.Battle.Outcome.resetToolTipText();
						} else if (this.Label.Repair.Overall.HealthPoints.getEnd() <= 0) {
							this.Label.Battle.Outcome.setIcon(TABS.RES.IMG.Outcome.total_defeat);
							this.Label.Battle.Outcome.setToolTipIcon(TABS.RES.IMG.Outcome.total_defeat);
							this.Label.Battle.Outcome.setToolTipText(this.tr("tnf:total defeat"));
							this.Label.Battle.Outcome.setShow("icon");
						} else if (this.Label.Enemy.Overall.HealthPoints.getEnd() <= 0) {
							this.Label.Battle.Outcome.setIcon(TABS.RES.IMG.Outcome.total_victory);
							this.Label.Battle.Outcome.setToolTipIcon(TABS.RES.IMG.Outcome.total_victory);
							this.Label.Battle.Outcome.setToolTipText(this.tr("tnf:total victory"));
							this.Label.Battle.Outcome.setShow("icon");
						} else {
							this.Label.Battle.Outcome.setIcon(TABS.RES.IMG.Outcome.victory);
							this.Label.Battle.Outcome.setToolTipIcon(TABS.RES.IMG.Outcome.victory);
							this.Label.Battle.Outcome.setToolTipText(this.tr("tnf:victory"));
							this.Label.Battle.Outcome.setShow("icon");
						}
					},
					__updateBattleDuration : function (label, e) {
						label.setValue(e.getData() > 0 ? phe.cnc.Util.getTimespanString(e.getData() / 1000) : "-:--");
					},
					__updateBattleOwnCity : function () {
						if (typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							var ownCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.ownid);
							if (ownCity !== null)
								this.Label.Battle.OwnCity.setValue(ownCity.get_Name());
							else
								this.Label.Battle.OwnCity.resetValue();
						} else
							this.Label.Battle.OwnCity.resetValue();
					},
					__updateBattleMoral : function () {
						if (typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["cityid"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							var CurrentCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.cityid),
								OwnCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.ownid);
							if (CurrentCity !== null && OwnCity !== null) {
								var MoralSignType = ClientLib.Base.Util.GetMoralSignType(OwnCity.get_LvlOffense(), CurrentCity.get_LvlBase()),
									moral = 100;
								if (ClientLib.Data.MainData.GetInstance().get_Server().get_CombatUseMoral() && CurrentCity.IsNPC() && CurrentCity.get_Id() != ClientLib.Data.MainData.GetInstance().get_EndGame().GetCenter().get_CombatId() && (MoralSignType.k == 1 || MoralSignType.k == 2)) {
									moral = "~" + (moral - MoralSignType.v) + "%";
									if (MoralSignType.k == 1) {
										this.Label.Battle.Morale.setTextColor(webfrontend.theme.Color.colors["res-orange"]);
										this.Label.Battle.Morale.setToolTipText(this.tr("tnf:region moral warning %1", MoralSignType.v));
										this.Label.Battle.Morale.setToolTipIcon("resource/webfrontend/ui/common/icon_moral_alert_orange.png");
									} else if (MoralSignType.k == 2) {
										this.Label.Battle.Morale.setTextColor(webfrontend.theme.Color.colors["res-red"]);
										this.Label.Battle.Morale.setToolTipText(this.tr("tnf:region moral error %1", MoralSignType.v));
										this.Label.Battle.Morale.setToolTipIcon("resource/webfrontend/ui/common/icon_moral_alert_red.png");
									}
								} else {
									moral = moral + "%";
									this.Label.Battle.Morale.resetTextColor();
									this.Label.Battle.Morale.resetToolTipText();
									this.Label.Battle.Morale.resetToolTipIcon();
								}
								this.Label.Battle.Morale.setValue(moral);
							} else {
								this.Label.Battle.Morale.setValue("-");
								this.Label.Battle.Morale.resetTextColor();
								this.Label.Battle.Morale.resetToolTipText();
								this.Label.Battle.Morale.resetToolTipIcon();
							}
						}
					},
					__onTick : function () {
						if (typeof this.Cache["result"] !== "undefined" && typeof this.Cache.result["ownid"] !== "undefined") {
							var ownCity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.Cache.result.ownid);
                            if (ownCity !== null) {
                                var RepairCharge = Math.min(
                                        ownCity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeInf),
                                        ownCity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeVeh),
                                        ownCity.GetResourceCount(ClientLib.Base.EResourceType.RepairChargeAir));
                                this.Label.Repair.Storage.setValue(phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Time().GetTimeSpan(RepairCharge)));
                            } else
                                this.Label.Repair.Storage.resetValue();
						} else
							this.Label.Repair.Storage.resetValue();
                        if (this.StatsChanged) {
                            this.StatsChanged = false;
                            for (var i in this.Label.Enemy) {
                                this.Label.Enemy[i].__update();
                            }
                            for (i in this.Label.Repair) {
                                this.Label.Repair[i].__update();
                            }
                            for (i in this.Label.Loot) {
                                this.Label.Loot[i].__update();
                            }
                        }
					}
				}
			});
			qx.Class.define("TABS.GUI.Window.Stats.SimView.Label", {	//				Simulation View Label
				extend : qx.ui.basic.Label,
				include : [qx.locale.MTranslation],
				construct : function (label) {
					try {
                        this.base(arguments, label);
						this.initAlignX("right");
						this.initAlignY("middle");
						this.initMinHeight(18);
						this.setAlignX("right");
						this.setAlignY("middle");
						this.setMinHeight(18);
						this.HealthPoints = new TABS.STATS.Entity.HealthPoints();
						this.Resource = new TABS.STATS.Entity.Resource();
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up TABS.GUI.Window.Stats.SimView.Label constructor", e);
						console.groupEnd();
					}
				},
				properties : {
					type : {
						init : "Enemy",
						check : ["Enemy", "Repair", "Loot"]
					},
					subType : {
						init : "HealthPointsAbs",
						check : ["HealthPointsAbs", "HealthPointsRel", "RepairCharge", "RepairStorage", "Resource", "Tiberium", "Crystal", "Credits", "ResearchPoints"]
					}
				},
				members : {
					HealthPoints : null,
					Resource : null,
					__update : function () {
						var value = null;
						if (ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentCity() !== null) {
							switch (this.getType()) {
							case "Enemy":
								switch (this.getSubType()) {
								case "HealthPointsAbs":
									value = this.HealthPointsAbs();
									break;
								case "HealthPointsRel":
									value = this.HealthPointsRel();
									break;
								case "RepairCharge":
									value = this.RepairCharge();
									break;
								default:
									break;
								}
								break;
							case "Repair":
								switch (this.getSubType()) {
								case "HealthPointsAbs":
									value = this.HealthPointsAbs();
									break;
								case "HealthPointsRel":
									value = this.HealthPointsRel();
									break;
								case "RepairCharge":
									value = this.RepairCharge();
									break;
								case "RepairStorage":
                                    return;
								case "Crystal":
									value = this.Loot();
									break;
								default:
									break;
								}
								break;
							case "Loot":
								switch (this.getSubType()) {
								case "Resource":
								case "Tiberium":
								case "Crystal":
								case "Credits":
								case "ResearchPoints":
									value = this.Loot();
									break;
								default:
									break;
								}
								break;
							default:
								break;
							}
						}

						if (this.HealthPoints.getMax() > 0 && value !== null) {
							this.setValue(value.text);
							this.setTextColor(value.color);
						} else {
							this.resetValue();
							this.resetTextColor();
						}
					},
					HealthPointsAbs : function () {
						if (this.HealthPoints.getMax() > 0) {
							var percent = (this.HealthPoints.getEnd() / this.HealthPoints.getMax()) * 100,
								digits = (percent <= 0 || percent >= 100 ? 0 : (percent >= 10 ? 1 : 2));
							percent = Math.round(percent * Math.pow(10, digits)) / Math.pow(10, digits);
							return {
								text : percent.toFixed(digits) + " %",
								color : this.getColorFromPercent(this.HealthPoints.getEnd() / this.HealthPoints.getMax())
							};
						}
						return null;
					},
					HealthPointsRel : function () {
						if (this.HealthPoints.getMax() > 0) {
							var percent = ((this.HealthPoints.getStart() - this.HealthPoints.getEnd()) / this.HealthPoints.getMax()) * 100,
								digits = (percent <= 0 || percent >= 100 ? 0 : (percent >= 10 ? 1 : 2));
							percent = Math.round(percent * Math.pow(10, digits)) / Math.pow(10, digits);
							return {
								text : percent.toFixed(digits) + " %",
								color : this.getColorFromPercent(this.HealthPoints.getEnd() / this.HealthPoints.getMax())
							};
						}
						return null;
					},
					RepairCharge : function () {
						if (this.HealthPoints.getMax() > 0) {
							return {
								text : phe.cnc.Util.getTimespanString(Math.max(this.Resource.getRepairChargeBase(), this.Resource.getRepairChargeAir(), this.Resource.getRepairChargeInf(), this.Resource.getRepairChargeVeh())),
								color : this.getColorFromPercent(1 - (this.HealthPoints.getEnd() / this.HealthPoints.getMax()))
							};
						}
						return null;
					},
					Loot : function () {
						var res = 0,
							lootFromCurrentCity = TABS.UTIL.Stats.get_LootFromCurrentCity(),
							loot;
						if (this.HealthPoints.getMax() > 0 && lootFromCurrentCity !== null) {
							switch (this.getSubType()) {
							case "Resource":
								res = this.Resource.getTiberium() + this.Resource.getCrystal() + this.Resource.getCredits() + this.Resource.getResearchPoints();
								loot = lootFromCurrentCity.getTiberium() + lootFromCurrentCity.getCrystal() + lootFromCurrentCity.getCredits() + lootFromCurrentCity.getResearchPoints();
								break;
							case "Tiberium":
								res = this.Resource.getTiberium();
								loot = lootFromCurrentCity.getTiberium();
								break;
							case "Crystal":
								res = this.Resource.getCrystal();
								loot = lootFromCurrentCity.getCrystal();
								break;
							case "Credits":
								res = this.Resource.getCredits();
								loot = lootFromCurrentCity.getCredits();
								break;
							case "ResearchPoints":
								res = this.Resource.getResearchPoints();
								loot = lootFromCurrentCity.getResearchPoints();
								break;
							}
							return {
								text : phe.cnc.gui.util.Numbers.formatNumbersCompact(res),
								color : this.getColorFromPercent(1 - (res / loot))
							};
						}
						return null;
					},
					getColorFromPercent : function (value) { // 1 = red, 0.5 = yellow, 0 = green
						return "hsl(" + ((120 - ((100 - ((1 - value) * 100)) * 1.2)) - 0) + ", 100%, " + (25 + Math.round(((Math.abs(Math.max(value - 0.4, 0)) * 2) + (Math.abs(Math.max((1 - value) - 0.6, 0)))) * 25)) + "%)";
					}
				}
			});
			qx.Class.define("TABS.GUI.Window.Prios", {					// [singleton]	Prios Window
				extend : qx.ui.window.Window,
				construct : function (prios) {
					try {
						this.base(arguments);
						this.set({
							layout : new qx.ui.layout.Grid(),
							caption : this.tr("Priority Setup"),
							allowMaximize : false,
							showMaximize : false,
							allowMinimize : false,
							showMinimize : false,
							resizable : false
						});
						this.center();
						this.Prios = prios;
					} catch (e) {
						console.group("Tiberium Alliances Battle Simulator V2");
						console.error("Error setting up TABS.GUI.Window.Prios constructor", e);
						console.groupEnd();
					}
				},
				members : {
					Prios : null
				}
			});
		}
		function translation() {
			var localeManager = qx.locale.Manager.getInstance();

			// Default language is english (en)
			// Available Languages are: ar,ce,cs,da,de,en,es,fi,fr,hu,id,it,nb,nl,pl,pt,ro,ru,sk,sv,ta,tr,uk
			// You can send me translations so I can include them in the Script.

			// German
			localeManager.addTranslation("de", {
				"Shifts units one space up." : "Verschiebt Einheiten einen Platz nach oben.", //GUI.ArmySetupAttackBar
				"Shifts units one space down." : "Verschiebt die Einheiten einen Platz nach unten.", //GUI.ArmySetupAttackBar
				"Shifts units one space left." : "Verschiebt die Einheiten einen Platz nach links.", //GUI.ArmySetupAttackBar
				"Shifts units one space right." : "Verschiebt die Einheiten einen Platz nach rechts.", //GUI.ArmySetupAttackBar
				"Mirrors units horizontally." : "Spiegelt die Einheiten horizontal.", //GUI.ArmySetupAttackBar
				"Mirrors units vertically." : "Spiegelt die Einheiten vertikal.", //GUI.ArmySetupAttackBar
				"View Simulation" : "Simulation anzeigen", //GUI.PlayArea + GUI.Window.Stats.SimView
				"Statistic" : "Statistik", //GUI.PlayArea + GUI.Window.Stats
				"Show current formation with CNCOpt" : "Zeigt die aktuelle Formation mit CNCOpt an", //GUI.PlayArea
				"Right click: Set formation from CNCOpt Long Link" : "Rechtsklick: Formation von CNCOpt Long Link laden", //GUI.PlayArea
				"Remember transported units are not supported." : "Denk daran das transportierte Einheiten nicht unterstützt werden.", //GUI.PlayArea
				"Enter CNCOpt Long Link:" : "CNCOpt Long Link eingeben:", //GUI.PlayArea
				"simulations in cache" : "Simulationen im Cache", //GUI.Window.Stats
				"Most priority to construction yard including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected." : "Die größte Priorität liegt auf dem Bauhof mit allem was vor ihm liegt.<br>Danach wird die Simulation aus dem Cache herausgesucht die den meisten<br>Schaden am Gegner verursacht.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", //STATS
				"Most priority to defense facility including all in front of it.<br>After this the best armored defense health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected." : "Die größte Priorität liegt auf der Verteidigungseinrichtung mit allem was vor ihr liegt.<br>Danach wird die Simulation aus dem Cache herausgesucht die den meisten<br>Schaden an bewaffneten Defensiveinheiten verursacht.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", //STATS
				"Most priority to defense health including the auto repair after the battle.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected." : "Die größte Priorität liegt auf dem verursachtem Schaden an Defensiveinheiten<br>unter Berücksichtigung der automatischen Reperatur nach dem Kampf.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", //STATS
				"Most priority to command center including all in front of it.<br>After this the best total enemy health from the cached simulations is selected.<br>If no better simulation is found, the best offence unit repair charge and<br>battle duration from the cached simulations is selected." : "Die größte Priorität liegt auf der Komandozentrale mit allem was vor ihr liegt.<br>Danach wird die Simulation aus dem Cache herausgesucht die den meisten<br>Schaden am Gegner verursacht.<br>Wenn keine bessere Formation gefunden wird, wird die Simulation mit der<br>niedrigsten Offensiv Reperaturzeit und besten Kampfdauer aus dem Cache herausgesucht.", //STATS
				"NoKill (farming) priorety.<br>Not working correctly yet." : "Vorschießen (farmen) Priorität.<br>Funktioniert noch nicht sehr gut.", //STATS
				"Shows the current army formation." : "Zeigt die aktuelle Armeeformation an." //STATS
			});
		}
		function waitForGame() {
			try {
				if (typeof qx != 'undefined' &&
					typeof qx.core != 'undfined' &&
					typeof qx.core.Init != 'undefined') {
					var app = qx.core.Init.getApplication();
					if (app !== null && app.initDone === true &&
						ClientLib.Data.MainData.GetInstance().get_Player().get_Id() !== 0 &&
						ClientLib.Data.MainData.GetInstance().get_Server().get_WorldId() !== 0) {
						try {
							console.time("loaded in");
                            translation();
                            createClasses();
                            TABS.getInstance();
							console.group("Tiberium Alliances Battle Simulator V2");
							console.timeEnd("loaded in");
							console.groupEnd();
						} catch (e) {
							console.group("Tiberium Alliances Battle Simulator V2");
							console.error("Error in waitForGame", e);
							console.groupEnd();
						}
					} else {
						window.setTimeout(waitForGame, 1000);
					}
				} else {
					window.setTimeout(waitForGame, 1000);
				}
			} catch (e) {
				console.group("Tiberium Alliances Battle Simulator V2");
				console.error("Error in waitForGame", e);
				console.groupEnd();
			}
		}
		window.setTimeout(waitForGame, 1000);
	}
	.toString() + ")();";
	script.type = "text/javascript";
	document.getElementsByTagName("head")[0].appendChild(script);
})();


