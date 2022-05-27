<script lang="ts">
    import Row from "$lib/Row.svelte";
    import Col from "$lib/Col.svelte";
</script>

<div class="column-page">
    <h1>Row/Column</h1>
    <Row>
        <Col width={4}>
            <div class="col">
                col-4
            </div>
        </Col>
        <Col width={4}>
            <div class="col">
                col-4
            </div>
        </Col>
        <Col width={4}>
            <div class="col">
                col-4
            </div>
        </Col>
    </Row>
    <Row>
        <Col width={3}>
            <div class="col">
                col-3
            </div>
        </Col>
        <Col width={3}>
            <div class="col">
                col-3
            </div>
        </Col>
        <Col width={6}>
            <div class="col">
                col-6
            </div>
        </Col>
    </Row>
    <Row>
        <Col width={12}>
            <div class="col">
                col-12
            </div>
        </Col>
    </Row>
</div>

<style>
.col {
    background-color: #fafafa;
    border: #cacaca;
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>