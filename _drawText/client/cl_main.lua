drawText = function(key, desc)
    SendNUIMessage({
        action = 'textUI',
        state = true,
        key = key,
        desc = desc
    })
end
exports('drawText', drawText)

hideText = function()
    SendNUIMessage({
        action = 'textUI',
        state = false
    })
end
exports('hideText', hideText)