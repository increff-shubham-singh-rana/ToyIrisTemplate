package com.shubham.increff.controller;

import com.shubham.increff.model.DashBoardData;
import com.shubham.increff.util.ApiException;
import com.shubham.increff.util.TempDataCreator;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Api
@RestController
public class RunAlgoController {


    @ApiOperation(value = "Run Algo")
    @RequestMapping(path = "/api/run/{algoName}", method = RequestMethod.GET)
    public void updateSales (@PathVariable String algoName) throws ApiException {
        System.out.println("Algorithm - "+algoName +" is running");
    }

    @ApiOperation(value = "Execution Updates")
    @RequestMapping(path = "/api/run/updates", method = RequestMethod.GET)
    public DashBoardData executionResults () throws ApiException {
        System.out.println("Fetch DashBoard Tiles Data Successful");
        return TempDataCreator.createDashBoardData();
    }
}
